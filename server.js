require('dotenv').config({})

const express = require('express')
const bodyParser = require('body-parser')
const subdomain = require('express-subdomain')
const next = require('next')
const { setup, getDB } = require('radiks-server')
const path = require('path')
const dirTree = require("directory-tree")
const axios = require('axios')

const port = parseInt(process.env.PORT, 10) || 4000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const dashboardApp = next({
  dir: './dashboard', // base directory where everything is, could move to src later
  dev
})

const app = express()

setup().then(RadiksController => {
  app.use('/radiks', RadiksController)
})

const dashboardHandle = dashboardApp.getRequestHandler()

const main = async () => {
  try {
    const themes = dirTree('./dashboard/themes')
    const templates = themes.children.filter(c => c.type === 'directory').map(file => file.name)
    
    const mongo = await getDB(`${process.env.DB_URL}/radiks-server`)
    await dashboardApp.prepare()
    const radiksApp = await setup({
      mongoDBUrl: `${process.env.DB_URL}/radiks-server`
    })

    const server = express()
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.use((req, res, next) => {
      
      res.set(`can't-be-evil`, true)
      next()
    })

    const subRouter = express.Router()
    subRouter.get('/', async (req, res, next) => {
      if(req.subdomains.length === 0 || req.subdomains[0] === 'www') {
        return next()
      }

      const user = await mongo.collection('radiks-server-data').findOne({
        identifier: req.subdomains[0]
      })
      if(!user) {
        return dashboardApp.render(req, res, `/available`)  
      }

      return dashboardApp.render(req, res, `/paras/${req.subdomains[0]}`)
    })

    server.use(subdomain('*', subRouter))

    server.use('/static/themes', express.static(path.join(__dirname, 'dashboard', 'themes')))

    server.use('/manifest.json', (req, res, next) => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT'
      })
      next()
    })

    server.get('/proxy', async (req, res) => {
      const url = req.query.url
      const proxyRes = await axios({
        method: 'get',
        url: url,
        responseType:'stream'
      })
      res.setHeader('Content-type', proxyRes.headers['content-type'])
      proxyRes.data.pipe(res)
    })

    // server.use('/paras/:identifier', async (req, res) => {
    //   const user = await mongo.collection('radiks-server-data').findOne({
    //     identifier: req.params.identifier
    //   })
    //   if(!user) {
    //     return res.send('This address is available, go get it!')
    //   }
    //   const path = 'index'
    //   const page = user.profile.theme.templatePage.find(page => page.path === path)
    //   const compiled = handlebars.compile(page.template || '')(user.profile)

    //   res.send(compiled)
    // })

    server.get('/api/themes', async (req, res) => {
      res.json({
        status: 'success',
        data: templates
      })
    })

    server.get('/api/users/:username', async (req, res) => {
      const user = await mongo.collection('radiks-server-data').findOne({
        identifier: req.params.username
      })
      res.json({
        status: 'success',
        data: user
      })
    })

    // Default catch-all handler to allow Next.js to handle all other routes
    server.use('/radiks', radiksApp)

    server.all('*', (req, res) => dashboardHandle(req, res))

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port}`)
    })
  } catch (err) {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  }
}

main()
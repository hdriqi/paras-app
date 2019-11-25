const express = require('express')
const subdomain = require('express-subdomain')
const next = require('next')
const { setup, getDB } = require('radiks-server')
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const dirTree = require("directory-tree")

const port = parseInt(process.env.PORT, 10) || 4000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const dashboardApp = next({
  dir: './dashboard', // base directory where everything is, could move to src later
  dev
})

const app = express();

setup().then(RadiksController => {
  app.use('/radiks', RadiksController);
});

const dashboardHandle = dashboardApp.getRequestHandler()

const main = async () => {
  try {
    const themes = dirTree('./themes')
    const themeList = themes.children.filter(c => c.type === 'directory')
    
    const templates = []
    for await (const [idx, theme] of themeList.entries()) {
      const thumbnail = theme.children.find(c => c.name.split('.')[0] === 'thumbnail')
      const templateIdx = theme.children.findIndex(c => c.name === 'templates')
      const templatePage = theme.children[templateIdx].children.map(template => {
        return {
          path: template.name.split('.')[0],
          type: template.name.split('.')[1],
          template: fs.readFileSync(`./${template.path}`, 'utf8')
        }
      })
      templates.push({
        name: theme.name,
        thumbnail: `/static/${thumbnail.path}`,
        templatePage: templatePage
      })
    }

    const mongo = await getDB(`mongodb://localhost:27017/radiks-server`)
    await dashboardApp.prepare()
    const radiksApp = await setup()

    const server = express()

    server.use(subdomain('*', async (req, res, next) => {
      if(req.subdomains.length === 0 || req.subdomains[0] === 'www') {
        return next()
      }
      const user = await mongo.collection('radiks-server-data').findOne({
        identifier: req.subdomains[0]
      })
      if(!user) {
        return dashboardApp.render(req, res, '/available')
        // return res.send('This address is available, go get it!')
      }
      const path = 'index'
      const page = user.profile.theme.templatePage.find(page => page.path === path)
      const compiled = handlebars.compile(page.template || '')({
        ...user.profile,
        ...{ url: `https://${user.identifier}.paras.id` }
      })

      res.send(compiled)
    }))

    server.use('/static/themes', express.static(path.join(__dirname, 'themes')))
    server.use('/manifest.json', (req, res, next) => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT'
      });
      next()
    })

    server.use('/paras/:identifier', async (req, res) => {
      const user = await mongo.collection('radiks-server-data').findOne({
        identifier: req.params.identifier
      })
      if(!user) {
        return res.send('This address is available, go get it!')
      }
      const path = 'index'
      const page = user.profile.theme.templatePage.find(page => page.path === path)
      const compiled = handlebars.compile(page.template || '')(user.profile)

      res.send(compiled)
    })

    server.get('/api/themes', async (req, res) => {
      res.json({
        status: 'success',
        data: templates
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
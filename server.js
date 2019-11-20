const express = require('express')
const next = require('next')
const { setup, getDB } = require('radiks-server')
const handlebars = require('handlebars')

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
    const mongo = await getDB(`mongodb://localhost:27017/radiks-server`)
    await dashboardApp.prepare()
    const radiksApp = await setup()

    const server = express()

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
      const template = user.profile.theme.html
      const compiled = handlebars.compile(template || '')(user.profile)

      res.send(compiled)
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
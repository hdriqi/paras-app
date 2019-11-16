const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 4000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const dashboardApp = next({
  dir: './dashboard', // base directory where everything is, could move to src later
  dev
})

const dashboardHandle = dashboardApp.getRequestHandler()

const main = async () => {
  try {
    await dashboardApp.prepare()

    const server = express()

    server.use('/manifest.json', (req, res, next) => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT'
      });
      next()
    })

    // Default catch-all handler to allow Next.js to handle all other routes
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
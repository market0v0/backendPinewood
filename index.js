const express = require('express')
const app = express()

const http = require('http')
const mongoose = require('mongoose')
const config = require('./src/config/config')
const Logging = require('./src/library/Logging')
const authorRoutes = require('./src/routes/Author')
const pinewoodBikeRoutes = require('./src/routes/PinewoodBike')

mongoose.set('strictQuery', true)
app.get('/', (req, res) => {
  res.send('Choo Choo! Welcome to your Express app 🚅')
})

app.get('/json', (req, res) => {
  res.json({ 'Choo Choo': 'Welcome to your Express app 🚅' })
})
const port = process.env.PORT || 9090

const server = http.createServer(app)

// Connect to MongoDB
mongoose
  .connect(config.mongo.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    Logging.info('Connected to MongoDB')
    startServer()
  })
  .catch(error => {
    Logging.error(error)
  })

const startServer = () => {
  app.use((req, res, next) => {
    Logging.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    )
    res.on('finish', () => {
      Logging.info(
        `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      )
    })
    next()
  })

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).json({})
    }
    next()
  })

  // Routes
  app.use('/authors', authorRoutes)
  app.use('/bikes', pinewoodBikeRoutes)

  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' })
  })

  app.use((req, res, next) => {
    const error = new Error('Not found')
    Logging.error(error)
    res.status(404).json({ message: error.message })
  })

  app.listen(port, () => {
    Logging.info(`Example app listening on port ${port}`)
  })
  ;('use strict')
}

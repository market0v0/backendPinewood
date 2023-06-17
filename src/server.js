'use strict'

const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const config = require('./config/config')
const Logging = require('./library/Logging')
const authorRoutes = require('./routes/Author')
const pinewoodBikeRoutes = require('./routes/PinewoodBike')

const app = express()
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

  server.listen(config.server.port, () => {
    Logging.info(`Server running on port ${config.server.port}`)
  })
}

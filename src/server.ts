import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import { config } from './config/config'
import Logging from './library/Logging'
import authorRoutes from './routes/Author'
import pinewoodbikeRoutes from './routes/PinewoodBike'

const router = express()

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => {
    Logging.info('connected')
    StartServer()
  })
  .catch(error => {
    Logging.error(error)
  })

const StartServer = () => {
  router.use((req, res, next) => {
    Logging.info(
      `Incomming -> Method: [${req.method}] - Url: [${req.url}] -IP: [${req.socket.remoteAddress}]`
    )
    res.on('finish', () => {
      Logging.info(
        `Incomming -> Method: [${req.method}] - Url: [${req.url}] -IP: [${req.socket.remoteAddress}] Status: [${res.statusCode}]`
      )
    })
    next()
  })

  router.use(express.urlencoded({ extended: true }))
  router.use(express.json())

  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Auhtorization'
    )

    if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).json({})
    }
    next()
  })
  /* Routes */

  router.use('/authors', authorRoutes)
  router.use('/bikes', pinewoodbikeRoutes)

  router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }))

  router.use((req, res, next) => {
    const error = new Error('not found')
    Logging.error(error)

    return res.status(404).json({ message: error.message })
  })

  http
    .createServer(router)
    .listen(config.server.port, () => Logging.info(`Runing on ${config.server.port}.`))
}

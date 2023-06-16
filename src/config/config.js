'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.config = void 0
require('dotenv').config()
var MONGO_USERNAME = process.env.MONGO_USERNAME || ''
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
var MONGO_URL = 'mongodb+srv://'
  .concat(MONGO_USERNAME, ':')
  .concat(MONGO_PASSWORD, '@cluster1.3i9pgc2.mongodb.net/')
var SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337
exports.config = {
  mongo: {
    url: MONGO_URL
  },
  server: {
    port: SERVER_PORT
  }
}

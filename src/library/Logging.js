'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const chalk = require('chalk')

class Logging {
  static info = args =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === 'string' ? chalk.blueBright(args) : args
    )
  static warn = args =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === 'string' ? chalk.yellow(args) : args
    )
  static error = args =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === 'string' ? chalk.red(args) : args
    )
}

module.exports = Logging

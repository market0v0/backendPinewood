"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var Logging = /** @class */ (function () {
    function Logging() {
    }
    Logging.info = function (args) {
        return console.log(chalk_1.default.blue("[".concat(new Date().toLocaleString(), "] [INFO]")), typeof args === 'string' ? chalk_1.default.blueBright(args) : args);
    };
    Logging.warn = function (args) {
        return console.log(chalk_1.default.blue("[".concat(new Date().toLocaleString(), "] [INFO]")), typeof args === 'string' ? chalk_1.default.yellow(args) : args);
    };
    Logging.error = function (args) {
        return console.log(chalk_1.default.blue("[".concat(new Date().toLocaleString(), "] [INFO]")), typeof args === 'string' ? chalk_1.default.red(args) : args);
    };
    return Logging;
}());
exports.default = Logging;

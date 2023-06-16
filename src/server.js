"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var mongoose_1 = require("mongoose");
var config_1 = require("./config/config");
var Logging_1 = require("./library/Logging");
var Author_1 = require("./routes/Author");
var PinewoodBike_1 = require("./routes/PinewoodBike");
var router = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(function () {
    Logging_1.default.info('connected');
    StartServer();
})
    .catch(function (error) {
    Logging_1.default.error(error);
});
var StartServer = function () {
    router.use(function (req, res, next) {
        Logging_1.default.info("Incomming -> Method: [".concat(req.method, "] - Url: [").concat(req.url, "] -IP: [").concat(req.socket.remoteAddress, "]"));
        res.on('finish', function () {
            Logging_1.default.info("Incomming -> Method: [".concat(req.method, "] - Url: [").concat(req.url, "] -IP: [").concat(req.socket.remoteAddress, "] Status: [").concat(res.statusCode, "]"));
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Auhtorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    /* Routes */
    router.use('/authors', Author_1.default);
    router.use('/bikes', PinewoodBike_1.default);
    router.get('/ping', function (req, res, next) { return res.status(200).json({ message: 'pong' }); });
    router.use(function (req, res, next) {
        var error = new Error('not found');
        Logging_1.default.error(error);
        return res.status(404).json({ message: error.message });
    });
    http_1.default
        .createServer(router)
        .listen(config_1.config.server.port, function () { return Logging_1.default.info("Runing on ".concat(config_1.config.server.port, ".")); });
};

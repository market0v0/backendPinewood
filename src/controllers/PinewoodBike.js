"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PinewoodBike_1 = require("../models/PinewoodBike");
var createPinewoodBike = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, model, price, img, specs, category, youtube, facebook, pinewoodBike, savedPinewoodBike, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, model = _a.model, price = _a.price, img = _a.img, specs = _a.specs, category = _a.category, youtube = _a.youtube, facebook = _a.facebook;
                pinewoodBike = new PinewoodBike_1.default({
                    _id: new mongoose_1.default.Types.ObjectId(),
                    model: model,
                    price: price,
                    img: img,
                    specs: specs,
                    category: category,
                    youtube: youtube,
                    facebook: facebook
                });
                return [4 /*yield*/, pinewoodBike.save()];
            case 1:
                savedPinewoodBike = _b.sent();
                res.status(201).json({ pinewoodBike: savedPinewoodBike });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(500).json({ error: error_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readPinewoodBike = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pinewoodBikeId, pinewoodBike, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                pinewoodBikeId = req.params.pinewoodBikeId;
                return [4 /*yield*/, PinewoodBike_1.default.findById(pinewoodBikeId)];
            case 1:
                pinewoodBike = _a.sent();
                if (pinewoodBike) {
                    res.status(200).json({ pinewoodBike: pinewoodBike });
                }
                else {
                    res.status(404).json({ message: 'Not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ error: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var readAll = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pinewoodBikes, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PinewoodBike_1.default.find()];
            case 1:
                pinewoodBikes = _a.sent();
                res.status(200).json({ pinewoodBikes: pinewoodBikes });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updatePinewoodBike = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pinewoodBikeId, pinewoodBike, updatedPinewoodBike, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                pinewoodBikeId = req.params.pinewoodBikeId;
                return [4 /*yield*/, PinewoodBike_1.default.findById(pinewoodBikeId)];
            case 1:
                pinewoodBike = _a.sent();
                if (!pinewoodBike) return [3 /*break*/, 3];
                pinewoodBike.set(req.body);
                return [4 /*yield*/, pinewoodBike.save()];
            case 2:
                updatedPinewoodBike = _a.sent();
                res.status(201).json({ pinewoodBike: updatedPinewoodBike });
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: 'Not found' });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _a.sent();
                res.status(500).json({ error: error_4 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var deletePinewoodBike = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var pinewoodBikeId, deletedPinewoodBike, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                pinewoodBikeId = req.params.pinewoodBikeId;
                return [4 /*yield*/, PinewoodBike_1.default.findByIdAndDelete(pinewoodBikeId)];
            case 1:
                deletedPinewoodBike = _a.sent();
                if (deletedPinewoodBike) {
                    res.status(201).json({ message: 'Deleted' });
                }
                else {
                    res.status(404).json({ message: 'Not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ error: error_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var filterByPriceRange = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, minPrice, maxPrice, pinewoodBikes, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, minPrice = _a.minPrice, maxPrice = _a.maxPrice;
                return [4 /*yield*/, PinewoodBike_1.default.find({
                        price: { $gte: minPrice, $lte: maxPrice }
                    })];
            case 1:
                pinewoodBikes = _b.sent();
                res.status(200).json({ pinewoodBikes: pinewoodBikes });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _b.sent();
                res.status(500).json({ error: error_6 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var filterByCategory = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var category, query, pinewoodBikes, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                category = req.query.category;
                query = {};
                if (category === 'mountain' || category === 'road' || category === 'gravel') {
                    query = { category: category };
                }
                return [4 /*yield*/, PinewoodBike_1.default.find(query)];
            case 1:
                pinewoodBikes = _a.sent();
                res.status(200).json({ pinewoodBikes: pinewoodBikes });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                res.status(500).json({ error: error_7 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllModels = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var models, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PinewoodBike_1.default.distinct('model')];
            case 1:
                models = _a.sent();
                res.status(200).json({ models: models });
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                res.status(500).json({ error: error_8 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var filterByPriceCategory = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, category, minPrice, maxPrice, query, pinewoodBikes, error_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, category = _a.category, minPrice = _a.minPrice, maxPrice = _a.maxPrice;
                query = {};
                if (category === 'mountain' || category === 'road' || category === 'gravel') {
                    query = { category: category };
                }
                if (minPrice && maxPrice) {
                    query = __assign(__assign({}, query), { price: { $gte: minPrice, $lte: maxPrice } });
                }
                return [4 /*yield*/, PinewoodBike_1.default.find(query)];
            case 1:
                pinewoodBikes = _b.sent();
                res.status(200).json({ pinewoodBikes: pinewoodBikes });
                return [3 /*break*/, 3];
            case 2:
                error_9 = _b.sent();
                res.status(500).json({ error: error_9 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    createPinewoodBike: createPinewoodBike,
    filterByPriceCategory: filterByPriceCategory,
    readPinewoodBike: readPinewoodBike,
    readAll: readAll,
    updatePinewoodBike: updatePinewoodBike,
    deletePinewoodBike: deletePinewoodBike,
    filterByPriceRange: filterByPriceRange,
    filterByCategory: filterByCategory,
    getAllModels: getAllModels
};

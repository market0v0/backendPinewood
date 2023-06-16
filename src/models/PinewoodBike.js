"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PinewoodBikeSchema = new mongoose_1.Schema({
    model: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: [String], required: true },
    specs: { type: String, required: true },
    category: { type: String, required: true },
    youtube: { type: String, required: true },
    facebook: { type: String, required: true }
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('PinewoodBike', PinewoodBikeSchema);

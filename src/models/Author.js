"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AuhtorSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('Author', AuhtorSchema);

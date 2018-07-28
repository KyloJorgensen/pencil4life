'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContactMessageSchema = new mongoose_1.Schema({
    requestor: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    discontinued: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.ContactMessage = mongoose_1.model('ContactMessage', ContactMessageSchema);
exports.default = exports.ContactMessage;

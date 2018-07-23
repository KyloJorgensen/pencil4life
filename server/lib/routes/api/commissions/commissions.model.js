'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CommissionsSchema = new mongoose_1.Schema({
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
exports.Commissions = mongoose_1.model('Commissions', CommissionsSchema);
exports.default = exports.Commissions;

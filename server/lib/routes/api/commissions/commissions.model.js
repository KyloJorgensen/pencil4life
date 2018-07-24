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
var CommissionsToggleSchema = new mongoose_1.Schema({
    accepting: {
        type: Boolean,
        default: false,
    },
    limit: {
        type: Number,
        default: 0,
    },
    start_date: {
        type: Date,
        default: new Date(),
    },
    end_date: {
        type: Date,
        default: new Date(),
    },
    comment: {
        type: String,
        default: '<div><br></div>',
    },
});
exports.CommissionsToggle = mongoose_1.model('CommissionsToggle', CommissionsToggleSchema);

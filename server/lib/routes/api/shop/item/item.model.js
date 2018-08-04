'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var diffHistory_1 = require("mongoose-diff-history/diffHistory");
var ItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        min: 0,
        get: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        set: function (v) { return Math.round(parseFloat(v) * 100) / 100; },
        default: 0,
    },
    stock: {
        type: Number,
        min: 0,
        get: function (v) { return Math.round(v); },
        set: function (v) { return Math.round(v); },
        default: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    imageIds: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Image',
        default: [],
    },
    commission: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    couponable: {
        type: Boolean,
        default: true,
    },
    taxable: {
        type: Boolean,
        default: true,
    },
    releaseDate: {
        type: Date,
    },
    expiredDate: {
        type: Date,
    },
    created_by: {
        type: String,
        required: true,
    },
    updated_by: {
        type: String,
        required: true,
    },
    discontinued: {
        type: Boolean,
        default: false
    },
});
ItemSchema.plugin(diffHistory_1.plugin);
exports.Item = mongoose_1.model('Item', ItemSchema);
exports.default = exports.Item;

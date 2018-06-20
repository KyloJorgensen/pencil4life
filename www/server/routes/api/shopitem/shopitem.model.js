'use strict';

const mongoose = require('mongoose');
const diffHistory = require('mongoose-diff-history/diffHistory');

var ShopItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        get: v => Math.round(parseFloat(v)*100)/100,
        set: v => Math.round(parseFloat(v)*100)/100,
        default: 0,
    },
    stock: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 0,
    },
    sold: {
        type: Number,
        min: 0,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 0,
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

ShopItemSchema.plugin(diffHistory.plugin);

module.exports = mongoose.model('ShopItem', ShopItemSchema);
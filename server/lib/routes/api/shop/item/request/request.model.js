'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var diffHistory_1 = require("mongoose-diff-history/diffHistory");
var ItemRequestSchema = new mongoose_1.Schema({
    _itemId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    quantity: {
        type: Number,
        min: 0,
        get: function (v) { return Math.round(v); },
        set: function (v) { return Math.round(v); },
        required: true,
    },
    _userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    _sessionId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Session',
    },
    requestDate: {
        type: Date,
        required: true,
    },
    purchased: {
        type: Boolean,
        default: false,
    },
    discontinued: {
        type: Boolean,
        default: false,
    },
});
ItemRequestSchema.plugin(diffHistory_1.plugin);
exports.ItemRequest = mongoose_1.model('ItemRequest', ItemRequestSchema);
exports.default = exports.ItemRequest;

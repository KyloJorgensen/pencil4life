'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DoodleSchema = new mongoose_1.Schema({
    _imageId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Image',
    },
    title: {
        type: String,
        default: '',
    },
    details: {
        type: String,
        default: '',
    },
    discontinued: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });
exports.Doodle = mongoose_1.model('Doodle', DoodleSchema);
exports.default = exports.Doodle;

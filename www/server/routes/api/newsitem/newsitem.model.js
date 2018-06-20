'use strict';

const mongoose = require('mongoose');

var NewsItemSchema = mongoose.Schema({
    post: {
        type: String,
        required: true,
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
}, {timestamps: true});

module.exports = mongoose.model('NewsItem', NewsItemSchema);
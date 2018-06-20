'use strict';

const mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    details: {
        type: String,
        default: '',
    },
    discontinued: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = mongoose.model('Event', EventSchema);
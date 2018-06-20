'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CoverImageSchema = Schema({
    _imageId: {
        type: ObjectId,
        ref: 'Image',
    },
}, {timestamps: true});


const PageSchema = Schema({
    _imageId: {
        type: ObjectId,
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
    page: {
        type: Number,
    },
    discontinued: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

const ProjectSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    details: {
        type: String,
        default: '',
    },
    coverImage: CoverImageSchema,
    pages: [PageSchema],
    discontinued: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

module.exports = mongoose.model('Project', ProjectSchema);
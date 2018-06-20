'use strict';

const mongoose = require('mongoose');

var CounterSchema = mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('Counter', CounterSchema);

let imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    src: {
        type: String,
    },
    alt: {
        type: String,
    },
    originalSrc: {
        type: String,
    },
    originalName: {
        type: String,
        required: true,
    },
    filename: {
        type: String
    },
    secure: {
        type: Boolean,
        default: false
    },
    discontinued: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

imageSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'imageId'}, {$inc: { seq: 1} }, {upsert: true, setDefaultsOnInsert: true}, function(error, counter)   {
        if(error)
            return next(error);
        doc.filename = pad(counter.seq, 10) + '.' + doc.originalName.split('.').pop().toLowerCase();
        next();
    });

});

module.exports = mongoose.model('Image', imageSchema);












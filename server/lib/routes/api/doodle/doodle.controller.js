'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var doodle_model_1 = require("./doodle.model");
function DoodleController() { }
;
// Creates Doodle.
DoodleController.prototype.createDoodle = function (req, res, next) {
    var newDoodleDoc = {};
    if ('body' in req) {
        var body = req.body;
        if ('title' in body) {
            newDoodleDoc.title = body.title;
        }
        else {
            var error = new Error('missing title');
            error.message = 'BadRequestError';
            return next(error);
        }
        if ('details' in body) {
            newDoodleDoc.details = body.details;
        }
        if ('_imageId' in body) {
            newDoodleDoc._imageId = body._imageId;
        }
        if ('discontinued' in body) {
            newDoodleDoc.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var query = doodle_model_1.Doodle.create(newDoodleDoc);
    query.then(function (doodleDoc) {
        res.status(200).json({ _id: doodleDoc._id });
    }).catch(function (error) {
        console.log(error);
        next(error);
    });
};
// one get returns
DoodleController.prototype.getDoodle = function (req, res, next) {
    var query = doodle_model_1.Doodle.findOne({ _id: req.params._doodleId });
    var vaildFields = [];
    var requestedFields = req.query.field || [];
    var selectFields = ['_id', 'title', '_imageId', 'details', 'discontinued'];
    requestedFields.forEach(function (field) {
        if (vaildFields.includes(field) && !selectFields.includes(field)) {
            selectFields.push(field);
        }
    });
    query.select(selectFields.join(' '));
    query.then(function (doodleDoc) {
        res.status(200).json(doodleDoc);
    }).catch(function (error) {
        return next(error);
    });
};
// get list of shop items and returns them and a link for the next
DoodleController.prototype.getDoodles = function (req, res, next) {
    var query = doodle_model_1.Doodle.find({});
    if ('discontinued' in req.query) {
        query.where('discontinued').equals(req.query.discontinued);
    }
    query.select('_id');
    query.then(function (doodleDocs) {
        var page = !Number.isNaN(Number(req.query.page)) ? Math.abs(Number(req.query.page)) : 1;
        var limit = !Number.isNaN(Number(req.query.limit)) ? Math.abs(Number(req.query.limit)) : 200;
        var doodlesLimited = doodleDocs.slice(limit * (page - 1), limit * (page - 1) + limit);
        var doodles = [];
        doodlesLimited.forEach(function (doodleDocs) {
            doodles.push(doodleDocs._id);
        });
        var total = doodleDocs.length;
        var pageTotal = doodlesLimited.length;
        var totalPages = Math.round(total / limit);
        var res_body = {
            page: page,
            totalPages: totalPages,
            pageLimit: limit,
            total: total,
            totalBatch: pageTotal,
            doodles: doodles,
        };
        res.status(200).json(res_body);
    }).catch(function (error) {
        return next(error);
    });
};
// Update Doodle queries: _id update: title, year returns: new shop item 
DoodleController.prototype.updateDoodle = function (req, res, next) {
    var changes = {};
    if ('body' in req) {
        var body = req.body;
        if (!('_id' in body)) {
            var error = new Error('missing _id');
            error.name = 'BadRequestError';
            return next(error);
        }
        if ('title' in body) {
            changes.title = body.title;
        }
        if ('details' in body) {
            changes.details = body.details;
        }
        if ('_imageId' in body) {
            changes._imageId = body._imageId;
        }
        if ('discontinued' in body) {
            changes.discontinued = body.discontinued;
        }
    }
    else {
        var error = new Error('missing body');
        error.name = 'BadRequestError';
        return next(error);
    }
    var query = doodle_model_1.Doodle.findOneAndUpdate({ _id: req.body._id }, { $set: changes }, { new: true });
    query.then(function (doodleDoc) {
        res.status(200).json(doodleDoc);
    }).catch(function (error) {
        next(error);
    });
};
exports.default = DoodleController.prototype;

'use strict';

var express = require('express'),
    router = express.Router(),
	mainRouter = require('../routes/main/main.router.js'),
    apiRouter = require('../routes/api/api.router.js'),
    reportViolationRouter = require('../routes/report-violation/report-violation.router.js');

module.exports = function(app) {
    app.use('/', mainRouter)
        .use('/api', apiRouter)
        .post('/report-violation', reportViolationRouter)
};
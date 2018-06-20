'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./report-violation.controller.js');

router.post('/', controller.reportViolation)

module.exports = router;
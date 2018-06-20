'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./checkout.controller.js');

router.get('/', controller.redirect)
	.get('/new', controller.new)
	.get('/:id', controller.transaction)
	.post('/', controller.sale);

module.exports = router;
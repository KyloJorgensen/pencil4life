'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./event.controller.js'),
	authAdmin = require('../user/user.middleware.js').adminAuth;

router.post('/', authAdmin, controller.createEventItem)
	.put('/', authAdmin, controller.updateEventItem)
	.get('/', controller.getEventItems)
	.get('/:_eventItemId', controller.getEventItem)

module.exports = router;
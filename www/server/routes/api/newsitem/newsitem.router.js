'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./newsitem.controller'),
	authAdmin = require('../user/user.middleware').adminAuth;

router.post('/', authAdmin, controller.createNewsItem)
	.put('/', authAdmin, controller.updateNewsItem)
	.get('/', controller.getNewsItems)
	.get('/:_newsItemId', controller.getNewsItem)

module.exports = router;
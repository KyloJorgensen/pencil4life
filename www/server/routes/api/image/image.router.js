'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./image.controller.js'),
	authAdmin = require('../user/user.middleware.js').adminAuth;

router.post('/', authAdmin, controller.createImage)
	.put('/', authAdmin, controller.updateImage)
	.get('/', authAdmin, controller.getImages)
	.get('/:_imageId', authAdmin, controller.getImage)

module.exports = router;
'use strict';

var express = require('express'),
	router = express.Router(),
	controller = require('./shopitem.controller.js'),
	authAdmin = require('../user/user.middleware.js').adminAuth;

router.post('/', authAdmin, controller.createShopItem)
	.put('/', authAdmin, controller.updateShopItem)
	.get('/', controller.getShopItems)
	.get('/:_shopItemId', controller.getShopItem)

module.exports = router;
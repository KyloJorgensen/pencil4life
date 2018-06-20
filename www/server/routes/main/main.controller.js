'use strict';

var path = require('path');

function MainController() {};

// returns index.html
MainController.prototype.getRoot = function(req, res, next) {
	res.sendFile(path.join(__dirname, '../../../dist/index.html'));
};

module.exports = MainController.prototype;
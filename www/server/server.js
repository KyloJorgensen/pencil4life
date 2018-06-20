'use strict';

var express = require('express'),
	app = express(),
	variables = require('./config/variables.express.js'),
	http = require('http'),
	https = require('https');
	
require('./config/mongoose.connection.js');
require('./config/config.express.js')(app);
require('./config/routes.express.js')(app);
require('./lib/errorHandler.middleware.js')(app);

http.createServer(app).listen(variables.HTTP_PORT, function () {
	console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.HTTP_PORT);
});

https.createServer(variables.HTTPS_CREDENTIALS, app).listen(variables.EXPRESS_PORT, function () {
	console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});

exports.app = app;
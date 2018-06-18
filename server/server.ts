'use strict';

import * as express from 'express';
import * as path from 'path';
import * as http from 'http';

const app = express();

app
.use('/', express.static(path.join(__dirname, './dist/')))
.use('/images', express.static(path.join(__dirname, './assests/images/')))
.use('/fonts', express.static(path.join(__dirname, './assests/fonts/')))
http.createServer(app).listen(8081, function () {
	console.log("Listening on port: " + 8080);
});

exports.app = app;
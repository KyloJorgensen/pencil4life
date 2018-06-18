'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
app
    .use('/', express.static(path.join(__dirname, './dist/')))
    .use('/images', express.static(path.join(__dirname, './assests/images/')))
    .use('/fonts', express.static(path.join(__dirname, './assests/fonts/')));
http.createServer(app).listen(8081, function () {
    console.log("Listening on port: " + 8080);
});
exports.app = app;

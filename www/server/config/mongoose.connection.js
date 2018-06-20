'use strict';

var mongoose = require('mongoose'),
	dbURI = require('./variables.express.js').MONGODB.URI;

var db = mongoose.connection;

db.on('connecting', function() {
    console.log('connecting');
});

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('connected', function() {
    console.log('connected!');
});

db.once('open', function() {
    console.log('connection open');
});

db.on('reconnected', function () {
    console.log('reconnected');
});
db.on('disconnected', function() {
    console.log('disconnected');
    console.log('dbURI is: '+dbURI);
    mongoose.connect(dbURI, {
    	autoReconnect:true,
    	connectTimeoutMS: 500,
    	reconnectTries: Number.MAX_VALUE,
    });
});

mongoose.connect(dbURI, {autoReconnect:true});
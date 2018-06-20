'use strict';
var fs = require('fs'),
    path = require('path'),
    sslpath = '/etc/letsencrypt/live/bradashworth.com/';
    // sslcert_key = fs.readFileSync(path.join(sslpath , 'privkey.pem'), 'utf8'),
    // sslcert_cert = fs.readFileSync(path.join(sslpath , 'fullchain.pem'), 'utf8');


// require('dotenv').load();
module.exports = {
    EXPRESS_PORT: process.env.PORT || 4430,
    HTTP_PORT: process.env.HTTP_PORT || 8080,
    EXPRESS_LISTEN_MESSAGE: 'Listening on port ',
    DAEMON_PID: path.join(__dirname , '../logs/nodejsd.pid'),
    DAEMON_OUT: path.join(__dirname , '../logs/nodejsd.out'),
    DAEMON_LOG: path.join(__dirname , '../logs/nodejsd.log'),
    DAEMON_LOG_ERROR: path.join(__dirname , '../logs/nodejsd.error.log'),
    HTTPS_CREDENTIALS: {
        // key: sslcert_key,
        // cert: sslcert_cert
    },
    MONGODB: {
        PORT: "",
        URI: process.env.MONGODB_URI || 'mongodb://localhost/pencil4life'
    },
    SESSION_SECRET: '374c62f257a71467e636c59b1dde6',
    SESSION_COLLECTION: 'sessions',
    IMAGE_DIR: path.join(__dirname , '../../data/images/'),
    BT_ENVIRONMENT: 'sandbox' || process.env.BT_ENVIRONMENT,
    BT_MERCHANT_ID: 'cvnqcc9z7srpfkcf' || process.env.BT_MERCHANT_ID,
    BT_PUBLIC_KEY: 'k7x3r67pkqn4m59p' || process.env.BT_PUBLIC_KEY,
    BT_PRIVATE_KEY: 'e4614ba54f975cd132f2b52437b5fbe6' || process.env.BT_PRIVATE_KEY,
};


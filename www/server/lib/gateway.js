'use strict';

var braintree = require('braintree'),
	variables = require('../config/variables.express.js');
var environment, gateway;

environment = variables.BT_ENVIRONMENT.charAt(0).toUpperCase() + variables.BT_ENVIRONMENT.slice(1);

gateway = braintree.connect({
    environment: braintree.Environment[environment],
    merchantId: variables.BT_MERCHANT_ID,
    publicKey: variables.BT_PUBLIC_KEY,
    privateKey: variables.BT_PRIVATE_KEY
});

module.exports = gateway;
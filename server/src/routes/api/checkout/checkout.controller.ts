'use strict';

import braintree from 'braintree';
import gateway from '../../../utilities/gateway';

var TRANSACTION_SUCCESS_STATUSES = [
  braintree.Transaction.Status.Authorizing,
  braintree.Transaction.Status.Authorized,
  braintree.Transaction.Status.Settled,
  braintree.Transaction.Status.Settling,
  braintree.Transaction.Status.SettlementConfirmed,
  braintree.Transaction.Status.SettlementPending,
  braintree.Transaction.Status.SubmittedForSettlement
];

function formatErrors(errors) {
  var formattedErrors = '';

  for (var i in errors) { // eslint-disable-line no-inner-declarations, vars-on-top
    if (errors.hasOwnProperty(i)) {
      formattedErrors += 'Error: ' + errors[i].code + ': ' + errors[i].message + '\n';
    }
  }
  return formattedErrors;
}

function createResultObject(transaction) {
  var result;
  var status = transaction.status;

  if (TRANSACTION_SUCCESS_STATUSES.indexOf(status) !== -1) {
    result = {
      header: 'Sweet Success!',
      icon: 'success',
      message: 'Your test transaction has been successfully processed. See the Braintree API response and try again.'
    };
  } else {
    result = {
      header: 'Transaction Failed',
      icon: 'fail',
      message: 'Your test transaction has a status of ' + status + '. See the Braintree API response and try again.'
    };
  }

  return result;
}

function CheckoutController() {};

// redirects to new
CheckoutController.prototype.redirect = function(req, res, next) {
	res.redirect('/checkout/new');
	next();
};

// start new transaction
CheckoutController.prototype.new = function(req, res, next) {
    gateway.clientToken.generate({}, function(err, response) {
        if (err) { next(err) };
        res.json({clientToken: response.clientToken});
    });
};

// get transaction by id
CheckoutController.prototype.transaction = function (req, res, next) {
  var result;
  var transactionId = req.params.id;

  gateway.transaction.find(transactionId, function (err, transaction) {
  	if (err) {next(err)}
    // result = createResultObject(transaction);
    res.json({transaction: transaction, result: result});
  });
};

// post sale 
CheckoutController.prototype.sale = function (req, res, next) {
  var transactionErrors;
  var amount = req.body.amount; // In production you should not take amounts directly from clients
  var nonce = req.body.payment_method_nonce;

  gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonce,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
  	if (err) {next(err)}
    if (result.success || result.transaction) {
    	res.json({transactionId: result.transaction.id});
    } else {
      transactionErrors = result.errors.deepErrors();
      next({type: 'error', msg: formatErrors(transactionErrors)});
    }
  });
};

export default CheckoutController.prototype;
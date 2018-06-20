'use strict';

var log = require('log-to-file'),
    path = require('path');

function defaultLog(message) {
    log(message, path.join(__dirname, '../logs/bradashworth.log'));
}
function reportViolation(message) {
    log(message, path.join(__dirname, '../logs/report-violation.log'));
}

exports.log = defaultLog;
exports.report = reportViolation;
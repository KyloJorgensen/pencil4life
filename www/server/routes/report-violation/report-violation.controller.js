'use strict';

let logger = require('../../lib/logger.js');

function ReportViolationController() {};

// logs the violations.
ReportViolationController.prototype.reportViolation = function(req, res, next) {
    if (req.body) {
        console.log('CSP Violation: ', req.body);
        logger.report('CSP Violation: ');
        if ('csp-report' in req.body) {
            var cspReport = req.body['csp-report'];
            if ('blocked-uri' in cspReport) {
               console.log('Blocked URI: ' + cspReport['blocked-uri']);
               logger.report('Blocked URI: ' + cspReport['blocked-uri']); 
            }
            if ('document-uri' in cspReport) {
                console.log('document-uri: ' + cspReport['document-uri']);
                logger.report('document-uri: ' + cspReport['document-uri']);
            }    
            if ('effective-directive' in cspReport) {
                console.log('effective-directive: ' + cspReport['effective-directive']);
                logger.report('effective-directive: ' + cspReport['effective-directive']);
            }    
            if ('original-policy' in cspReport) {
                console.log('original-policy: ' + cspReport['original-policy']);
                logger.report('original-policy: ' + cspReport['original-policy']);
            }    
            if ('violated-directive' in cspReport) {
                console.log('violated-directive: ' + cspReport['violated-directive']);
                logger.report('violated-directive: ' + cspReport['violated-directive']);
            }    
        }
    } else {
        console.log('CSP Violation: No data received!');
        logger.report('CSP Violation: No data received!');
    }
    res.status(200).send('Thanks for reporting');
}

module.exports = ReportViolationController.prototype;
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var contact_controller_1 = require("./contact.controller");
var router = express_1.Router();
router
    .post('/message', contact_controller_1.createContactMessage);
exports.default = router;

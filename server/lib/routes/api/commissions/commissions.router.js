'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var commissions_controller_1 = require("./commissions.controller");
var router = express_1.Router();
router
    .post('/', commissions_controller_1.createCommissionRequest);
exports.default = router;

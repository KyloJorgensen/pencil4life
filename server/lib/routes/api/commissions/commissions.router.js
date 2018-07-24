'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var commissions_controller_1 = require("./commissions.controller");
var user_middleware_1 = require("../user/user.middleware");
var router = express_1.Router();
router
    .get('/', commissions_controller_1.commissionsAloud)
    .post('/', commissions_controller_1.createCommissionRequest)
    .get('/toggle', commissions_controller_1.getCommissionsToggle)
    .put('/toggle', user_middleware_1.adminAuth, commissions_controller_1.updateCommissionToggle);
exports.default = router;

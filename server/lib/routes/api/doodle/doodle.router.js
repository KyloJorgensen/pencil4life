'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var doodle_controller_1 = require("./doodle.controller");
var user_middleware_1 = require("../user/user.middleware");
var router = express_1.Router();
router.post('/', user_middleware_1.adminAuth, doodle_controller_1.default.createDoodle)
    .put('/', user_middleware_1.adminAuth, doodle_controller_1.default.updateDoodle)
    .get('/', doodle_controller_1.default.getDoodles)
    .get('/:_doodleId', doodle_controller_1.default.getDoodle);
exports.default = router;

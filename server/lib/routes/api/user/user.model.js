'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt = require("bcryptjs");
var userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    reset_code: {
        code: {
            type: String,
        },
        date: {
            type: Date,
        },
        used: {
            type: Boolean,
        }
    },
    discontinued: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });
userSchema.methods.validatePassword = function (password, hash, callback) {
    return new Promise(function (resolve, reject) {
        bcrypt.compare(password, hash, function (error, isValid) {
            if (error) {
                if (callback) {
                    callback(error);
                }
                reject(error);
                return;
            }
            if (callback) {
                callback(null, isValid);
            }
            resolve(isValid);
        });
    });
};
exports.User = mongoose_1.model('User', userSchema);
exports.default = exports.User;

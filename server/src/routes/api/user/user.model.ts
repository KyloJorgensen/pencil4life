'use strict';

import { Document, Schema, Model, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export interface IUser {
    email: string;
    username: string;
    password: string;
    reset_code?: {
        code: string;
        date: Date;
        used: boolean;
    };
    firstname: string;
    lastname: string;
    admin: boolean;
    discontinued: boolean;
}

export type IValidatePassword = (password: string, hash: string, callback?: Function) => Promise<boolean>;

export interface IUserModel extends IUser, Document {
    validatePassword: IValidatePassword;
}

export interface IUserSchema extends Schema {
    methods: {
        validatePassword: IValidatePassword;
    }
}

const userSchema: IUserSchema = new Schema({
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
}, {timestamps: true});

userSchema.methods.validatePassword = (password, hash, callback) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (error, isValid) => {
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
    })
};

export const User: Model<IUserModel> = model<IUserModel>('User', userSchema);

export default User;
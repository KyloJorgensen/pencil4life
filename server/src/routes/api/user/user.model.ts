'use strict';

import { Document, Schema, Model, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export interface IUser {
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    admin: boolean;
    discontinued: boolean;
}

export type IValidatePassword = (password: string, hash: string, callback: Function) => void;

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
    discontinued: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

userSchema.methods.validatePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, function(err, isValid) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, isValid);
    });
};

export const User: Model<IUserModel> = model<IUserModel>('User', userSchema);

export default User;
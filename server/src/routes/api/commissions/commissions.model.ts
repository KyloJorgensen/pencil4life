'use strict';

import { Document, Schema, Model, model } from 'mongoose';

export interface ICommissions {
    requestor: string;
    email: number;
    details: string;
    discontinued?: boolean;
}

export interface ICommissionsModel extends ICommissions, Document {
}

const CommissionsSchema = new Schema({
    requestor: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    discontinued: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

export const Commissions: Model<ICommissionsModel> = model<ICommissionsModel>('Commissions', CommissionsSchema);

export default Commissions;
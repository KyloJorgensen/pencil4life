'use strict';

import { Document, Schema, Model, model } from 'mongoose';

export interface ICommissions {
    requestor: string;
    email: string;
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

// start date and end date
// on or off
// limit

export interface ICommissionsToggle {
    accepting: boolean;
    limit: number;
    start_date: Date;
    end_date: Date;
    comment: string;
}

export interface ICommissionsToggleModel extends ICommissionsToggle, Document {
}

const CommissionsToggleSchema = new Schema({
    accepting: {
        type: Boolean,
        default: false,
    },
    limit: {
        type: Number,
        default: 0,
    },
    start_date: {
        type: Date,
        default: new Date(),
    },
    end_date: {
        type: Date,
        default: new Date(),
    },
    comment: {
        type: String,
        default: '<div><br></div>',
    },
});

export const CommissionsToggle: Model<ICommissionsToggleModel> = model<ICommissionsToggleModel>('CommissionsToggle', CommissionsToggleSchema);

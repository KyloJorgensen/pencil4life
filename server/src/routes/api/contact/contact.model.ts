'use strict';

import { Document, Schema, Model, model } from 'mongoose';

export interface IContactMessage {
    requestor: string;
    email: string;
    details: string;
    discontinued?: boolean;
}

export interface IContactMessageModel extends IContactMessage, Document {
}

const ContactMessageSchema = new Schema({
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

export const ContactMessage: Model<IContactMessageModel> = model<IContactMessageModel>('ContactMessage', ContactMessageSchema);

export default ContactMessage;
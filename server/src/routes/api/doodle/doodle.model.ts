'use strict';


import { Document, Schema, Model, model } from 'mongoose';

export interface IDoodle {
    _imageId?: Schema.Types.ObjectId;
    title?: string;
    details?: string;
    discontinued?: Boolean;
}

export interface IDoodleModel extends IDoodle, Document {
}

const DoodleSchema = new Schema({
    _imageId: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
    },
    title: {
        type: String,
        default: '',
    },
    details: {
        type: String,
        default: '',
    },
    discontinued: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

export const Doodle: Model<IDoodleModel> = model<IDoodleModel>('Doodle', DoodleSchema);

export default Doodle; 
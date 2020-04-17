import { Schema, model } from "mongoose";

export const ModelSchema = new Schema({
    url: { type: String, required: true },
    code: { type: String, min: 5, required: true, unique: true }
}, { timestamps: true });

export const Model = model("Model", ModelSchema);

export interface ModelType {
    url: string;
    code: string;
    created_at: string;
}

import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number
});

export const schema = mongoose.model('Author', authorSchema);
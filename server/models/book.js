import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
});

export const schema = mongoose.model('Book', bookSchema);
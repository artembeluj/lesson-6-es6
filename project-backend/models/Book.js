import {Schema, model} from "mongoose"
import { genreList, isbnRegexp } from "../constants/book-constants.js"

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        enum: genreList
    },
    favorite: {
        type: Boolean,
        default: false
    },
    isbn: {
        type: String,
        match: isbnRegexp,
        unique: true,
        required: true
    }
}, {versionKey: false, timestamps: true})

export const Book = model("book", bookSchema);


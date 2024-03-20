import { Book } from "../models/Book.js"
import ctrlWrapper from "../decorators/ctrlWrapper.js"
import HttpError from "../helpers/HttpError.js"

const getAll = async(req, res) => {
    const result = await Book.find({})
    res.json(result)
}

const getById = async(req, res) => {
    const { id } = req.params;
    // const result = await Book.findOne({_id: id})

    // console.log(result)

    const result = await Book.findById(id);

    if(!result) {
        throw HttpError(404)
    }

    res.json(result)
}

const add = async(req, res) => {
    const result = await Book.create(req.body);
    res.status(201).json(result);
}

const updateById = async(req, res) => {
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true})

    if(!result) {
        throw HttpError(404)
    }

    res.json(result)
}

const removeById = async(req, res) => {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if(!result) {
        throw HttpError(404)
    }

    res.status(204).json()
}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    removeById: ctrlWrapper(removeById)
}
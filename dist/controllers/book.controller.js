"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = exports.deleteBookById = exports.updateBookById = exports.createBook = void 0;
const createBook = (req, res) => {
    res.send('BOOK created');
};
exports.createBook = createBook;
const updateBookById = (req, res) => {
    res.send('BOOK UPDATED');
};
exports.updateBookById = updateBookById;
const deleteBookById = (req, res) => {
    res.send('Book deleted');
};
exports.deleteBookById = deleteBookById;
const getAllBooks = (req, res) => {
    res.send('GET ALL BOOKS');
};
exports.getAllBooks = getAllBooks;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const author_controller_1 = require("./controllers/author.controller");
const book_controller_1 = require("./controllers/book.controller");
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
app.get('/healthy', (req, res) => {
    // res.send('Server is healthy');
    res.status(200).json({
        success: true,
        message: 'Server is Healthy'
    });
});
//  AUTHORS
app.post('/authors', author_controller_1.createAuthor);
// rutas dinamincas usamos req params
app.put('/authors/:id', author_controller_1.updateAuthorById);
app.delete('/authors/:id', author_controller_1.deleteUserById);
// BOOKS
app.get('/books', book_controller_1.getAllBooks);
app.post('/books', book_controller_1.createBook);
app.put('/books', book_controller_1.updateBookById);
app.delete('/books', book_controller_1.deleteBookById);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

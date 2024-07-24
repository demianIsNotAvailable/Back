"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateAuthorById = exports.createAuthor = void 0;
const createAuthor = (req, res) => {
    // recuperar la informacion de la req
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.nationality);
    res.json({
        success: true,
        message: 'CREATE AUTHOR'
    });
};
exports.createAuthor = createAuthor;
const updateAuthorById = (req, res) => {
    console.log(req.params.id);
    res.send(`AUTHOR UPDATED with id: ${req.params.id}`);
};
exports.updateAuthorById = updateAuthorById;
const deleteUserById = (req, res) => {
    res.send(`AUTHOR DELETED BY ID ${req.params.id}`);
};
exports.deleteUserById = deleteUserById;

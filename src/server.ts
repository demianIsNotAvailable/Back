import 'dotenv/config';
import express from 'express';
import { createAuthor, deleteAuthorById, getAllAuthors, updateAuthorById } from './controllers/author.controller';
import { createBook, deleteBookById, getAllBooks, updateBookById } from './controllers/book.controller';
import { AppDataSource } from './database/db';
import { login, register } from './controllers/auth.controller';
import { deleteUserById, getAllUsers, getUserFavoritesBooks, getUserProfile, updateProfile } from './controllers/user.controller';
import { auth } from './middlewares/auth';
import { isAdmin } from './middlewares/isAdmin';

import cors from "cors";

const app = express();

// cors
app.use(cors())

// middleware
app.use(express.json())

const PORT = process.env.PORT || 4000

app.get('/healthy', (req, res) => {
  // res.send('Server is healthy');

  res.status(200).json(
    {
      success: true,
      message: 'Healthy'
    }
  )
})

//  AUTHORS
app.post('/authors', auth, createAuthor)
// rutas dinamincas usamos req params
app.put('/authors/:id', auth, updateAuthorById)
app.delete('/authors/:id', auth, deleteAuthorById)
app.get('/authors', getAllAuthors)

// BOOKS
app.get('/books', getAllBooks)
app.post('/books', createBook)
app.put('/books', updateBookById)
app.delete('/books', deleteBookById)

// AUTH
app.post('/register', register)
app.post('/login', login)

// USER
app.get('/users', auth, isAdmin, getAllUsers)
app.get('/profile', auth, getUserProfile)
app.get('/users/favourites', auth, getUserFavoritesBooks)
app.put('/profile', auth, updateProfile)
app.delete('/users/:id', auth, isAdmin, deleteUserById)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })



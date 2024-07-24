import { Request, Response } from "express"
import { Book } from "../database/models/Book"

export const createBook = async (req: Request, res: Response) => {
  try {
    // 1. recupero la info a guardar
    const title = req.body.title
    const description = req.body.description
    const authorId = req.body.authorId

    // 2. Validar la info
    if (!title || !description || !authorId) {
      return res.status(400).json(
        {
          success: false,
          message: "Title, description and author are needed"
        }
      )
    }

    // 3. validar si el libro por isbn existe

    // 4. Guardar en bd
    const newBook = await Book.create(
      {
        title: title,
        description: description,
        author_id: authorId,
      }
    ).save()

    // 5. Responder
    res.status(201).json(
      {
        success: true,
        message: "book created",
        data: newBook
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "book cant be created",
        error: error
      }
    )
  }
}

export const updateBookById = (req: Request, res: Response) => {
  res.send('BOOK UPDATED')
}

export const deleteBookById = (req: Request, res: Response) => {
  res.send('Book deleted')
}

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    // 1.Recuperar los libros
    const books = await Book.find(
      {
        select: {
          id: true,
          title: true,
          description: true,
          author: {
            id: true,
            name: true,
            nationality: true
          }
        },
        relations: {
          author: true
        }
      }
    )

    res.json(
      {
        success: true,
        message: "Books retrieved",
        data: books
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "error retrieving books",
        error: error
      }
    )
  }
}
import { Request, Response } from "express";
import { User } from "../database/models/User";


export const getAllUsers = async(req: Request, res: Response) => {
  try {
    // 1. recuperar de la bd los usuarios
    const users = await User.find(
      {
        select: {
          id: true,
          email: true,
          is_active: true,
          created_at: true
        }
      }
    )

    res.json(
      {
        success: true,
        message: "All users retrieved",
        data: users
      }
    )    
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Error retrieving users",
        error: error
      }
    )
  }
}

export const getUserProfile = async(req: Request, res: Response) => {
  try {
    // 1. Recuperar id del usuario a traves del token
    const userId = req.tokenData.id;

    // 2. Buscarlo en bd
    const user = await User.findOne(
      {
        where: {
          id: userId
        }
      }
    ) 

    // 3. Responder
    res.json(
      {
        success: true,
        message: "User profile retrieved",
        data: user
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Profile cant be retrieved"
      }
    )
  }
}

export const getUserFavoritesBooks = async (req: Request, res: Response) => {
  try {
    // 1. recuperar el id del usuario que hace la peticion a traves del token
    const userId = req.tokenData.id

    const userFavouriteBooks = await User.findOne({
      select: {
        id: true,
        email: true,
        favourite_books: {
          id: true,
          book: {
            id: true,
            title: true
          }
        }
      },
      where: {
        id: userId
      },
      relations: {
        favourite_books: {
          book: {
            author: true
          }
        }
      }
    })

    res.json(
      {
        success: true,
        message: "Favourite books retrieved",
        data: userFavouriteBooks
      }
    )



  } catch (error) {
    res.status(500).json(
      {
        success:false,
        message: "Error retrieving favourite books",
        error: error
      }
    )
  }
}

export const updateProfile = async (req: Request, res: Response) => {
  try {
    // 1. recuperar el id del usuario que hace la peticion a traves del token
    console.log(req.tokenData.id, req.body)
    // 2. actualizar el usuario
    const user = await User.update(
      {
        id: req.tokenData.id
      },
      {
        name: req.body.name,
        email: req.body.email
      }
    )

    res.json(
      {
        success: true,
        message: "Profile updated",
        data: user
      }
    )

  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Error updating profile",
        error: error
      }
    )
  }
}
import type { NextFunction, Request, Response } from "express"
import jwt, { decode } from 'jsonwebtoken'

const authMW = (req: Request, res: Response, next: NextFunction)=>{

    //@ts-ignore
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(400).json({message: "auth header not found"})
    }

    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(400).json({message: "token not found"})
    }
    const decoded = jwt.verify(token, "cotton")

    if(!decoded){
        return res.status(400).json({message:"invalid token cannot be decoded"})
    }

    req.user = decoded.userId
}
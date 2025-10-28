import type { NextFunction, Request, Response } from "express"
import jwt, { decode } from 'jsonwebtoken'

export const authMW = (req: Request, res: Response, next: NextFunction)=>{

    try {
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
        //@ts-ignore
        req.user = decoded.userId
        
        next()
    } 
    catch (error) {
        return res.status(500).json({message: "internal server error"})
    }
}
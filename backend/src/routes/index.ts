import { Router } from "express";
import { organisationSchema, signupSchema } from "../typechecks/index.js";
import { prisma } from "../prisma/src/index.js";
import { generateToken } from "../services/index.js";
import { authMW } from "../middlewares/authMW.js";
import { id } from "zod/locales";

const mainRouter = Router();

mainRouter.post('/signup', async(req, res)=>{
    const {username, password} = req.body;

    if(!username || !password ){
        return res.status(400).json({
            message:"signup credentials not provided"
        })
    }

    const validateData = signupSchema.safeParse({username, password})

    if(!validateData.success){
        return res.status(400).json({
            message: "wrong credential format"
        })
    }

    try {
        const response = await prisma.user.create({
            data:{
                username: validateData.data.username,
                password: validateData.data.password,
            }
        })

        return res.status(200).json({userId: response.id, message: "user created successfully"})
    } catch (error) {
        return res.status(500).json({message: "internal server error"})
    }

})

mainRouter.post('signin', async(req, res)=>{
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).json({
            message: "user credential not provided"
        })
    }

    const validateData = signupSchema.safeParse({username, password})

    if(!validateData.success){
        return res.status(400).json({
            message: "wrong credential format"
        })
    }

    try {
        const validateUser = await prisma.user.findFirst({
            where:{
                username: validateData.data.username
            },
            select:{
                password:true,
                id: true
            }
        })

        if(!validateUser){
            return res.status(400).json({
                message: "incorrect credential provided"
            })
        }

        if(validateData.data.password !== validateUser.password){
            return res.status(400).json({
                message: "incorrect password"
            })
        }

        const token = generateToken(username, validateUser.id)

        return res.status(200).json({
            token,
            message: "sign in success"
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
})

mainRouter.post('/organisation', authMW ,async(req, res)=>{
    const{name, address, location} = req.body;

    if(!name){
        return res.status(400).json({
            message: "orgaisation Name not provided"
        })
    }
    //@ts-ignore
    const ownerId = req.user

    const validateCredential = organisationSchema.safeParse({name, ownerId, address, location});

    if(!validateCredential.success){
        return res.status(400).json({
            message: "invalid credentials"
        })
    }

    try {
        const org = await prisma.organisation.create({
            data:{
                ownerId : validateCredential.data.ownerId,
                name: validateCredential.data.name,
                address:  validateCredential.data.address || null,
                location: validateCredential.data.location || null
            },
            select:{
                id: true,
            }
        })
        return res.status(200).json({
            message: "organisation created success",
            id: `organisation id ${id}`
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
})
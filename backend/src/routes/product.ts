import { Router } from "express";
import { authMW } from "../middlewares/authMW.js";
import { productSchema } from "../typechecks/index.js";
import { prisma } from "../prisma/src/index.js";

const productRouter = Router();

productRouter.post('/product', authMW ,async(req, res)=>{
    const {name, quantity, imgUrl, type, costPrice, sellPrice} = req.body;

    if(!name || !quantity || !costPrice){
        return res.status(400).json({
            message: "not enough product info povided"
        })
    }
    //@ts-ignore
    const ownerId = req.user
 
    const getOrgId = await prisma.organisation.findFirst({
        where:{
         ownerId: ownerId   
        },
        select:{
            id: true
        }
    })

    if(!getOrgId){
        return res.status(400).json({
            message: 'you are not the owner'
        })
    }

    const organisationId = getOrgId.id

    const productInfoValidation = productSchema.safeParse({name, quantity, imgUrl, type, costPrice, sellPrice, organisationId});

    if(!productInfoValidation.success){
        return res.status(400).json({
            message: 'invalid produt credential format'
        })
    }

    


    try {
        const response = await prisma.product.create({
            data:{
                name: productInfoValidation.data.name,
                quantity: productInfoValidation.data.quantity,
                imgUrl: productInfoValidation.data.imgUrl || null,
                type: productInfoValidation.data.type || null,
                costPrice: productInfoValidation.data.costPrice ,
                sellPrice: productInfoValidation.data.sellPrice || null,
                organisationId: productInfoValidation.data.organisationId,
            },
            select: {
                id: true
            }
        })

        return res.status(200).json({
            message: "product listed successfully",
            id: response.id
        })
    } catch (error) {
        res.status(500).json({
            message: 'internal sever error'
        })
    }
})

productRouter.get('/products', authMW, async(req, res)=>{
    //@ts-ignore
    const userId = req.user;
    const {organisation} = req.body

    const validateOwner = await prisma.organisation.findFirst({
        where: {
            ownerId: userId
        },
        select: {
            id:true
        }
    })

    if(!validateOwner){
        return res.status(400).json({
            message: "unauthorized access"
        })
    }

    try {

        const responsee= await prisma.product.findMany({
            where: {
                organisationId : validateOwner.id
            },
            select:{
                id: true,
                name: true,
                quantity: true,
                imgUrl: true,
                type: true,
                costPrice: true
            }
        })

        return res.status(200).json({
            data: responsee
        })
    } catch (error) {
        return res.status(500).json({
            message: 'internal server error'
        })
    }
})
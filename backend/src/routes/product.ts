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

    const productInfoValidation = productSchema.safeParse({name, quantity, imgUrl, type, costPrice, sellPrice});

    if(!productInfoValidation.success){
        return res.status(400).json({
            message: 'invalid produt credential format'
        })
    }

    try {
        const response = prisma.product.create({
            data:{
                name: productInfoValidation.data.name,
                quantity: productInfoValidation.data.quantity,
                imgUrl: productInfoValidation.data.imgUrl || null,
                type: productInfoValidation.data.type || null,
                costPrice: productInfoValidation.data.costPrice ,
                sellPrice: productInfoValidation.data.sellPrice || null
            },
            select: {
                id: true
            }
        })
    } catch (error) {
        
    }
})
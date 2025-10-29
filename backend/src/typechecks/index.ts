import {z} from 'zod'

export const signupSchema = z.object({
    username: z.string(),
    password: z.string()
})

export const organisationSchema = z.object({
    name: z.string(),
    ownerId: z.string(),
    address: z.string().optional(),
    location: z.string().optional()
})

export const productSchema = z.object({
    name: z.string(),
    quantity: z.number(),
    imgUrl: z.string().optional(),
    type: z.string().optional(),
    costPrice: z.number(),
    sellPrice: z.number().optional(),
    organisationId: z.string()
})
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
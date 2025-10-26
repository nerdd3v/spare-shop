import jwt from 'jsonwebtoken'

export const generateToken = (username: string, password: string)=>{
    const token = jwt.sign({username, password}, 'cotton')
    return token
}
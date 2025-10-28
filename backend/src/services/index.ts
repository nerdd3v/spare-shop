import jwt from 'jsonwebtoken'

export const generateToken = (username: string, userId: string)=>{
    const token = jwt.sign({username, userId}, 'cotton')
    return token
}
import jwt from 'jsonwebtoken';
import userModel from '../models/user/index.js';
export const getToken=async(email,newUsr)=>{
const token=jwt.sign({identifier:userModel.id},'secret');
return token
}

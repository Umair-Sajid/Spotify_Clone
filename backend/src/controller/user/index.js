import userModel from "../../models/user/index.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
const userController={
    create:async(req,res)=>{
        const{firstName,lastName,email,userName,password}=req.body;
        const emailFind=await userModel.findOne({
           where:{
               email
           }
        });
        if(emailFind){
           return res.json({
               msg:"email already exist",
               emailFind
           })
        }else{
           const hashedPassword=await bcrypt.hash(password,10)
           const newUsr=await userModel.create({
               email,password:hashedPassword,firstName,lastName,userName
           });
        //    const token =await getToken(email,newUsr);
           return res.json({
              "msg":"user Registered"
           })
        }
    },
    login:async(req,res)=>{
        const {email,password}=req.body;
        const user=await userModel.findOne({
            where:{
                email
            }
        });
        if(!user){
            return res.json({
                err:"Invalid credentials"
            })
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        // it will return true or false
        if(!isPasswordValid){
            return res.json({
                err:"Invalid credentials"
            })
        }

        // payload
        const data={
            id:user.id,
            email:user.email
        }
         const token=   jwt.sign(data,'secret'); 
        console.log(req.session)
        req.session.token = token; 
        req.session.user = data;
        await req.session.save();
        return res.json({   
            "msg":"user login",
            token,
            data
        })
    }
}
export default userController;
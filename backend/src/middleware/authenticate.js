import jwt from "jsonwebtoken";
const authenticateMiddleware=(req,res,next)=>{
 try {
    let token=req.headers.authorization;
    token=token.replace("Bearer ", "");
    jwt.verify(token,'secret');

    if(!req.session.token || !req.session.user){
        return res.json({
         "msg":"Invalid request"
        })
    }
    if(req.session.token !== token){
      return res.json({
         "msg":"Invalid Request"
      })
    }
    next();
 } catch (error) {
   return res.json({
      "msg":"Invalid request"
   })
    
 }
}
export default authenticateMiddleware;
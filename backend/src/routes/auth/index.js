import { Router } from "express";
import userController from "../../controller/user/index.js";


const authRouter=Router();
authRouter.post('/register',userController.create);
authRouter.post('/login',userController.login)
export default authRouter;
import { Request, Response } from "express";
import userService from '../Service/user_services'

const service=new userService();

class userController{
    public static listall(req:Request,res:Response){
        service.get(data:any)
            try {
                res.status(200).json(data)
            } catch (error) {
                
        }
    }
}

export default userController;
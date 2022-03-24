import { Request,Response,Router } from 'express';
import {getConnection} from 'typeorm';
import {User} from '../entity/User';
import { UserRepository } from '../Repository/user.repository';

export class userController{
    private router:Router;
    private userRepository: UserRepository;

    constructor() {
        this.router = Router();
        this.userRepository = getConnection().getCustomRepository(UserRepository);
        this.initializeRoutes();
      }

    //   //Get User 
    //   private async getUser(req:Request,res:Response){
    //        try {
    //            const user = await getConnection().manager.find(User);
    //     return res.status(200).json(user);
    //       } catch (error) {
    //        return res.status(500).send('Internal Error');
    //       }
    //     }

    //     //Get User by ID
    // private async getUserByID(req:Request,res:Response){
    //         try {
    //              const id=req.params.id
    //             const user = await getConnection().manager.findOneOrFail(User,id);
    //      return res.status(200).json(user);
    //        } catch (error) {
    //         return res.status(500).send('Internal Error');
    //        }
    //   }

    //   //Create new User
    // private async addUser(req: Request, res: Response) {
    //     const user =new User; 
    //      user.firstName=req.body.firstName;
    //     user.lastName=req.body.lastName;
    //     user.age=req.body.age;
    //     const result = await getConnection().manager.save(user);
    //     return res.status(200).json(result);
    //   }
      
    //   //Update user by ID
    //   private async updateUser(req:Request, res:Response){
    //     const id=req.params.id
    //     try {
    //          const user=await getConnection().manager.findOneOrFail(User,id);
    //     if(user){ 
    //         user.firstName=req.body.firstName
    //     user.lastName=req.body.lastName
    //     user.age=req.body.age
    //    const updateUser =await getConnection().manager.save(user)
    //    return res.status(200).json(updateUser);
    //   }
    //     }
    //     catch (error) {
    //         return res.status(500).send('Internal Error');
    //     }
    //    } 

    //   //Remove User by ID
    //   private async removeUSer(req:Request,res:Response){
    //       const id=req.params.id
    //       const user=await getConnection().manager.findByIds(User,[id]);
    //       const removeUser=await getConnection().manager.remove(user);
    //       return res.status(200).json([{message:'user removed is '+id }, {data:removeUser}]);
    //   }




    //Custom Repository
      //Get User 
      private async getUser(req:Request,res:Response){
        try {
            const user = await this.userRepository.find();
     return res.status(200).json(user);
       } catch (error) {
        return res.status(500).send('Internal Error');
       }
      }

     //Get User by ID
 private async getUserByID(req:Request,res:Response){
         try {
              const id=req.params.id
             const user = await this.userRepository.findOneOrFail(id);
      return res.status(200).json(user);
        } catch (error) {
         return res.status(500).send('Internal Error');
        }
   }

   //Create new User
 private async addUser(req: Request, res: Response) {
     const user =new User; 
      user.firstName=req.body.firstName;
     user.lastName=req.body.lastName;
     user.age=req.body.age;
     const result =await this.userRepository.save(user);
     return res.status(200).json(result);
   }
   
   //Update user by ID
   private async updateUser(req:Request, res:Response){
     const id=req.params.id
     try {
          const user=await this.userRepository.findOneOrFail(id);
     if(user){ 
         user.firstName=req.body.firstName
     user.lastName=req.body.lastName
     user.age=req.body.age
    const updateUser =await this.userRepository.save(user)
    return res.status(200).json(updateUser);
   }
     }
     catch (error) {
         return res.status(500).send('Internal Error');
     }
    } 

   //Remove User by ID
   private async removeUSer(req:Request,res:Response){
       const id=req.params.id
       const user=await this.userRepository.findByIds([id]);
       const removeUser=await this.userRepository.remove(user);
       return res.status(200).json([{message:'user removed is '+id }, {data:removeUser}]);
   }


    public getRouter(): Router {
         return this.router;
        }

      public initializeRoutes() {


        this.router.get('', (req, res) => this.getUser(req, res));
        this.router.post('', (req, res) => this.addUser(req, res));
        this.router.get('/:id', (req, res) => this.getUserByID(req, res));
        this.router.put('/:id', (req, res) => this.updateUser(req, res));
        this.router.delete('/:id', (req, res) => this.removeUSer(req, res));

        // this.router.get('', this.getUser);
        // this.router.get('/:id', this.getUserByID);
        //  this.router.post('', this.addUser);
        //  this.router.put('/:id', this.updateUser);
        //  this.router.delete('/:id', this.removeUSer);
        }
}

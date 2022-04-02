import { Request,Response,Router } from 'express';
import {getConnection} from 'typeorm';
import {Photo} from '../entity/Photo';
import { UserRepository } from '../Repository/user.repository';
import { PhotoRepository } from '../Repository/photo.repository';

export class photoController{
    private router:Router;
    private photoRepository: PhotoRepository;
    private userRepository: UserRepository;

    constructor() {
        this.router = Router();
        this.userRepository = getConnection().getCustomRepository(UserRepository);
        this.photoRepository = getConnection().getCustomRepository(PhotoRepository);
        this.initializeRoutes();
      }


    //Custom Repository
    //Create Photo By User Id
    private async addPhotoByUserId(req: Request, res: Response) {
      try {
         const id=req.params.id;
      const user=await this.userRepository.findOneOrFail(id)
      if(user){
      const photo=new Photo();
      photo.photoName=req.body.photoName;
      photo.userId=user.id;
      const result=await this.photoRepository.save(photo)
      return res.status(200).json(result);
      }
      } catch (error) {
        return res.status(500).send('Internal Error');
      }
     
      }
    

      //Get Photo By UserId
      private async getPhotoByUserId(req:Request,res:Response){
          try {
            const id=req.params.id;
            const user = await this.userRepository.findOneOrFail(id);
            if(user){
              //const userId=req.params.userId
           const result = await this.photoRepository.query("select * from photo where userId = ?",[user.id])
            return res.status(200).json(result);
            }
       } catch (error) {
        return res.status(500).send('Internal Error');
       }
    }

     //Get Photo By UserId and photoID
 private async  getPhotoByUserIdandPhotoId(req:Request,res:Response){
     try {
    const id=req.params.id;
    const user=await this.userRepository.findOneOrFail(id);
    if(user){
              const pid=req.params.pid
             const photo = await this.photoRepository.findOneOrFail(pid);
      return res.status(200).json(photo);
    }
        } catch (error) {
         return res.status(500).send('Internal Error');
   }
}

   
   
   //Update photo by userId and photo ID
   private async updatePhotoByUserId(req:Request, res:Response){
     try{
    const id=req.params.id;
    const user=await this.userRepository.findOneOrFail(id);
    if(user){
        const pid=req.params.pid
        const  photo=await this. photoRepository.findOneOrFail(pid);
        if(photo){ 
      //  photo.userId=id;
      //  photo.id=pid;
      const insertPhoto:Photo=req.body; 
      const updatedPhoto:Photo={...photo, ...insertPhoto}
       const updatePhoto =await this.photoRepository.save(updatedPhoto)
    return res.status(200).json(updatePhoto);
        }
  }
}
     catch (error) {
         return res.status(500).send('Internal Error');
     }
}

//    //Remove photo by ID
   private async removePhotoByUserId(req:Request,res:Response){
     try {
    const id=req.params.id;
    const user=await this.userRepository.findOneOrFail(id);
    if(user){
     
       const pid=req.params.pid
       const  photo=await this.photoRepository.findOneOrFail(pid);
       const removePhoto=await this.photoRepository.remove(photo);
       return res.status(200).json([{data:removePhoto}]);
  } 
}catch (error) {
    return res.status(500).send('Internal Error');
}
   }


    public getRouter(): Router {
         return this.router;
        }

      public initializeRoutes() {
        this.router.post('/:id/photo', (req, res) => this.addPhotoByUserId(req, res));
         this.router.get('/:id/photo', (req, res) => this.getPhotoByUserId(req, res));
         this.router.get('/:id/photo/:pid', (req, res) => this. getPhotoByUserIdandPhotoId(req, res));
        this.router.put('/:id/photo/:pid', (req, res) => this.updatePhotoByUserId(req, res));
        this.router.delete('/:id/photo/:pid', (req, res) => this.removePhotoByUserId(req, res));

        // this.router.get('', this.getUser);
        // this.router.get('/:id', this.getUserByID);
        //  this.router.post('', this.addUser);
        //  this.router.put('/:id', this.updateUser);
        //  this.router.delete('/:id', this.removeUSer);
        }
}
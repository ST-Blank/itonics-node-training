import express  from 'express';
const router=express.Router()
  import {getStudents,getItem,getItembyId,postItem,updateItemByid,deleteItemByid} from '../controller/controller'

  router.get('/',getStudents)
  // ITEMS Endpoint
  
  // GET /items
  router.get('/', getItem)
  
  // GET items/:id
  router.get('/:id',getItembyId )
  
  // POST /items
  router.post('/',postItem )
  
  //PUT /items/:id
  //Get the param from the path
  router.put('/:id',updateItemByid )
     
  
  // DELETE /items
  
  router.delete('/:id',deleteItemByid )

  export default router
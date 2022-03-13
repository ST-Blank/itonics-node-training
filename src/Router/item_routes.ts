import express  from 'express';
const items_router=express.Router()
  import {getItem,getItembyId,postItem,updateItemByid,deleteItemByid} from '../controller/controller'

  // ITEMS Endpoint
  
  // GET /items
  items_router.get('/', getItem)
  
  // GET items/:id
  items_router.get('/:id',getItembyId )
  
  // POST /items
  items_router.post('/',postItem )
  
  //PUT /items/:id
  //Get the param from the path
  items_router.put('/:id',updateItemByid )
     
  
  // DELETE /items
  
  items_router.delete('/:id',deleteItemByid )

  export default items_router
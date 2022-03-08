import { mockItems } from '../Mock/mockItems';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Items } from '../Contract/items';

// Get all items
export const findAll = async () => {
  return Promise.resolve(mockItems);
};

// Get item by provided ID
export const findById = async (id: number) => {
  const item = mockItems.find((mockItem) => mockItem.id === id);
  return Promise.resolve(item);
};

// TODO Create new functions: add, update and delete

export const Create=async(data:any)=>{
mockItems.push(data)
return Promise.resolve(data);
}

   export const Update=async(id:number, data:any)=>{
     
    const item= mockItems.find(item=>item.id==id)
    
      if(item){
        const newItem=mockItems.map((item)=>{
          
            
       })
      }
  
   }


export const Delete=async(id:number)=>{
  const Item= mockItems.find(item=>item.id==id)
  if(Item){
  const deleteItem=mockItems.filter((Item)=>Item.id!==id)
  return Promise.resolve(deleteItem);
  }
  }

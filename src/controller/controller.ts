import express, { Express, Request, Response } from 'express';
import { Items } from '../Contract/items';
import { findAll, findById, Create,Delete,Update } from '../Service/items.service';
import { students } from '../students';

export const getStudents=(req: Request, res: Response) => {
  res.status(200).json(students);
}

export const getItem=async(req: Request, res: Response) => {
    try {
      const items: Array<Items> = await findAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).send('Internal Error');
    }
  }

  export const getItembyId=async (req: Request, res: Response) => {
    // Get the param from the path
    const id: number = Number(req.params.id);
    try {
      // Fetch the item
      const item = await findById(id);
      if (!item) {
        res.status(404).send('Item not found');
      }
      res.status(200).json(item);
    } catch (error) {
     
    }
  }

  export const postItem= async (req: Request, res: Response) => {
  
    const newItem={
      id:Math.floor(Math.random() * 1000),
      title:req.body.title,
      body:req.body.body
      }
    try {
      const newitem=await Create(newItem)
      res.status(200).json(newitem);
    } catch (error) {
       res.status(500).send('Internal Error');
    }
  }

  export const updateItemByid= async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      const item = await findById(id)
      if(item){
    const insertItem=req.body
    const updatedItem={...item,...insertItem}
     const updateditem=await Update(id,updatedItem)
    //const array=req.body
      //console.log(updateitem);
    res.status(200).json(updateditem)
      }
    } catch (error) {
      res.status(500).send('internal error')
    }
  
      
    }

  export const deleteItemByid=async(req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    try {
       const Item=await Delete(id)
    res.status(200).json(Item)
    } catch (error) {
      res.status(500).send('Internal Error');
    } 
  }
import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import { Items } from './Contract/items';
import { mockItems } from './Mock/mockItems';
import { findAll, findById, Create,Delete,Update } from './Service/items.service';
import { students } from './students';
const app: Express = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:false}))

app.get('/students', (req: Request, res: Response) => {
  res.status(200).json(students);
});

// ITEMS Endpoint

// GET /items
app.get('/items', async (req: Request, res: Response) => {
  try {
    const items: Array<Items> = await findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send('Internal Error');
  }
});

// GET items/:id
app.get('/items/:id', async (req: Request, res: Response) => {
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
});

// POST /items
app.post('/items', async (req: Request, res: Response) => {
  
  const newItem={
    id:req.body.id,
    title:req.body.title,
    body:req.body.body
    }
  try {
    const newitem=await Create(newItem)
    res.status(200).json(newitem);
  } catch (error) {
     res.status(500).send('Internal Error');
  }
});

// PUT /items/:id
// Get the param from the path
app.put('/items/:id', async (req: Request, res: Response) => {
  
  const id: number = Number(req.params.id);
  const {title,body}=req.body;
 

    
  })
  
    // console.log(id);
    // res.json(id)
    

// DELETE /items

//DELETE /items/:id
app.delete('/items/:id', async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  try {
     const deleteItem=await Delete(id)
  res.status(200).json(deleteItem)
  } catch (error) {
    res.status(500).send('Internal Error');
  }
 
    
});

// Start server
app.listen(port, () => {
  console.log('Listening on port:', port);
});

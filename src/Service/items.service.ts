import { mockItems } from '../Mock/mockItems';

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

   export const Update=async(id:number,body:any)=>{
    const item= mockItems.find(item=>item.id==id)
    if(item){
      item.id=id
      item.title=body.title
      item.body=body.body
      return Promise.resolve(item);
    }
  }


export const Delete=async(id:number)=>{  
  const Item= mockItems.find(item=>item.id==id)
  if(Item){
  const deleteItem=mockItems.filter((Item)=>Item.id!==id)
  return Promise.resolve(deleteItem);
  }
  }

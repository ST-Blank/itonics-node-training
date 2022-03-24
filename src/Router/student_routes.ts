import express  from 'express';
const students_router=express.Router()
  import {getStudents} from '../controller/controller'

  students_router.get('/',getStudents)
  

  export default students_router
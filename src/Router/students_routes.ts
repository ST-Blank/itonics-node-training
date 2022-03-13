import express  from 'express';
const students__router=express.Router()
  import {getStudents} from '../controller/controller'

  students__router.get('/',getStudents)
  // STUDENTS Endpoint

  export default students__router
import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { createConnection} from 'typeorm';
import 'reflect-metadata';
import items_router from './Router/item_routes'
import students_router from './Router/student_routes'
import {userController} from './controller/user_controller'
import { User } from './entity/User';
require('dotenv').config();

const PORT = process.env.PORT || 5000;

class Server {
  private app: Express;
  usercontroller!: userController;

  constructor() {
    this.app = express();
    this.setupConfig();
    this.setupRoutes();
  }

  public setupConfig(): void {
    this.app.use(bodyParser.urlencoded({extended:false}))
  }

  public async setupRoutes(): Promise<void> {
    await createConnection({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      synchronize: true,
      entities: [User]
    });

  // .then(connection => {

  //   // here you can start to work with your entities

  // }).catch(error => console.log(error))

//  "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"

    //console.log(getConnection('test'));

    // STUDENTS endpoint
    this.app.use('/students',students_router );;
    // ITEMS Endpoint
    this.app.use('/items',items_router);

    this.usercontroller = new userController();

    this.app.use('/users',this.usercontroller.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log('Listening on port:', PORT);
    });
  }
}

const server = new Server();

// Start server
server.start();

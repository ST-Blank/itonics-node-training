// import bodyParser from 'body-parser';
// import express, { Express, Request, Response } from 'express';
// import items_router from './Router/item_routes'
// import students_router from './Router/students_routes'
// const app: Express = express();

// const port = process.env.PORT || 8000;

// app.use(bodyParser.urlencoded({extended:false}))

// app.use('/students',students_router );

// // ITEMS Endpoint

// app.use('/items',items_router)


// // Start server
// app.listen(port, () => {
//   console.log('Listening on port:', port);
// });


import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { createConnection, getConnection } from 'typeorm';
import items_router from './Router/item_routes'
import students_router from './Router/students_routes'
require('dotenv').config();

const PORT = process.env.PORT || 5000;

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupConfig();
    this.setupRoutes();
  }

  public setupConfig(): void {
    this.app.use(bodyParser.urlencoded({extended:false}))
  }

  public async setupRoutes(): Promise<void> {
    await createConnection()

  .then(connection => {

    // here you can start to work with your entities
  }).catch(error => console.log(error))

//  "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"

    //console.log(getConnection('test'));

    // STUDENTS endpoint
    this.app.use('/students',students_router );;
    // ITEMS Endpoint
    this.app.use('/items',items_router);
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

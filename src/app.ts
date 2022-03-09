import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import { students } from './students';
import router from './Router/routes'
const app: Express = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:false}))

app.use('/students',router );

// ITEMS Endpoint

app.use('/items',router)


// Start server
app.listen(port, () => {
  console.log('Listening on port:', port);
});

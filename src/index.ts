import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

    createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "admin",
        database: "test",
       // socketPath: '/var/run/mysqld/mysqld.sock',
        entities: [
            User
        ],
        synchronize: true,
        logging: false
    }).then(connection => {
        // here you can start to work with your entities
    }).catch(error => console.log(error))
  //  "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"







  

//   "entities": [
//     "src/entity/**/*.ts"
//  ],
//  "migrations": [
//     "src/migration/**/*.ts"
//  ],
//  "subscribers": [
//     "src/subscriber/**/*.ts"
//  ],
//  "cli": {
//     "entitiesDir": "src/entity",
//     "migrationsDir": "src/migration",
//     "subscribersDir": "src/subscriber"
//  }
const mongoose = require("mongoose");

// import * as fs from "fs";
// import { DB_HOST_LOCAL } from "../constants";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const DB_HOST = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@citycultureapi.aqluv.mongodb.net/${process.env.DB_CLUSTER}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: true, w: "majority" };

// Connect to MongoDB
mongoose.connect(DB_HOST, options)
  // .then(clearDatabase)
  // .then(seedDatabase)


const db = mongoose.connection;
export default db;


//  async function clearDatabase () {
//    const collections = mongoose.connection.collections;

//    for (const key in collections) {
//      const collection = collections[key];
//      await collection.deleteMany({}, 
//        (rej: any) => rej && console.error(rej.toString()));
//    }
//  }

 /** Seed user data for user db collection. */
//  function getSeedyData () {
  
//    const collections = Object.keys(mongoose.connection.collections);
//    const path = "./dist/seeds/";     
   
//    const modelNameValues = collections.reduce((total: any, collectionName:any) => {
//        const updatedValues = total;
//        /** Data for seeding - eg  [modelName].seed.json */ 
//        const data = fs.readFileSync(`${path}/${collectionName}.seed.json`, {encoding:'utf8'})
//        if (typeof data === "string") {            
//          updatedValues[collectionName] = JSON.parse(data).data;
//        } 
//        return updatedValues;
//    }, {});

//    return modelNameValues || {};
//  };


/**
 * @example data
 * {
 *    a: [{...}, ...],
 *    b: [{...}, ...],
 *    ...
 * }
 */
//  function seedDatabase () {
//   /* @TODO: getData() AND seedDB() can be composed here. */
//   const data = getSeedyData();     
//   Object.keys(data).map(name => {
//     mongoose.connection.collections[name].insertMany(data[name]);
//   })
//  }  

const mongoose = require("mongoose");
import * as fs from "fs";

// const DB_HOST = process.env.DB_HOST || "";
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
mongoose.connect("mongodb://db:27017/culture_db?authSource=admin")
  .then(clearDatabase)
  .then(seedDatabase)

const db = mongoose.connection;
export default db;


async function clearDatabase () {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({}, 
      (rej: any) => rej && console.error(rej.toString()));
  }
}

/**
 * Seed user data for user db collection.
 */
function getSeedyData () {
  
  const collections = Object.keys(mongoose.connection.collections);
  const path = "./dist/seeds/";     
  const modelNameValues = {};
  
  collections.map(collectionName => {

      // Data for seeding - e.g  [modelName].seed.json
      const data = fs.readFileSync(`${path}/${collectionName}.seed.json`, {encoding:'utf8'})
      if (typeof data === "string") {            
        modelNameValues[collectionName] = JSON.parse(data).data;
      } 
     
  })

  return modelNameValues || {};
};


/**
 * @example data
 * {
 *    a: [{...}, ...],
 *    b: [{...}, ...],
 *    ...
 * }
 */
function seedDatabase () {

  const data = getSeedyData();     
  Object.keys(data).map(name => {
    mongoose.connection.collections[name].insertMany(data[name]);
  })
}  

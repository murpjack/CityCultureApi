const mongoose = require("mongoose");

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
const { DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@citycultureapi.aqluv.mongodb.net/${DB_CLUSTER}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: true, w: "majority" };

// Connect to MongoDB
mongoose.connect(uri, options)

const db = mongoose.connection;
export default db;
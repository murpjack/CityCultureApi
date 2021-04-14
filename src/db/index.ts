const mongoose = require("mongoose");

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const DB_HOST = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@citycultureapi.aqluv.mongodb.net/${process.env.DB_CLUSTER}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true, retryWrites: true, w: "majority" };

/** Connect to MongoDB */
mongoose.connect(DB_HOST, options)

const db = mongoose.connection;
export default db;
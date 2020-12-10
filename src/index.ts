require('dotenv').config();
// import * as cors from "cors";
// const cors = require("cors");
import app from "./app";
import db from "./db";
import router from "./routes";


// DATABASE
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.use(cors({origin: "http://localhost:3001/api"}))

app.use("/api", router);

app.listen(process.env.PORT, () => console.log(`Server on http://localhost:${process.env.PORT}/`));

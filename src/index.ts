require('dotenv').config();
import app from "./app";
import db from "./db";
import router from "./routes";


// DATABASE
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", router);

app.listen(process.env.PORT, () => console.log(`Server on http://localhost:${process.env.PORT}/`));

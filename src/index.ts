require('dotenv').config();
import app from "./app";
import db from "./db";
import router from "./routes";

const port = process.env.PORT || 1234;

// DATABASE
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", router);
app.listen(port, () => console.log(`Server on http://localhost:${port}/`));

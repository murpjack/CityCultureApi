const express = require("express");
import router from "./routes";

const app = express();

// API
app.use(express.json());
app.use("/api", router);

export default app;

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());

app.use("/api/v1", routes)

const port = 9000;
app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`);
});
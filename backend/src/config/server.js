import express from "express";
import { configDotenv } from "dotenv";

const app = express();
configDotenv();

app.set('port', process.env.PORT || 4000);

app.use(express.json());

export default app;
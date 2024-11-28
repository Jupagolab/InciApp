import mongoose from "mongoose";

const { DB_NAME, DB_PASS } = process.env;

const URI = `mongodb+srv://${DB_NAME}:${DB_PASS}@inciapp.mufhn.mongodb.net/?retryWrites=true&w=majority&appName=InciApp`;

mongoose
  .connect(URI)
  .then(() => console.log("Base de datos conectada"))
  .catch(err => console.log(err));

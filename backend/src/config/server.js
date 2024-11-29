import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors';

const app = express();
configDotenv();

app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(cors());

//rutas
import rutaUsuarios from '../routes/usuarios.js';

app.use('/api/usuarios', rutaUsuarios);

export default app;
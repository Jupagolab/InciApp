import { Router } from 'express';
import { login, register } from "../controllers/usuarios.controllers.js";

const app = Router();

app.post('/login', login)

app.post('/signup', register);

export default app;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'SECRETO';

export const generarToken = (usuario) => {
  return jwt.sign(usuario, SECRET_KEY, { expiresIn: '7d' })
}

//Verificar token en la solicitudes
export const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new createError('Token de autorizacion no proporcionado'))
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    next();
  }
}

// ----- BCRYPT -------

export const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
}
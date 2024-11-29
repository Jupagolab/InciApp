import Usuarios from '../models/usuarios.js';
import { generarToken, verificarToken, comparePasswords, hashPassword } from "../middlewares/auth.middleware.js";

export const register = async (req, res) => {
  try {
    const { usuario, nombre, clave, rol } = req.body;

    const existeUsuario = await Usuarios.findOne({ usuario });

    if (existeUsuario) return res.status(400).json({ mensaje: "Usuario ya existe" });

    const claveEncriptada = await hashPassword(clave);

    const nuevoUsuario = await Usuarios.create({ usuario, nombre, clave: claveEncriptada, rol })

    res.status(201).json({
      mensaje: "Usuario creado con exito",
      nuevoUsuario
    });
  } catch (error) {
    console.log("Error al crear el usuario: ", error);
    return res.status(500).json({ message: "Ocurrio un error con el servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { usuario, clave } = req.body;

    const existeUsuario = await Usuarios.findOne({ usuario });

    if (!existeUsuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    const claveValida = await comparePasswords(clave, existeUsuario.clave);

    if (!claveValida) {
      return res.status(401).json({ mensaje: 'Usuario o Contraseña Invalido' });
    }

    const token = generarToken({ existeUsuario });

    res.status(201).json({
      token,
      mensaje: "Inicio de sesion exitoso",
      usuario: {
        '_id': existeUsuario._id,
        'nombre': existeUsuario.nombre,
        'rol': existeUsuario.rol
      }
    })

  } catch (error) {
    console.log("Error al inciar sesion: ", error);
    return res.status(500).json({ message: "Ocurrio un error con el servidor" });
  }
}
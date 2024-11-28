import { model, Schema } from "mongoose";

const UsuariosEsquema = new Schema(
  {
    usuario: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    clave: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ["Administrador", "Tecnico", "Usuario"],
      default: "Usuario"
    }
  },
  { timestamps: true }
);

const Usuarios = model("usuarios", UsuariosEsquema);

export default Usuarios;
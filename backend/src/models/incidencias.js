import { model, Schema } from "mongoose";

const IncidenciasEsquemas = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: {
    type: String,
    enum: ["Pendiente", "En Progreso", "Resuelto"],
    default: "Pendiente"
  },
  prioridad: {
    type: String,
    enum: ["Baja", "Media", "Alta"],
    default: "Media"
  },
  fechaCreacion: { type: Date, default: Date.now },
  usuarioAsignado: {
    type: Schema.Types.ObjectId,
    ref: "usuarios",
    required: true
  }
});

const Inicidencias = model("incidencias", IncidenciasEsquemas)

export default Inicidencias;
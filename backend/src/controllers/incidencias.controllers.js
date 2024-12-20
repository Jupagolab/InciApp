import Inicidencias from "../models/incidencias";

export const crearIncidencia = async (req, res) => {
  try {
    const {
      titulo,
      descripcion,
      estado,
      prioridad,
      fechaCreacion,
      usuarioAsignado
    } = req.body;

    const nuevaIncidencia = new Inicidencias({
      titulo,
      descripcion,
      estado,
      prioridad,
      fechaCreacion,
      usuarioAsignado
    });

    const incidenciaGuardada = await nuevaIncidencia.save();

    res.status(201).json({
      mensaje: "Incidencia creada con exito",
      incidenciaGuardada
    });
  } catch (error) {
    console.log("Error al crear el evento: ", error);
    return res.status(500).json({ message: "Error al crear el evento" });
  }
};

export const buscarIncidencia = async (req, res) => {
  try {
    const incidencias = await Inicidencias.find().populate('usuarioAsignado');

    if (!incidencias) return res.status(404).json({ mensaje: "No se han encontrado incidencias"});

    res.status(201).json({
      incidencias
    })

  } catch (error) {
    
  }
}
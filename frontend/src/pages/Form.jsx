const Form = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-2 mx-auto p-4 max-w-80 bg-slate-200 rounded-md"
      >
        <h2 className="font-bold text-center mb-2">
          Formulario de Incidencias
        </h2>
        <input
          className="py-1 px-2"
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Titulo de Incidencia"
        />
        <textarea
          className="py-1 px-2"
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="5"
          placeholder="Descripción"
        />
        <select className="py-1 px-2" name="estado" id="estado">
          <option value="Pendiente">Pendiente</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Resuelto">Resuelto</option>
        </select>
        <div className="flex justify-start items-center gap-3">
          <label className="mx-2 font-semibold" htmlFor="prioridad">
            Prioridad
          </label>
          <select
            className="py-1 px-2"
            name="prioridad"
            id="prioridad"
            value={"Media"}
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <label className="font-semibold" htmlFor="fecha">
          Fecha de Creación
        </label>
        <input type="date" name="fecha" id="fecha" className="py-1 px-2" />
      </form>
    </div>
  );
};

export default Form;

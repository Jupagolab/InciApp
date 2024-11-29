import React from 'react'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-2 mx-auto p-4 max-w-80 bg-slate-200 rounded-md"
      >
        <h2 className="font-bold text-center mb-2">
          Iniciar Sesion
        </h2>
        <input
          className="py-1 px-2"
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Ingresa tu usuario"
        />
        <input className="py-1 px-2" type="password" name="clave" id="clave" placeholder='Ingresa una contraseña' />
        <div className='mt-2 flex justify-center items-center mx-auto gap-5'>
          <button className='bg-white py-1 px-3 font-semibold' type="submit">Iniciar Sesion</button>
          <button className='bg-white py-1 px-3 font-semibold' type="reset">Cancelar</button>
        </div>

      </form>
    </div>
  )
}

export default Login

import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='bg-cyan-300 flex justify-between p-4 gap-5 items-center min-w-full top-0'>
      <h1 className='font-bold text-2xl'>InciApp</h1>
      <div className='flex justify-center items-center gap-3'>
        <button onClick={() => navigate("/login")} className='bg-white py-1 px-3 rounded font-semibold' type="button">Inciar Sesion</button>
        <button onClick={() => navigate("/signup")} className='bg-white py-1 px-3 rounded font-semibold' type="button">Registrarse</button>
      </div>
    </header>
  )
}

export default Header

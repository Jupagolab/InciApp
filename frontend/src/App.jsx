import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Login from "./pages/Usuarios/Login";
import Register from "./pages/Usuarios/Register";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between items-center mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/formulario" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

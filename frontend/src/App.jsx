import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

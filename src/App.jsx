import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Medicos from "./pages/Medicos";
import Contacto from "./pages/Contacto";
import SacarTurno from "./pages/Turnos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/turnos" element={<SacarTurno />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

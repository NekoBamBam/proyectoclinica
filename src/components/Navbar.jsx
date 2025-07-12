import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Clínica Salud</h1>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/medicos">Médicos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/turnos">Turnos</Link>
      </div>
    </nav>
  )
}

export default Navbar


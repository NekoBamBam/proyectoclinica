import { useState } from "react";
import { medicos } from "../data/Medicos";
import CardMedico from "../components/Card";

export default function Medicos() {
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState(null);

  // Obtener lista de especialidades únicas
  const especialidadesUnicas = [...new Set(medicos.map(m => m.especialidad).filter(e => e))];

  // Filtrar médicos según especialidad seleccionada
  const medicosFiltrados = especialidadSeleccionada
    ? medicos.filter(m => m.especialidad === especialidadSeleccionada)
    : [];

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-4">Médicos por Especialidad</h2>

      {/* Botones de especialidades */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {especialidadesUnicas.map((esp) => (
          <p
            key={esp}
            className="bg-blue-600 text-white px-16 py-5 rounded hover:bg-blue-800 transition"
            onClick={() => setEspecialidadSeleccionada(esp)}
          >
            {esp}
          </p>
        ))}

        {/* Botón para volver al menú de especialidades */}
        {especialidadSeleccionada && (
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            onClick={() => setEspecialidadSeleccionada(null)}
          >
            Volver
          </button>
        )}
      </div>

      {/* Mostrar cards solo si hay especialidad seleccionada */}
      {especialidadSeleccionada && (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">{especialidadSeleccionada}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {medicosFiltrados.map((medico) => (
              <CardMedico
                key={medico.nombre}
                nombre={medico.nombre}
                especialidad={medico.especialidad}
                dias={medico.dias}
                horarios={medico.horarios}
                imagen={medico.imagen}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

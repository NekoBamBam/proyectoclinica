import { useState } from "react";
import { medicos } from "../data/Medicos";

export default function SacarTurno() {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [medico, setMedico] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [turnoConfirmado, setTurnoConfirmado] = useState(false);

  // Especialidades únicas
  const especialidadesUnicas = [...new Set(medicos.map(m => m.especialidad).filter(e => e))];

  // Filtrar médicos según especialidad elegida
  const medicosDisponibles = medicos.filter(m => m.especialidad === especialidad);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá guardarías el turno en una base de datos o localStorage
    setTurnoConfirmado(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Sacar Turno</h2>

      {!turnoConfirmado ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre del paciente"
            value={nombrePaciente}
            onChange={(e) => setNombrePaciente(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <select
            value={especialidad}
            onChange={(e) => {
              setEspecialidad(e.target.value);
              setMedico("");
            }}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Seleccione especialidad</option>
            {especialidadesUnicas.map((esp) => (
              <option key={esp} value={esp}>
                {esp}
              </option>
            ))}
          </select>

          <select
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
            required
            className="w-full border p-2 rounded"
            disabled={!especialidad}
          >
            <option value="">Seleccione médico</option>
            {medicosDisponibles.map((m) => (
              <option key={m.nombre} value={m.nombre}>
                {m.nombre}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Confirmar Turno
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">✅ Turno confirmado</h3>
          <p className="mb-2">Paciente: <strong>{nombrePaciente}</strong></p>
          <p className="mb-2">Especialidad: <strong>{especialidad}</strong></p>
          <p className="mb-2">Médico: <strong>{medico}</strong></p>
          <p className="mb-2">Fecha: <strong>{fecha}</strong> a las <strong>{hora}</strong></p>

          <button
            onClick={() => {
              setTurnoConfirmado(false);
              setNombrePaciente("");
              setEspecialidad("");
              setMedico("");
              setFecha("");
              setHora("");
            }}
            className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Sacar otro turno
          </button>
        </div>
      )}
    </div>
  );
}

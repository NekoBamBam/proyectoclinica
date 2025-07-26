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
  const especialidadesUnicas = [
    ...new Set(medicos.map((m) => m.especialidad).filter((e) => e)),
  ];

  // Filtrar médicos según especialidad elegida
  const medicosDisponibles = medicos.filter(
    (m) => m.especialidad === especialidad
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setTurnoConfirmado(true);

    const numeroWhatsApp = "2216282112"; // ← Cambiá esto por tu número real

    const mensaje = `Hola, quiero solicitar un turno.\n\n👤 Paciente: ${nombrePaciente}\n📋 Especialidad: ${especialidad}\n👨‍⚕️ Médico: ${medico}\n📅 Fecha: ${fecha}\n⏰ Hora: ${hora}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(url, "_blank");
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
  onChange={(e) => {
    const nuevaFecha = e.target.value;
    const diaSeleccionado = new Date(nuevaFecha).getDay(); // 0 = domingo, 1 = lunes...

    // Buscar el médico seleccionado
    const medicoSeleccionado = medicos.find((m) => m.nombre === medico);

    if (medicoSeleccionado) {
      // Mapeo nombres a números
      const diasPermitidos = {
        domingo: 0,
        lunes: 1,
        martes: 2,
        miércoles: 3,
        jueves: 4,
        viernes: 5,
        sábado: 6,
      };

      const diasDelMedico = medicoSeleccionado.dias.map(
        (dia) => diasPermitidos[dia.toLowerCase()]
      );

      if (!diasDelMedico.includes(diaSeleccionado)) {
        e.target.setCustomValidity("El médico no atiende ese día.");
        e.target.reportValidity();
        setFecha(""); // limpiar fecha
        return;
      } else {
        e.target.setCustomValidity(""); // limpiar errores
      }
    }

    setFecha(nuevaFecha);
  }}
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
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            ✅ Turno confirmado
          </h3>
          <p className="mb-2">
            Paciente: <strong>{nombrePaciente}</strong>
          </p>
          <p className="mb-2">
            Especialidad: <strong>{especialidad}</strong>
          </p>
          <p className="mb-2">
            Médico: <strong>{medico}</strong>
          </p>
          <p className="mb-2">
            Fecha: <strong>{fecha}</strong> a las <strong>{hora}</strong>
          </p>

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

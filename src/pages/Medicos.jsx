import { medicos } from "../data/Medicos";
import CardMedico from "../components/Card";

export default function Medicos() {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-4">Médicos Disponibles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {medicos.map((medico) => (
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
  );
}

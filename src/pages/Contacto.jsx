import { useState } from "react";
import { MdPhone, MdLocationOn, MdAccessTime, MdEmail } from "react-icons/md";
import Mapa from "../components/Mapa";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validarEmail = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!email.trim()) {
      nuevosErrores.email = "El correo es obligatorio.";
    } else if (!validarEmail(email)) {
      nuevosErrores.email = "El correo no es válido.";
    }
    if (!mensaje.trim() || mensaje.length < 10)
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      console.log("Mensaje enviado:", { nombre, email, mensaje });
      setEnviado(true);
      setNombre("");
      setEmail("");
      setMensaje("");
      setTimeout(() => setEnviado(false), 4000); // oculta el mensaje después de 4s
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Contacto</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info de contacto */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MdPhone className="text-xl text-blue-600" />
            <p>Teléfono: (351) 555-5555</p>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-xl text-blue-600" />
            <p>Dirección: Av. Salud 123, Córdoba</p>
          </div>
          <div className="flex items-center gap-3">
            <MdAccessTime className="text-xl text-blue-600" />
            <p>Horario: Lunes a Viernes de 08:00 a 20:00 hs</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-xl text-blue-600" />
            <p>Email: contacto@clinicasalud.com</p>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            {enviado && (
              <p className="text-green-600 font-semibold">¡Mensaje enviado con éxito!</p>
            )}

            <div>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-2 border border-gray-300 rounded"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {errores.nombre && (
                <p className="text-red-500 text-sm">{errores.nombre}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errores.email && (
                <p className="text-red-500 text-sm">{errores.email}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Tu mensaje"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
              {errores.mensaje && (
                <p className="text-red-500 text-sm">{errores.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Mapa */}
      <div className="pt-4">
        <Mapa />
      </div>
    </div>
  );
}

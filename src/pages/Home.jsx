import React from "react";
import fondo from "../assets/fondoclinica.jpg";
function Home() {
  return (
    <div className="relative w-full h-96">
      {/* Imagen */}
      <img src={fondo} alt="Fondo" className="w-full h-full object-cover" />

      {/* Texto encima */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">
          Texto encima de la imagen
        </h1>
      </div>
      <div className="w-full bg-white p-10 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 opacity-0 animate-fade-in">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl text-center">
          Ofrecemos atención médica integral, turnos online, especialistas en
          distintas áreas, y mucho más.
        </p>
      </div>

      {/* Sección 3: más contenido */}
      <div className="w-full bg-gray-100 p-10 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Sobre Nosotros
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl text-center">
          Somos una clínica ficticia, pero hecha con mucho código y pasión.
        </p>
      </div>
    </div>
  );
}

export default Home;
/*
export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bienvenidos a Clínica Salud</h2>
      <p>Horario de atención: Lunes a Viernes de 8:00 a 20:00 hs</p>
    </div>
  );
}
*/

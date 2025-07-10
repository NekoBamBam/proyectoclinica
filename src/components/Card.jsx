import React from 'react'

function Card({ nombre, especialidad,dias,horarios,imagen }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={imagen} alt="" className="w-32 h-32 object-cover rounded-full mb-4"/>
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p>{especialidad}</p>
      <p>{dias}</p>
      <p>{horarios}</p>
    </div>
  )
}

export default Card

/*
export default function CardMedico({ nombre, especialidad }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p>{especialidad}</p>
    </div>
  );
}
*/
import React from 'react'

function Card({ nombre, especialidad,dias,horarios,imagen }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={imagen} alt="" className="w-32 h-32 object-cover rounded-full mb-4"/>
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p>{especialidad}</p>
      <p>{dias}</p>
      <p>{horarios}</p>
      <button className='bg-red-500 px-4 py-3'></button>
    </div>
  )
}

export default Card


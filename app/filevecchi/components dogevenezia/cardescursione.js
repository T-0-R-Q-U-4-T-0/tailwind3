import React from "react";

export default function Escursione({
  titolo,
  partenza,
  durata,
  disponibilita,
  costo,
  immagine,
  prenota,
}) {
    return(
        <div className="bg-white rounded-lg shadow-lg max-w-sm mx-auto">
        <img
          src={immagine}
          alt="Lighthouse and buildings near the water in Murano, Burano, and Torcello"
          className="rounded-t-lg"
        />
        <div className="bg-pink-800 text-white text-center py-2">
          <i className="fas fa-exclamation-circle"></i>
          <span className="font-semibold">{prenota}</span>
        </div>
        <div className="p-2">
          <h2 className="mb-2 text-black">
             {titolo}
          </h2>
          <p className="text-gray-700">
             {partenza}
          </p>
          <p className="text-gray-700">
             {durata}
          </p>
          <p className="text-gray-700">
             {disponibilita}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <button className="bg-pink-800 text-white px-10 py-3 rounded-full">
              PRENOTA 
            </button>
            <div className="text-right">
              <p className="font-bold text-black">{costo}</p>
            </div>
          </div>
        </div>
      </div>
    )
}


import React from "react";

const Escursione = ({
  titolo = "Escursione alle 3 Isole Murano - Burano - Torcell...",
  partenza = "Venezia",
  durata = "6h 30m",
  disponibilita = " 1 aprile 2024 al: 31 marzo 2026",
  costo = "35,00 €",
  immagine = "https://www.dogedivenezia.it/_next/image?url=https%3A%2F%2Fbackoffice.dogedivenezia.it%2Fassets%2Fe8d056a6-4748-4c91-8d78-563a41256719.jpg&w=1080&q=75"
}) => {
    return(
        <div className="bg-white rounded-lg shadow-lg max-w-sm mx-auto">
        <img
          src={immagine}
          alt="Lighthouse and buildings near the water in Murano, Burano, and Torcello"
          className="rounded-t-lg"
        />
        <div className="bg-pink-800 text-white text-center py-2">
          <i className="fas fa-exclamation-circle"></i>
          <span className="ml-2 font-semibold">PRENOTA SUBITO!</span>
        </div>
        <div className="p-4">
          <h2 className="text-xl mb-2 text-black">
            {titolo}
          </h2>
          <p className="text-gray-700">
            <strong>Partenza:</strong> {partenza}
          </p>
          <p className="text-gray-700">
            <strong>Durata:</strong> {durata}
          </p>
          <p className="text-gray-700">
            <strong>Disponibile dal:</strong> {disponibilita}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <button className="bg-pink-800 text-white px-10 py-3 rounded-full">
              PRENOTA 
            </button>
            <div className="text-right">
              <span className="text-gray-500 text-sm">Da</span>
              <p className="text-2xl font-bold text-black">{costo}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Escursione;
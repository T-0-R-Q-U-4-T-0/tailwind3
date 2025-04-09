import Head from "next/head"
import React from "react";

const Escursione2 = ({
  titolo = "Escursione alle 3 Isole Murano - Burano - Torcello",
  descrizione = "La nostra prima tappa, Murano, scopri perché l'isola è rinomata per le sue vetrerie con una visita a una fabbrica di vetro locale. Guarda un abile artigiano durante una dimostrazione della lavorazione del vetro. Successivamente, avrai circa un'ora sull'isola per fare shopping in uno dei tanti negozi di vetro.",
  partenza = "Venezia",
  durata = "6h 30m",
  disponibilita = " 1 aprile 2024",
  costo = "35,00 €",
  immagine = "https://www.dogedivenezia.it/_next/image?url=https%3A%2F%2Fbackoffice.dogedivenezia.it%2Fassets%2F44a433f7-5679-4730-adf3-69d0e99d9924.jpg&w=2048&q=75"
}) => {
    return(
        <div className="flex justify-center items-center min-h-screen">
        <Head>
          <title>Escursione alle 3 Isole Murano - Burano - Torcello</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="https://www.dogedivenezia.it/_next/image?url=https%3A%2F%2Fbackoffice.dogedivenezia.it%2Fassets%2F44a433f7-5679-4730-adf3-69d0e99d9924.jpg&w=2048&q=75"
                className="rounded-lg w-full"
                width="600"
                height="200"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-4 text-black">
                {titolo}
              </h1>
              <p className="mb-4 text-gray-800">
                {descrizione}
                </p>
              <p className="mb-2 text-gray-800">
                <strong>Partenza:</strong> {partenza}
              </p>
              <p className="mb-2 text-gray-800">
                <strong>Durata:</strong> {durata}
              </p>
              <p className="mb-4 text-gray-800">
                <strong>Disponibile dal:</strong> {disponibilita}
              </p>
              <div className="flex items-center justify-between ">
                <button className="bg-pink-800 text-white font-bold py-4 px-8 rounded-full">
                  PRENOTA
                </button>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{costo}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Escursione2;
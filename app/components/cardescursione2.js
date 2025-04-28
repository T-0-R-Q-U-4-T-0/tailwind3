import Head from "next/head"
import React from "react";

export default function Escursione2({
  titolo,
  descrizione,
  partenza,
  durata,
  disponibilita,
  costo,
}) {
    return(
        <div className="flex justify-center items-center min-h-screen">
        <Head>
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
                {partenza}
              </p>
              <p className="mb-2 text-gray-800">
                {durata}
              </p>
              <p className="mb-4 text-gray-800">
                {disponibilita}
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


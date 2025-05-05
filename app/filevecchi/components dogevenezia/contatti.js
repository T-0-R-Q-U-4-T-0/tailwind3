import React from "react";

export default function Contatti({
  immagine,
  titolo,
  sottotitolo,
  numerogruppi,
  emailgruppi,
  numeroindividuali,
  emailindividuali,
}) {
  return (
    <div className="container mx-auto p-4 bg-white rounded-2xl">
      <div className="flex flex-col">
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold text-pink-800 mb-4">{titolo}</h1>
          <p className="mb-6 text-black-700">{sottotitolo}</p>
          <h2 className="font-semibold text-pink-800 ">Contatti gruppi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-6 flex gap-5 text-center items-center">
              <i className="fas fa-phone-alt text-3xl text-gray-600">
                <img src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Faod.png&w=32&q=75" />
              </i>
              <p className="ml-10 text-lg text-gray-700">{numerogruppi}</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex text-center items-center">
              <i className="fas fa-at text-3xl text-gray-600">
                <img src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Falternate_email.png&w=48&q=75" />
              </i>
              <p className="ml-10 text-lg text-gray-700">{emailgruppi}</p>
            </div>
          </div>
          <h2 className="font-semibold text-pink-800">
            Contatti Individuali / Escursioni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="bg-white rounded-lg p-6 flex gap-5 text-center items-center">
              <i className="fas fa-phone-alt text-3xl text-gray-600">
                <img src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Faod.png&w=32&q=75" />
              </i>
              <p className="ml-10 text-lg text-gray-700">{numeroindividuali}</p>
            </div>
            <div className="bg-white rounded-lg p-6 flex gap-5 text-center items-center">
              <i className="fas fa-at text-3xl text-gray-600">
                <img src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Falternate_email.png&w=48&q=75" />
              </i>
              <p className="ml-10 text-lg text-gray-700">{emailindividuali}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <img src={immagine} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

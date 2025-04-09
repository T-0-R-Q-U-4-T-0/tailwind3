import Head from "next/head";
import React from "react";

const Contatti = ({
  immagine = "https://storage.googleapis.com/a1aa/image/fjIq3dElHe4u3LzHhTKmF8FyRS-bNtgEcJgu3nY_Ris.jpg",
  titolo = "Contattaci",
  sottotitolo = "Scrivici per problemi con la prenotazione o se vuoi chiederci maggiori informazioni riguardo i tour.",
  numerogruppi = "+39 041 530 23 63",
  emailgruppi = "api@dogedivenezia.it",
  numeroindividuali = "+39 041 530 23 63",
  emailindividuali = "api@dogedivenezia.it",
}) => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-2xl">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">
            {titolo}
          </h1>
          <p className="mb-6 text-gray-600">
            {sottotitolo}
          </p>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Contatti gruppi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg transition-all hover:text-primary-500 shadow-custom hover:shadow-custom-xl rounded-4xl lg:p-12 p-6 flex flex-col gap-5 items-center">
              <i className="fas fa-phone-alt text-3xl text-gray-600">
                <img src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Faod.png&w=32&q=75" />
              </i>
              <p className="ml-10 text-lg text-gray-700">{numerogruppi}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg transition-all hover:text-primary-500 shadow-custom hover:shadow-custom-xl rounded-4xl lg:p-12 p-6 flex flex-col gap-5 items-center">
            <i className="fas fa-at text-3xl text-gray-600">
                <img
                  src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Falternate_email.png&w=48&q=75"
                />
              </i>
              <p className="ml-10 text-lg text-gray-700">{emailgruppi}</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Contatti Individuali / Escursioni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div className="bg-white shadow-lg rounded-lg transition-all hover:text-primary-500 shadow-custom hover:shadow-custom-xl rounded-4xl lg:p-12 p-6 flex flex-col gap-5 items-center">
            <i className="fas fa-phone-alt text-3xl text-gray-600">
                <img src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Faod.png&w=32&q=75" />
              </i>
              <p className="ml-10 text-lg text-gray-700">{numeroindividuali}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg transition-all hover:text-primary-500 shadow-custom hover:shadow-custom-xl rounded-4xl lg:p-12 p-6 flex flex-col gap-5 items-center">
              <i className="fas fa-at text-3xl text-gray-600">
                <img
                  src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Falternate_email.png&w=48&q=75"
                />
              </i>
              <p className="ml-10 text-lg text-gray-700">{emailindividuali}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <img
            src= {immagine}
            alt="Map showing the location of Venice, Italy"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Contatti;



import React from "react";

const CardFeatured = ({
  immagine = "📞",
  titolo = "Prenotazione Istantanea",
  descrizione = "Prenota il tuo tour a Venezia in pochi click, senza attese.",
}) => {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        
          <title>Prenotazione Istantanea</title>
          <meta name="description" content="Prenota il tuo tour a Venezia in pochi click, senza attese." />
          <link rel="icon" href="/favicon.ico" />
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-xs mx-auto">
          <div className="mb-6">
          <h1 className='text-8xl'>{immagine}</h1>
          </div>
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            {titolo}
          </h2>
          <p className="text-gray-700">
            {descrizione}
          </p>
        </div>
      </div>
    );
  }

  export default CardFeatured;
import React from "react";
import Image from "next/image";

const CardFeatured = ({
  immagine = "☏",
  titolo = "Prenotazione Istantanea",
  descrizione = "Prenota il tuo tour a Venezia in pochi click, senza attese.",
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <title>Prenotazione Istantanea</title>
      <meta
        name="description"
        content="Prenota il tuo tour a Venezia in pochi click, senza attese."
      />
      <div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-xs mx-auto">
        <div className="mb-6">
          <h1 className="text-8xl">{immagine}</h1>
        </div>
        <h2 className="font-semibold text-pink-800 mb-2">{titolo}</h2>
        <p className="text-black-600">{descrizione}</p>
      </div>
    </div>
  );
};

export default CardFeatured;

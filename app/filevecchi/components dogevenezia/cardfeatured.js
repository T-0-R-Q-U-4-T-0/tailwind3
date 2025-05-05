import React from "react";


export default function CardFeatured({
  immagine,
  titolo,
  descrizione,
}) {
  return (
      <div>
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



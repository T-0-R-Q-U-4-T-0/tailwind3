import React from "react";

export default function Hero({
  titolo,
  sottotitolo,
  immagine,
}) {
  return (
    <div className="relative rounded-lg">
      <img
        src={immagine}
        width={584}
        height={1482}
        className="w-full h-auto opacity-50"
      />
      <div className="absolute bottom-4 left-4 bottom-16 left-20 text-white">
        <h2 className="text-lg md:text-4xl font-bold">{titolo}</h2>
        <p className="text-sm md:text-3xl">{sottotitolo}</p>
      </div>
    </div>
  );
}

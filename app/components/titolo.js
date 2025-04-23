import React from "react";

export default function Titolo({
  sopratitolo,
  sottotitolo1,
  }) {
  return (
    <div className="items-center">
      <div className="px-24 bg-white p-10">
        <h2 className="text-black">{sopratitolo}</h2>
        <h1 className="text-4xl text-black mt-2">
          Nessuno ti mostrerà <span className="text-pink-800">Venezia</span> come noi
        </h1>
        <p className="text-black mt-4">
          {sottotitolo1} 
        </p>
      </div>
    </div>
  );
}

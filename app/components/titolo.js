import React from "react";

const Titolo = ({
  sopratitolo = "Escursioni Giornaliere",
  sottotitolo1 = "Lasciati trasportare da una brezza marina mentre ammiri i palazzi storici, i ponti iconici e i tesori nascosti della città. Vivi l'emozione di vedere",
  sottotitolo2 = "dal suo elemento più autentico: l'acqua."
}) => {
  return (
    <div className="flex items-center min-h-screen">
      
        <title>Escursioni Giornaliere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <div className="px-24 bg-white rounded-lg p-10">
        <h2 className="text-gray-700 text-lg">{sopratitolo}</h2>
        <h1 className="text-4xl text-gray-800 mt-2">
          Nessuno ti mostrerà <span className="text-purple-700 font-bold">Venezia</span> come noi
        </h1>
        <p className="text-gray-600 mt-4">
          {sottotitolo1} <span className="text-purple-700">Venezia</span> {sottotitolo2}
        </p>
      </div>
    </div>
  );
}

export default Titolo;
import React from "react";

const Titolo = ({
  sopratitolo = "Escursioni Giornaliere",
  sottotitolo1 = "Lasciati trasportare da una brezza marina mentre ammiri i palazzi storici, i ponti iconici e i tesori nascosti della città. Vivi l'emozione di vedere Venezia dal suo elemento più autentico: l'acqua.",
  }) => {
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

export default Titolo;
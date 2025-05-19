import React from "react";

export default function InEvidenza({
  titolo,
  sottotitolo,
  testobot,
  immagineSrc,
  immagineAlt,
}) {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <div className="relative w-[30%] h-[70vh] rounded-2xl overflow-hidden shadow-xl bg-black">
        
        <div
          role="img"
          aria-label={immagineAlt}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${immagineSrc})` }}
        ></div>

        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        
        <div className="relative z-10 h-full flex items-end p-8">
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-2">{titolo}</h2>
            <h3 className="text-2xl font-semibold mb-6">{sottotitolo}</h3>
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
              {testobot}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



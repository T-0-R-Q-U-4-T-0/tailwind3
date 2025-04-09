import React from "react";

const Hero = ({
  titolo = "Escursioni Giornaliere a Venezia,",
  sottotitolo = "un incanto sospeso sull’acqua.",
  immagine = "./images/doganadivenezia.png",
}) => {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-lg m-5 md:m-20">
        <img
          src= {immagine}
          alt="Vista di Venezia"
          width={584}
          height={1482}
          className="w-full h-auto opacity-70"
        />
        <div className="absolute bottom-4 left-4 md:bottom-16 md:left-20 p-4 md:p-6 text-white rounded-lg">
          <h2 className="text-lg md:text-4xl font-bold">{titolo}</h2>
          <p className="text-sm md:text-3xl">{sottotitolo}</p>
        </div>
      </div>
    );
  }

  export default Hero;
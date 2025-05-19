import React from "react";

  const Titolo = ({  titolo, descrizione, scarica 
  }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#5B6CE0] to-[#0B1A6B] rounded-lg m-4">
        <div className="relative w-full max-w-4xl p-8 rounded-lg overflow-hidden">
          <img
            alt="Blurred starry space background with small glowing stars scattered"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg -z-10"
            decoding="async"
            height="400"
            loading="lazy"
            src="https://storage.googleapis.com/a1aa/image/e0cadfed-22c4-4e49-e28d-0a83192983fb.jpg"
            width="600"
          />
          <div className="text-center">
            <h1 className="text-white font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
              {titolo}
              <br />
              {descrizione}
            </h1>
            <button
              className="mt-10 inline-flex items-center bg-white text-black text-base font-normal rounded-lg px-8 py-4 hover:bg-gray-100 transition"
              type="button"
            >
              <i className="fas fa-download mr-3 text-lg"></i>
              {scarica}
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Titolo;
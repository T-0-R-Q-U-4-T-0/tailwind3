import Head from "next/head"
import React from "react";

export default function Card({
  immagine,
  titolo,
  descrizione,
}) {
    return(
        <div className=" flex items-center justify-center min-h-screen">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <img
          src={immagine}
          alt="Elegant wedding table setup with flowers and glassware"
          className="w-full h-full object-cover"
          width="800"
          height="600"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-8">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            {titolo}
          </h1>
          <p className="text-white text-lg md:text-xl mb-4">
            {descrizione}</p>
        </div>
      </div>
    </div>
    )
}


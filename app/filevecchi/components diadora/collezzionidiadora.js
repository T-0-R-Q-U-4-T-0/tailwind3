import Head from "next/head"
import React from "react";

export default function Collezzioni ({
titolo, 
uomo,
donna,
sport,
heritage,
sportswear,
}) {

    return(
      <div className="text-center py-12 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{titolo}</h1>
        <div className="flex flex-wrap justify-center gap-4">
         
            <button
              className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              {uomo}
            </button>
            <button
              className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              {donna}
            </button>
            <button
              className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              {sport}
            </button>
            <button
              className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              {heritage}
            </button>
            <button
              className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              {sportswear}
            </button>
        </div>
      </div>
    )
  }
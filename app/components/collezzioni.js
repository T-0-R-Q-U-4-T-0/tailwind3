import Head from "next/head"
import React from "react";

export default function Collezzioni ({
titolo, 
lalo,
babo,
}) {

    return(
      <div className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{titolo}</h2>
        <div className="flex flex-wrap justify-center gap-4">
        {lalo}
            <button
              className="bg-gray-800 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              {babo}
            </button>
          
        </div>
      </div>
    )
  }
import Head from "next/head"
import React from "react";

export default function Card({
  immagine,
  titolo,
  prezzo,
  descrizione,
  variants,
  badgeText,
}) {
  return (
    <div className="mx-auto w-[300px] bg-white rounded-2xl shadow-md overflow-hidden mt-10">
      <div className="w-full h-[350px] bg-gray-100 flex items-center justify-center">
      <img src={immagine} />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-base font-bold text-gray-800">{titolo}</h3>
        <p className="text-sm font-semibold text-gray-700">{prezzo}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{descrizione}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-500">
            {variants.length} Colori
          </span>
          {badgeText && (
            <span className="text-xs font-bold text-[#A28639]">
              {badgeText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

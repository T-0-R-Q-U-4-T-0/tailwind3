import React from 'react';

export default function CookieBanner({
  titolo,
  descrizione,
  policy ,
  accettatutto,
  accettanecessari ,
  preferenze,
  cookie,
}) {
  return (
    <div className="items-center">
      <div className="bg-white p-10 flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl">{titolo}</h2>
          <p className="text-sm mt-2">{descrizione}</p>
          <a className="text-pink-800" href="#">
            {policy}
          </a>
        </div>
        <div className="flex flex-col gap-4 ml-5">
          <button className="text-pink-800">
            {cookie}
          </button>
          <button className="bg-pink-800 text-white px-20 py-3">
            {accettatutto}
          </button>
          <button className="bg-pink-800 text-white px-20 py-3">
            {accettanecessari}
          </button>
          <button className="text-pink-800">
            {preferenze}
          </button>
        </div>
      </div>
    </div>
  );
}

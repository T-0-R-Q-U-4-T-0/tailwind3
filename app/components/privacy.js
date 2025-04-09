import React from 'react';

const CookieBanner = ({
  title = "Questo sito web raccoglie alcuni dati personali dei visitatori e utenti",
  description = "Con il tuo consenso, noi e i nostri partner utilizziamo i cookie e tecnologie simili per archiviare, accedere ed elaborare i dati personali come, ad esempio, la visita al sito web o la personalizzazione degli annunci.",
  policyText = "Visualizza la Cookie Policy Completa",
  acceptAllText = "ACCETTA TUTTO",
  acceptNecessaryText = "ACCETTA NECESSARI",
  preferencesText = "Preferenze GDPR",
  Trash = "Rifiuta cookie non necessari X",
  onAcceptAll,
  onAcceptNecessary,
  onOpenPreferences,
}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-6 md:p-10 border-t flex flex-col md:flex-row md:items-center justify-center">
      <div className="max-w-2xl">
        <h2 className="font-bold text-2xl text-black">{title}</h2>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <a href="#" className="text-purple-600 font-semibold mt-2 inline-block">
          {policyText}
        </a>
      </div>
      <div className="flex flex-col gap-4 mt-4 md:mt-0 md:ml-0 lg:ml-5">
        <button
        className="text-gray-500 ml-auto"
        >
        {Trash}
        </button>
        <button
          className="bg-purple-600 text-white px-20 py-3 hover:bg-purple-800"
          onClick={onAcceptAll}
        >
          {acceptAllText}
        </button>
        <button
          className="bg-purple-600 text-white px-20 py-3 hover:bg-purple-600"
          onClick={onAcceptNecessary}
        >
          {acceptNecessaryText}
        </button>
        <button
          className="text-purple-700"
          onClick={onOpenPreferences}
        >
          {preferencesText}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
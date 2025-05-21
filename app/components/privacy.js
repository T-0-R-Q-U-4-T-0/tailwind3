const Privacy = ({
    titolo,
    paragrafo,
    rifiuta,
    cookie,
    
  
  }) => {
      return (
      <div
        className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 z-50"
        role="region"
        aria-label="Privacy"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-700 mb-1">{titolo}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {paragrafo}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              className="bg-gray-900 text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-gray-800 focus:outline-none"
            >
             {rifiuta}
            </button>
            <button
              type="button"
              className="bg-gray-900 text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-gray-800 focus:outline-none"
            >
            {cookie}
            </button>
            <button
              type="button"
              aria-label="Chiudi il banner dei cookie"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
          
            </button>
          </div>
        </div>
      </div>
      )
  };
  export default Privacy;
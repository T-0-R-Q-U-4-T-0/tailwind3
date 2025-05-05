import React from "react";

export default  function Footer({
  immagine,
  doge,
  gruppi,
  individuali,
  follow,
  pagamento,
  footer1,
  footer2,
  luogo1,
  luogo2,
  tel1,
  fax,
  email1,
  tel2,
  email2,
}) {
  return (
    <div className="">
      <meta name="description" content="Il Doge di Venezia" />
      <link rel="icon" href="/favicon.ico" />

      <footer className="bg-white pt-8">
        <div className="w-full flex justify-center mt-6 mb-12">
          <a href="">
            <img
              src= {immagine}
              className="w-28 "
            />
          </a>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-pink-800">{doge}</h2>
            <p className="text-gray-800">
            {luogo1}
            <br/>
            {luogo2}
            </p>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-pink-800 pl-10">
            {gruppi}
            </h2>
            <p className="text-gray-800 pl-10">
              {tel1}
              <br />
              {fax}
              <br />
              {email1}
            </p>
          </div>
          <div className="text-center mb-4 md:mb-0"></div>

          <div className="text-center mb-4 md:mb-0 pl-10">
            <h2 className="text-pink-800">
            {individuali}
            </h2>
            <p className="text-gray-800">
            {tel2}
              <br />
            {email2}
            </p>
          </div>
          <div className="text-center mb-4 md:mb-0 pl-10">
            <h2 className="text-pink-800">{follow}</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                className="text-black"
              >
                <svg
                  class="w-6 h-6 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                   d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  />
                </svg>
              </a>
              <a
                className="text-black "
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                   d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  />
                </svg>
              </a>
              <a
                className="text-black"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path 
                   d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center pl-10 ">
            <h2 className="text-pink-800">
            {pagamento}
            </h2>
            <div className="flex justify-center md:justify-start space-x-2">
              <img
                src="https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Fcarte.png&w=1920&q=75"
                width="200"
                height="120"
              />
            </div>
          </div>
        </div>
        <div className="bg-pink-800 text-white text-center py-2 mt-8">
          <p>
          {footer1}
          </p>
          <p>
          {footer2}
            </p>
        </div>
      </footer>
    </div>
  );
}



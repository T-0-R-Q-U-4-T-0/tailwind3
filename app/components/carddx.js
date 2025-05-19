import React from "react";


  const Card2 = ({  titolo, descrizione 
  }) => {
    return(
      <div className=" min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1a2a8c] via-[#2a3dbb] to-[#0f1e6e] p-6">
        <div className=" p-10 rounded-4xl relative max-w-7xl w-full overflow-hidden flex flex-col md:flex-row items-center md:items-stretch bg-gradient-to-r from-[#5f6acb] to-[#3a4291] shadow-[inset_0_0_80px_#3a4291]">
          <div className='bg-pink-600 pt-5 pb-5 pl-20 pr-20 rounded-4xl'>
          <img
            alt=""
            className=""
            height="200"
            src="/images/discord1.png"
            width="240"
          />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 text-white max-w-md md:max-w-lg rounded-r-3xl rounded-bl-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              {titolo}
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed font-normal max-w-md">
             {descrizione}
            </p>
          </div>
        
        </div>
      </div>
    );
  }
  export default Card2;
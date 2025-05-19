import React from "react";

const Card = ({ titolo, descrizione }) => {
  return (
    <div className="m-4 bg-gradient-to-b from-[#2a3a9d] via-[#2a3a9d]/90 to-[#0a0a4a] rounded-3xl min-h-[320px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-[96px] bg-[#4f5ab0] p-6 max-w-[1200px] w-full gap-6 md:flex-row md:items-stretch md:p-12 md:gap-12">
        <div className="flex flex-col max-w-[320px] md:max-w-[360px] items-center md:items-start">
          <h2 className="font-poppins font-extrabold text-white text-[24px] leading-[30px] text-center md:text-[32px] md:leading-[38px] md:text-left">
            {titolo}
          </h2>
          <p className="mt-4 text-white text-center text-[14px] leading-[20px] font-normal md:text-left md:text-[16px] md:leading-[24px]">
            {descrizione}
          </p>
        </div>
        <div className="flex flex-col bg-gradient-to-b from-[#0f3a1f] to-[#5ac87a] rounded-[48px] p-6 w-full max-w-full md:max-w-[600px]">
          <div className="rounded-[24px] overflow-hidden w-full">
            <img
              className="w-full h-auto object-cover"
              height="320"
              src="https://www.unicusano.it/blog/wp-content/uploads/2024/01/Gaming-disorder.jpg"
              width="600"
            />
          </div>
          <div className="flex justify-between mt-6 gap-4">
            <div className="flex items-center justify-center bg-[#8a7bd1] rounded-xl flex-1 min-w-[80px] h-[80px] relative">
              <img
                alt="Avatar of a cartoon cat wearing a blue hat"
                className="rounded-full w-10 h-10"
                src="https://storage.googleapis.com/a1aa/image/661a6334-ee13-452d-5cb3-ecf667bcde69.jpg"
              />
              <span className="absolute bottom-1 left-1 bg-[#6a5f9e] text-white text-[10px] px-2 py-0.5 rounded-lg select-none">
                Rose
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#a9b9e8] rounded-xl flex-1 min-w-[80px] h-[80px] relative">
              <img
                alt="Avatar of a cartoon girl with blue hair and pink background"
                className="rounded-full w-10 h-10"
                src="https://storage.googleapis.com/a1aa/image/6317ee12-aaf3-4f9b-7568-a42237b1d8c8.jpg"
              />
              <span className="absolute bottom-1 left-1 bg-[#8a8fb7] text-white text-[10px] px-2 py-0.5 rounded-lg select-none">
                olive
              </span>
            </div>
            <div className="relative flex-1 min-w-[100px] h-[80px] rounded-xl overflow-hidden cursor-pointer">
              <img
                alt="Thumbnail of a game stream showing a character in a desert environment with fire and ruins"
                className="w-full h-full object-cover"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/35d87e22-da7f-4433-8ae6-9cef42cc3796.jpg"
                width="140"
              />
              <span className="absolute bottom-1 left-1 bg-[#8a8fb7] text-white text-[10px] px-2 py-0.5 rounded-lg select-none">
                z-lot
              </span>
              <div className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-bold px-1 py-0.5 rounded-full select-none">
                LIVE
              </div>
              <div className="absolute top-1 right-7 w-4 h-4 bg-white rounded-full rotate-45 border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
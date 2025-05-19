const Landinghero = ({  titolo, gruppo, supera, iper, divertente, descrizione, mac, browser, discord, scarica, nitro, scopri, sicurezza, missioni, assistenza, sviluppatori, blog, lavora,apri
}) => {
  return (
    <div className="bg-[#0B0E23] min-h-screen flex items-center justify-center p-4">
      <div
        className="max-w-[1440px] w-full rounded-lg overflow-hidden relative"
        style={{ background: 'radial-gradient(ellipse at bottom left, #1e2a7a 0%, #0b0e23 80%)' }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-16 py-10 md:py-16 gap-10 md:gap-0">
          {/* Left text content */}
          <div className="md:w-1/2 flex flex-col items-start text-white">
            <h1
              className="font-extrabold text-[2.5rem] leading-[1.1] md:text-[3.5rem] md:leading-[1.1] max-w-[320px] md:max-w-[400px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {titolo}
              <br/>
              {gruppo}
              <br/>
              {supera}
              <br/>
              {iper}
              <br/>
              {divertente}
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-[320px] md:max-w-[400px] font-normal leading-relaxed">
              {descrizione}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-[400px]">
              <button className="flex items-center justify-center gap-3 bg-white text-black rounded-lg py-3 px-6 font-normal text-base w-full sm:w-auto">
                <i className="fas fa-download text-lg"></i>
                {mac}
              </button>
              <button className="bg-[#5865F2] hover:bg-[#4752c4] transition-colors rounded-lg py-3 px-6 text-white font-normal text-base w-full sm:w-auto">
                {browser}
              </button>
            </div>
          </div>
          {/* Right image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              alt="Illustration of a large computer monitor showing Discord chat interface with animated characters around it and a smartphone with Discord video call, all on a dark blue starry background"
              className="w-full max-w-[600px] object-contain"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/e05dd5a5-5c72-477f-8cdf-e22f63fa1e25.jpg"
              width="600"
            />
          </div>
        </div>
        {/* Top navigation bar */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-4">
          <div className="flex items-center gap-4">
            <img
              alt="Discord logo white icon"
              className="w-8 h-8"
              height="32"
              src="https://storage.googleapis.com/a1aa/image/3aa63902-1622-4179-0e88-00216aa3f288.jpg"
              width="32"
            />
            <span
              className="text-white font-extrabold text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
             {discord}
            </span>
          </div>
          <ul
            className="hidden md:flex items-center gap-8 text-white text-sm font-normal"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            <li>
              <a className="hover:underline" href="#">
                {scarica}
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                {nitro}
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                {scopri}
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a className="hover:underline flex items-center gap-1" href="#">
               {sicurezza}
                <i className="fas fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a className="hover:underline flex items-center gap-1" href="#">
                {missioni}
                <i className="fas fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a className="hover:underline flex items-center gap-1" href="#">
               {assistenza}
                <i className="fas fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a className="hover:underline flex items-center gap-1" href="#">
               {blog}
                <i className="fas fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a className="hover:underline flex items-center gap-1" href="#">
                {sviluppatori}
                <i className="fas fa-chevron-down text-xs"></i>
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                {lavora}
              </a>
            </li>
          </ul>
          <button className="hidden md:block bg-white text-black font-semibold rounded-full py-2 px-5 text-sm hover:bg-gray-200 transition">
           {apri}
          </button>
        </nav>
      </div>
    </div>
  );
}
export default Landinghero;
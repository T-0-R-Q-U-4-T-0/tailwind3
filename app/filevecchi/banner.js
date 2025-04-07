
export default function Banner() {
    return (
      /* container della card*/
      <div 
        className="flex flex-col md:flex-row p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:space-y-0 md:space-x-10 md:m-0 md:p-16 w-2/3 bg-no-repeat"
        style={{ backgroundImage: "url('images/sfondo.jpg')", backgroundSize: '', backgroundPosition: 'center' }} 
      >
        {/* immagine*/}
        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
          <p className="text-1xl font-bold">Upcoming Events</p>
          <p className="text-3xl font-bold">Tech Summit: Shaping Tomorrow</p>
          <p className="text-1xl font-light text-gray-400">
            Prepare to be part of dynamic conversation that will redefine the
            boundaries
          </p>
          <div className="flex md:justify-start">
            {" "}
            <button className="py-3 px-5 space-x-3 border-2 border-black rounded-xl">
              <span>JOIN NOW</span>
            </button>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
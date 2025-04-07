export default function Home() {
  return (
    <>
     <div class='flex items-center justify-center h-screen  w-[1000px]'>
        <div class='bg-zinc-100 p-2 mx-6 rounded-2xl'
      style={{ backgroundImage: "url('https://static.vecteezy.com/ti/vettori-gratis/p1/2909372-lusso-astratto-banner-sfondo-vettore-moderno-forme-geometriche-e-d-oro-line-art-wallpaper-design-per-sito-web-stampe-copertina-sfondo-arte-parete-e-decorazione-parete-vettoriale.jpg')" }}
      >

      
      <div class="text-center p-6">
        <div class="inline-block bg-white rounded-lg px-4 py-1 mb-4">
          <span class="text-sm font-medium text-gray-800 ">
            Exciting News! Introducing our latest innovation
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get ready to experience a new level of {" "}
          <span class="text-pink-500">performance</span> and {''}
          <span class="text-pink-500">functionality</span>
        </h1>
        <p class="text-black mb-6">
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </p>
        <div class="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="email"
            className="border border-gray-300 rounded px-4 py-2 w-64"
          />
          <button class="bg-black text-pink-500  px-6 py-2 font-medium hover:bg-opacity-90 shadow-sm hover:shadow-lg border rounded-2xl transition hover:translate-y-0.5 duration-150">
            GET STARTED
          </button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}


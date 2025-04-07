const ProductPage = () => {
    return (
      <div class="bg-white py-16 flex items-center justify-center">
        <div class="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* FOTO1 */}
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvwa9J0JJrDmDyUlMl83nAAXyMQNoZ7XPOw&s"
              alt="Linen Suit"
              class="rounded-lg shadow-lg w-full mb-4"
            />
            <h2 class="text-2xl font-semibold text-gray-900">Linen Suit</h2>
            <p class="text-xl text-gray-800 font-semibold mt-2">$1</p>
            <p class="text-gray-600 mt-4">
              Ciao, compra questo prodotto di alta qualità progettato per offrirti eleganza e comfort.
            </p>
            
            <div class="flex items-center mt-4">
              <span class="text-black text-2xl">★★★★☆</span>
              <span class="ml-2 text-gray-700">4.0/5 (100 reviews)</span>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-800 mt-6">Colore</h3>
            <div class="flex gap-3 mt-2">
              <button class="w-6 h-6 bg-gray-700 rounded-full border-2 border-gray-300"></button>
              <button class="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></button>
              <button class="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
            </div>
            
            <button class="mt-6 bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800">
              AGGIUNGI AL CARRELLO
            </button>
          </div>
  
          {/* FOTO2 */}
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <img
              src="https://www.decorspace.it/cdn/shop/products/344249_1.jpg?v=1585326439&width=1600"
              alt="Tweed Suit"
              class="rounded-lg shadow-lg w-full mb-4"
            />
            <h2 class="text-2xl font-semibold text-gray-900">Tweed Suit</h2>
            <p class="text-xl text-gray-800 font-semibold mt-2">$2</p>
            <p class="text-gray-600 mt-4">
              Un capo d'alta moda per chi cerca eleganza con un tocco rustico.
            </p>
            
            <div class="flex items-center mt-4">
              <span class="text-gray-500 text-2xl">★★★★☆</span>
              <span class="ml-2 text-gray-700">4.0/5 (100 reviews)</span>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-800 mt-6">Colore</h3>
            <div class="flex gap-3 mt-2">
              <button class="w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-300"></button>
              <button class="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></button>
              <button class="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
            </div>
            
            
            <button class="mt-6 bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800">
              AGGIUNGI AL CARRELLO
            </button>
          </div>
  
          {/* FOTO3 */}
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <img
              src="https://media.adeo.com/mkp/a6aadd16113b0aa29d1c0a408df51fdb/media.jpg?width=3000&height=3000&format=jpg&quality=80&fit=bounds"
              alt="Premium Suit"
              class="rounded-lg shadow-lg w-full mb-4"
            />
            <h2 class="text-2xl font-semibold text-gray-900">Premium Suit</h2>
            <p class="text-xl text-gray-800 font-semibold mt-2">3</p>
            <p class="text-gray-600 mt-4">
              Un abito di alta classe, perfetto per occasioni eleganti.
            </p>
            
            
            <div class="flex items-center mt-4">
              <span class="text-black text-2xl">★★★★☆</span>
              <span class="ml-2 text-gray-700">4.0/5 (100 reviews)</span>
            </div>
            
            
            <h3 class="text-lg font-semibold text-gray-800 mt-6">Colore</h3>
            <div class="flex gap-3 mt-2">
              <button class="w-6 h-6 bg-gray-500 rounded-full border-2 border-gray-300"></button>
              <button class="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></button>
              <button class="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
            </div>
            
            
            <button class="mt-6 bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800">
              AGGIUNGI AL CARRELLO
            </button>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default ProductPage;
  
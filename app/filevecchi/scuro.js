export default function Product() {
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-5">
  
        <div class="bg-gray-100 rounded-lg relative">
          <img 
            src="https://static.tecnichenuove.it/agricommerciogardencenter/2018/05/Helix_aspersa.jpg" 
            alt="Search and Discovery" 
            class="w-full h-full object-cover rounded-lg"
          />
          <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div class="absolute bottom-4 left-4 text-white text-xl font-bold m-5">
           Lumache di mare
          </div>
          <div class="absolute bottom-0 left-4 text-white text-sm mb-2">
            Buone crude
          </div>
        </div>
        
        <div class="bg-gray-100 rounded-lg relative">
          <img 
            src="https://mangialocale.com/wp-content/uploads/2023/12/la-lumaca-bianca_lumache-vive-helix-aspersa_202312070909.jpg" 
            alt="Lumaca" 
            class="w-full h-auto object-cover rounded-lg"
          />
          <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div class="absolute bottom-4 left-4 text-white text-xl font-bold m-5">
            Lumaca
          </div>
          <div class="absolute bottom-0 left-4 text-white text-sm mb-2">
           Allevate a terra
          </div>
        </div>
      
        <div class="bg-gray-100 rounded-lg relative">
          <img 
            src="https://lumaca-bio.it/wp-content/uploads/2020/05/ricetta-lumache.jpg" 
            alt="Chiocciola" 
            class="w-full h-full object-cover rounded-lg"
          />
          <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div class="absolute bottom-4 left-4 text-white text-xl font-bold m-5">
           Chiocciola
          </div>
          <div class="absolute bottom-0 left-4 text-white text-sm mb-2">
            Non commestibile
          </div>
        </div>
      
      </div>
      

    );
  }
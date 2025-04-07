export default function Page() {
    return (
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 ">

          <div className=" text-black rounded-2xl shadow-lg p-8 w-80 min-h-[24rem]">
          
            <div className="mt-4">
            <p className="mt-2">free</p>
              <span className="text-4xl ">$1</span>
             
            </div>
           
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Complete documention
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Working materials in sketch
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> integration help
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> 40GB cloud storage
              </li>
             
            </ul>
            <button className="mt-6 w-full bg-black text-white rounded-xl">
            Get started
            </button>
          </div>
 
          
          <div className="bg-white text-black rounded-2xl shadow-xl p-8 w-80 min-h-[24rem] ">
            
            <div className=" mt-4">
            <p className=" mt-2">free</p>
              <span className="text-4xl ">$2</span>
            </div>
           
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Complete documention
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Working materials in sketch
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> integration help
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> 40GB cloud storage
              </li>
              
            </ul>
            <button className="mt-6 w-full bg-black text-white  rounded-xl">
            Get started
            </button>
          </div>
 
          
          <div className="bg-white text-black rounded-2xl shadow-2xl p-8 w-80 min-h-[24rem]">
            <div className="mt-4">
            <p className=" mt-2">Free</p>
              <span className="text-4xl ">$3</span>
             
            </div>
           
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Complete documention
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Working materials in sketch
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> integration help
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> 40GB cloud storage
              </li>
              
            </ul>
            <button className="mt-6 w-full bg-black text-white rounded-xl">
              Get started
            </button>
          </div>
        </div>
      </div>
    );
}

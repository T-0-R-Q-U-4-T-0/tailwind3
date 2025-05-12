import Image from "next/image";

export default function InEvidenza({
  titolo,
  sottotitolo,
  testobottone,
  bottoneconlink,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className="flex justify-center items-center p-4 my-8">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="text-white p-8 md:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-2">{titolo}</h2>
            <h3 className="text-4xl font-bold mb-8">{sottotitolo}</h3>
            <a href={bottoneconlink} className="inline-block">
              <button
                className="bg-white text-black font-semibold py-3 px-8 rounded-lg whitespace-nowrap
 hover:bg-gray-200 transition-colors"
              >
                {testobottone}
              </button>
            </a>
          </div>
          <div className="md:w-2/3">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

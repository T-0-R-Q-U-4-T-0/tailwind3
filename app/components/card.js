import Image from "next/image";

export default function Card({
  imageSrc,
  title,
  price,
  description,
  variants,
  badgeText,
}) {
  return (
    <div className="mx-auto w-[300px] bg-white rounded-2xl shadow-md overflow-hidden mt-10">
      <div className="w-full h-[350px] bg-gray-100 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={240}
          height={180}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-base font-bold text-gray-800">{title}</h3>
        <p className="text-sm font-semibold text-gray-700">{price}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-500">
            {variants.length} Colori
          </span>
          {badgeText && (
            <span className="text-xs font-bold text-[#A28639]">
              {badgeText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

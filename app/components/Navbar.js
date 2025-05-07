import React from "react";

export default function Navbar({
  professionalEmail,
  logoSrc,
  menuItems,
}) {
  return (
    <header className="w-full">
      <div className="bg-black text-white font-bold py-2 flex justify-center px-6">
      {professionalEmail}
      </div>
      <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <img src={logoSrc} className="h-20 w-21" />
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-black font-bold">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

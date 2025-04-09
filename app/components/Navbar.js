import React from "react";

const Navbar = ({
  languages = ["IT /", "EN /", "DE /", "FR /", "ES"],
  professionalEmail = "info@dogedivenezia.it",
  professionalPhone = "+39 041 530 23 63",
  excursionEmail = "api@dogedivenezia.it",
  excursionPhone = "+39 041 315 63 02",
  logoSrc = "https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75",
  menuItems = [
    { name: "Home Page", href: "#", active: true },
    { name: "Escursioni Giornaliere", href: "#" },
    { name: "Servizi Professionali", href: "#" },
    { name: "Chi Siamo", href: "#" },
    { name: "La Flotta", href: "#" },
    { name: "News", href: "#" },
  ],
}) => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-purple-700 text-white text-sm py-2 flex justify-between px-6">
        <div className="space-x-2">
          {languages.map((lang, index) => (
            <span key={index} className="cursor-pointer hover:underline">
              {lang}
            </span>
          ))}
        </div>
        <div className="text-right">
          <span className="mr-4">Servizi Professionali: <a href={`mailto:${professionalEmail}`} className="underline">{professionalEmail}</a> - {professionalPhone}</span>
          <span>Escursioni Giornaliere: <a href={`mailto:${excursionEmail}`} className="underline">{excursionEmail}</a> / {excursionPhone}</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <img src={logoSrc} alt="Logo" className="h-20 w-20" />
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={`text-gray-700 hover:text-purple-700 ${item.active ? "font-bold text-purple-700" : ""}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
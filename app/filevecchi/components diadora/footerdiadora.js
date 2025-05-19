import React from "react";

const Footer = ({
  newsletterTitle,
  newsletterSubtitle,
  socialLinks = [],
  sections = [],
  rating = {},
  paymentImages = [],
  legalLinks = [],
  countryInfo,
  copyright,
}) => {
  return (
    <footer className="bg-white text-gray-900">
      <div className="px-6 py-10 border-b">
        <h2 className="text-2xl font-bold mb-2">{newsletterTitle}</h2>
        <p className="mb-4">{newsletterSubtitle}</p>
        <div className="flex max-w-md">
          <input
            type="email"
            placeholder="Inserisci il tuo indirizzo e-mail"
            className="flex-1 border rounded-full px-4 py-2"
          />
          <button className="ml-2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
            &gt;
          </button>
        </div>
        <div className="flex space-x-4 mt-6">
          {socialLinks.map(({ href, iconClass }, idx) => (
            <a key={idx} href={href}>
              <i className={`${iconClass} text-2xl`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-6 py-10">
        {sections.map(({ title, links }, idx) => (
          <div key={idx}>
            <h3 className="font-bold mb-2">{title}</h3>
            <ul className="space-y-1 text-sm">
              {links.map((link, linkIdx) => (
                <li key={linkIdx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span>{rating.stars}</span>
          <span>{rating.description}</span>
        </div>
        <div className="flex space-x-2">
          {paymentImages.map(({ src, alt }, idx) => (
            <img key={idx} src={src} alt={alt} className="h-4 w-auto" />
          ))}
        </div>
      </div>
      <div className="bg-neutral-900 text-white text-sm px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <p>{copyright}</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {legalLinks.map(({ href, label }, idx) => (
            <a key={idx} href={href}>
              {label}
            </a>
          ))}
          <span>{countryInfo}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

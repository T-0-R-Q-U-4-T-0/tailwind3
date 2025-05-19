export default function Footer({ socialLinks, logo, }) {
  

 

    return (
      <div className="bg-gradient-to-b from-[#2f327d] to-[#4b57d1] rounded-lg p-8">
        <footer className="w-full max-w-[90rem] mx-auto flex flex-col md:flex-row md:justify-between text-white">
          <div className="flex flex-col space-y-8 md:w-1/4">
            <img
              alt="Discord logo white icon on blue gradient background"
              className="w-12 h-12"
              height="48"
              src={logo}
              width="48"
            />
            <div>
              <p className="text-sm text-[#8a8fb9] mb-2">Lingua</p>
              <select
                aria-label="Seleziona lingua"
                className="bg-[#4b57d1]/50 rounded-xl py-3 px-5 w-48 text-white text-sm focus:outline-none"
              >
                <option>Italiano</option>
                <option>English</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
            </div>
            <div>
              <p className="text-sm text-[#8a8fb9] mb-2">Social</p>
              <div className="flex space-x-4 text-white text-xl">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    aria-label={social.label}
                    className="hover:text-[#a3a8f7]"
                    href={social.href}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 mt-12 md:mt-0 md:w-3/4 text-sm">
            {socialLinks.map((section, idx) => (
              <div key={idx}>
                <p className="text-[#8a8fb9] mb-2">{section.title}</p>
                <ul className="space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a className="hover:underline" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
        <div className="w-full overflow-hidden mt-12">
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/67ac9b4644222140ae614b06_Wordmark.svg"
            alt="Wordmark"
          />
        </div>
      </div>
    );
  }
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Collezioni from "./components/collezioni";
import Titolo from "./components/titolo";
import Card from "./components/card";
import Miniature from "./components/miniature";
import Inevidenza from "./components/inevidenza";
import Servizi from "./components/servizi";
import Footer from "./components/footer";

export default function Home() {
    
        const professionalEmail = "info@dogedivenezia.it";
        const professionalPhone = "+39 041 530 23 63";
        const excursionEmail = "api@dogedivenezia.it";
        const excursionPhone = "+39 041 315 63 02";
        const logoSrc = "https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75";
          
        const menuItems = [
          { name: "Home Page", href: "#" },
          { name: "Escursioni Giornaliere", href: "#" },
          { name: "Servizi Professionali", href: "#" },
          { name: "Chi Siamo", href: "#" },
          { name: "La Flotta", href: "#" },
          { name: "News", href: "#" },
        ];
return ( 
    <div>
<Navbar
        professionalEmail={professionalEmail}
        professionalPhone={professionalPhone}
        excursionEmail={excursionEmail}
        excursionPhone={excursionPhone}
        logoSrc={logoSrc}
        menuItems={menuItems}
      />
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
);
}
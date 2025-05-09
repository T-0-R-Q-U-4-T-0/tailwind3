import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Collezzioni from "./components/collezzioni";
import Titolo from "./components/titolo";
import Card from "./components/card";
import Miniature from "./components/miniature";
import Inevidenza from "./components/inevidenza";
import Servizi from "./components/servizi";
import Footer from "./components/footer";

export default function Home() {
    
        const professionalEmail = "RESI GRATUITI ENTRO 30 GIORNI";
        const logoSrc = "https://www.diadora.com/on/demandware.static/Sites-IT-Site/-/default/dw9414c55f/images/diadora-logo-header.svg";
          
        const menuItems = [
          { name: "UOMO", href: "#" },
          { name: "DONNA", href: "#" },
          { name: "BAMBINI", href: "#" },
          { name: "SPORT", href: "#" },
          { name: "HERITAGE", href: "#" },
          { name: "CULTURE", href: "#" },
          { name: "☏", href: "#" },
          { name: "☏", href: "#" },
          { name: "☏", href: "#" },
        ];
return ( 
    <div>
<Navbar
        professionalEmail={professionalEmail}
        logoSrc={logoSrc}
        menuItems={menuItems}
      />
<Hero
     immagine = "https://www.diadora.com/on/demandware.static/-/Library-Sites-DiadoraSportShared/default/dwdf3898b2/images/widget/Hero-Banner/Desktop/20250606_quatorze_running_desktop.jpg"
     descrizione = "RUNNING"
     titolo = "ATOMO STAR - PRINCIPLES OF ITALIAN INNOVATION"   
/>
    
<Collezzioni
     titolo="sasso"
     lalo="trrr"
     babo="brrr"
/>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
);
}
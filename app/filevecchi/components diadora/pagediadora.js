import Navbar from "./Navbardiadora";
import Hero from "./herodiadora";
import Collezzioni from "./collezzionidiadora";
import Titolo from "./titolodiadora";
import Card from "./carddiadora";
import Miniature from "./miniaturediadora";
import Inevidenza from "./inevidenzadiadora";
import Servizi from "./servizidiadora";
import Footer from "./footerdiadora";

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
     titolo="LE NOSTRE COLLEZZIONI"
     uomo="Uomo"
     donna="Donna"
     sport="Sport"
     heritage="Heritage"
     sportswear="Sportswear"
/>
    
<Titolo

tabs={["Novità Sport", "Novità Lifestyle"]}
activeIndex={0}
/>
    
<Card
        immagine="https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dwce513ade/images/hi-res/101.179094_C3447_00_HR.jpg?sw=1920"
        titolo="ATOMO STAR"
        prezzo="€ 190,00"
        descrizione="Scarpa da running Made in Italy – Leggerezza e performance al top"
        variants={["rosso", "oro", "bianco"]}
        badgeText="Novità"
/>   
<Miniature
  title="Le nostre icone"
  scarpe={[
    { name: 'B.560', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dwfeb03999/images/hi-res/501.181246_C0351_00_HR.jpg?sw=1920' },
    { name: 'B.Elite', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw5417ff31/images/hi-res/501.181246_C0641_00_HR.jpg?sw=1920' },
    { name: 'Game', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw11d80402/images/hi-res/501.178745_C0351_00_HR.jpg?sw=1920' },
    { name: 'Tokyo', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw7cc7a99d/images/hi-res/501.179584_C1161_00_HR.jpg?sw=1920' },
    { name: 'Mythos', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw5fb165d3/images/hi-res/501.178300_C5262_00_HR.jpg?sw=1920' },
    { name: 'Cross', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw75442a1f/images/hi-res/501.173073_C0331_00_HR.jpg?sw=1920' },
    { name: 'Equipe', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dwd53e8209/images/hi-res/101.179094_C3513_00_HR.jpg?sw=1920' },
    { name: 'Camaro', image: 'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw4bfe04b6/images/hi-res/501.179296_C1161_00_HR.jpg?sw=1920' },
  ]}
/>
<Inevidenza
        titolo="Run core archivio"
        sottotitolo="2009"
        testobot="Scopri Mythos Star"
        immagineSrc="https://mediastorage.livestory.io/diadora/posts/orig/67adc962528e3da80044fc21.jpg?width=750&format=pjpg&auto=webp&quality=90"
        immagineAlt="Run core archivio 2009"
      />
    <Servizi
  title="I nostri servizi"
  services={[
    {
      icon: "🚚",
      heading: "Spedizione on demand disponibile",
      link: "Scopri il servizio",
    },
    {
      icon: "🎧",
      heading: "Servizio clienti sempre attivo",
      link: "Contattaci",
    },
    {
      icon: "🔁",
      heading: "Resi gratuiti entro 30 giorni",
      link: "Scopri di più",
    },
  ]}
/>
<Footer
  newsletterTitle="Iscriviti alla newsletter"
  newsletterSubtitle="Per te il 15% di sconto sul primo acquisto"
  socialLinks={[
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "#", iconClass: "fab fa-youtube" },
    { href: "#", iconClass: "fab fa-linkedin-in" },
    { href: "#", iconClass: "fas fa-compass" },
  ]}
  sections={[
    {
      title: "Assistenza",
      links: [
        "Dashboard assistenza", "Contattaci", "Il tuo account", "Traccia il tuo ordine",
        "Spedizioni e Consegne", "Resi e Rimborsi", "Pagamenti e Sicurezza",
        "Registrazione e Ordini", "Sicurezza prodotto", "Avvisi e richiami prodotto",
      ],
    },
    {
      title: "Informazioni su",
      links: [
        "Guida alle taglie", "Lavora con noi", "Area Download", "Corporate B2B",
        "Store Locator", "Dichiarazioni di conformità", "Note Informative", "Bilanci di Sostenibilità - Archivio",
      ],
    },
    {
      title: "World",
      links: [
        "Culture", "Diadora World", "Sostenibilità", "Tecnologie", "Running Shoe Finder",
        "Atleti ed Atlete", "Sneaker Agenda",
      ],
    },
    {
      title: "Shortcuts",
      links: [
        "Run Valley", "Il condominio dello sport", "Abbigliamento Termico", "Scarpe Made in Italy",
        "Scarpe Trail Running", "Scarpe Bianche", "Scarpe Nere", "Equipe", "B.560", "Mercury", "Mythos Propulsion 280",
      ],
    },
  ]}
  rating={{
    stars: "⭐️⭐️⭐️⭐️☆",
    description: "4.7/5 Valutazione media Feedaty su 14551 recensioni",
  }}
  

  legalLinks={[
    { href: "#", label: "Privacy" },
    { href: "#", label: "Cookie" },
    { href: "#", label: "Termini e condizioni" },
    { href: "#", label: "Sitemap" },
  ]}
  countryInfo="Italia | IT 🇮🇹"
  copyright="Copyright 2021-2024 Diadora S.p.A. All rights reserved"
/>

    </div>
  );
}
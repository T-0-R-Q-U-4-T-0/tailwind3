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
        image="https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dwce513ade/images/hi-res/101.179094_C3447_00_HR.jpg?sw=1920"
        title="ATOMO STAR"
        price="€ 190,00"
        description="Scarpa da running Made in Italy – Leggerezza e performance al top"
        variants={["rosso", "oro", "bianco"]}
        badgeText="Novità"
/>   
<Miniature
  title="Le nostre icone"
  shoes={[
    { name: 'B.560', image: 'images/b560.png' },
    { name: 'B.Elite', image: 'images/b.elite.png' },
    { name: 'Game', image: 'images/game.png' },
    { name: 'Tokyo', image: 'images/tokyo.png' },
    { name: 'Mythos Propulsion', image: 'images/mythos.png' },
    { name: 'Cross', image: 'images/cross.png' },
    { name: 'Equipe', image: 'images/equipe.png' },
    { name: 'Camaro', image: 'images/camaro.png' },
  ]}
/>
<Inevidenza
        titolo="Run core archivio"
        sottotitolo="2009"
        testobottone="Scopri Mythos Star"
        bottoneconlink="#"
        imageSrc="/images/3scarpe.png"
        imageAlt="Run core archivio 2009"
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
  paymentImages={[
    { src: "images/visa.png", alt: "Visa" },
    { src: "images/mastercard.png", alt: "Mastercard" },
    { src: "images/american_express.png", alt: "American Express" },
    { src: "images/discover.png", alt: "Discover" },
    { src: "images/paypal.png", alt: "PayPal" },
  ]}
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
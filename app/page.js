import Contatti from "./components/contatti";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Privacy from "./components/privacy";
import Titolo from "./components/titolo";

export default function Home() {
  // Definire i valori delle props per il componente Navbar
  const professionalEmail = "info@dogedivenezia.it";
  const professionalPhone = "+39 041 530 23 63";
  const excursionEmail = "api@dogedivenezia.it";
  const excursionPhone = "+39 041 315 63 02";
  const logoSrc =
    "https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75";
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
      {/* Passa le props necessarie al componente Navbar */}
      <Navbar
        professionalEmail={professionalEmail}
        professionalPhone={professionalPhone}
        excursionEmail={excursionEmail}
        excursionPhone={excursionPhone}
        logoSrc={logoSrc}
        menuItems={menuItems}
      />

      {/* Hero section con props specifiche */}
      <Hero
        titolo="Escursioni Giornaliere a Venezia"
        sottotitolo="un incanto sospeso sull’acqua"
        immagine="https://venetosecrets.com/wp-content/uploads/2021/02/venezia-romantica-01.jpg"
      />

      {/* Altri componenti (es. Contatti, Footer, etc.) */}
      <Contatti 
      immagine = "https://www.lagoonofvenice.org/wp-content/uploads/2019/06/Pagina-02-ABA-Bozza20_Mappa_Laguna_rev1_P%C3%A1gina_11.jpg"
      titolo = "Contattaci"
      sottotitolo = "Scrivici per problemi con la prenotazione o se vuoi chiederci maggiori informazioni riguardo i tour."
      numerogruppi = "+39 999 111 000"
      emailgruppi = "info@doge.it"
      numeroindividuali = "+71 987 654 321"
      emailindividuali = "g.baro@isiata.it"
      />
      <Privacy
        titolo="Questo sito web raccoglie alcuni dati personali dei visitatori e utenti"
        descrizione="Con il tuo consenso, noi e i nostri partner utilizziamo i cookie e tecnologie simili per archiviare, accedere ed elaborare i dati personali come, ad esempio, la visita al sito web o la personalizzazione degli annunci."
        policy="Visualizza la Cookie Policy Completa"
        accettatutto="ACCETTA TUTTO"
        accettanecessari="ACCETTA NECESSARI"
        preferenze="Preferenze GDPR"
        cookie="Rifiuta cookie non necessari X"
      />
      <Footer 
      
      />
    </div>
  );
}

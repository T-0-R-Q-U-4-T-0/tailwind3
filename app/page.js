import CardFeatured from "./components/cardfeatured";
import Contatti from "./components/contatti";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Privacy from "./components/privacy";
import Titolo from "./components/titolo";
import Cardescursione from "./components/cardescursione";
import Cardescursione2 from "./components/cardescursione2";
import Card from "./components/card";

export default function Home() {
  // Definire i valori delle props per il componente Navbar
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
      <Hero
        titolo="Escursioni Giornaliere a Venezia"
        sottotitolo="un incanto sospeso sull’acqua"
        immagine="https://venetosecrets.com/wp-content/uploads/2021/02/venezia-romantica-01.jpg"
      />
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
      immagine = "https://www.dogedivenezia.it/_next/image?url=%2Fimages%2Flogo.png&w=640&q=100"
      doge="Il Doge di Venezia"
      gruppi="Contatti gruppi"
      individuali="Contatti individuali"
      follow="Follow us"
      pagamento="Metodi di pagamento"
      footer=""
      />
      <Titolo
       sopratitolo = "Escursioni Giornaliere"
       sottotitolo1 = "Lasciati trasportare da una brezza marina mentre ammiri i palazzi storici, i ponti iconici e i tesori nascosti della città. Vivi l'emozione di vedere Venezia dal suo elemento più autentico: l'acqua."
      />
    <CardFeatured
    immagine = "☏"
    titolo = "Prenotazione Istantanea"
    descrizione = "Prenota il tuo tour a Venezia in pochi click, senza attese."
    />
    <Cardescursione
      titolo = "Escursione alle 3 Isole Murano - Burano - Torcell..."
      partenza = "Partenza: Venezia"
      durata = "Durata: 6h 30m"
      disponibilita = " Data: 1 aprile 2024"
      costo = "35,00 €"
      immagine = "https://www.dogedivenezia.it/_next/image?url=https%3A%2F%2Fbackoffice.dogedivenezia.it%2Fassets%2F44a433f7-5679-4730-adf3-69d0e99d9924.jpg&w=2048&q=75"
    />
    <Cardescursione2
      titolo = "Escursione alle 3 Isole Murano - Burano - Torcello"
      descrizione = "La nostra prima tappa, Murano, scopri perché l'isola è rinomata per le sue vetrerie con una visita a una fabbrica di vetro locale. Guarda un abile artigiano durante una dimostrazione della lavorazione del vetro. Successivamente, avrai circa un'ora sull'isola per fare shopping in uno dei tanti negozi di vetro."
      partenza = "Partanze: Venezia"
      durata = "Durata: 6h 30m"
      disponibilita = " Data: 1 aprile 2024"
      costo = "35,00 €"
    />
    <Card
     immagine = "https://www.aloharicevimenti.it/wp-content/uploads/2019/01/matrimonio.jpg"
     titolo = "Matrionio a bordo"
     descrizione = "Scopri il fascino di Venezia in un modo unico e romantico con il nostro servizio Matrimonio a Bordo. Immagina di dire Sì circondato dalle incantevoli acque della..."
    />
    </div>
  );
}

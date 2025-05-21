import Cardsx from "./components/cardsx"
import Carddx from "./components/carddx"
import Footer from "./components/footer"
import Landinghero from "./components/landinghero"
import Privacy from "./components/privacy"
import TitoloEbottone from "./components/titoloEbottone"


const socialLinks =[
  {
    title: "Prodotto",
    links: ["Scarica", "Nitro", "Stato", "App Directory", "Esperienza su dispositivi mobili"],
  },
  {
    title: "Compagnia",
    links: ["Chi siamo", "Lavora con noi", "Marchio", "Notiziario"],
  },
  {
    title: "Risorse",
    links: [
      "Università", "Assistenza", "Sicurezza", "Blog", "StreamKit", "Creatori", "Community",
      "Sviluppatori", "Gaming", "Missioni", "Articoli ufficiali di terze parti", "Suggerimenti"
    ],
  },
  {
    title: "Norme",
    links: [
      "Termini", "Politica sulla privacy", "Impostazioni dei cookie", "Linee guida",
      "Riconoscimenti", "Licenze", "Informazioni sulla compagnia"
    ],
  },

  
]

export default function Home() {
  return (
    <>
    <div className='items-center bg-slate-800 min-h-screen'>      
    <Cardsx
          titolo="TRASMETTI IN STREAMING PER I TUOI AMICI COME SE FOSSERO DAVVERO LÌ
              CON TE"
          descrizione="grazie alle dirette streaming di alta qualità e con bassa latenza"
        />
    <Carddx
       titolo="RENDI LE TUE CHAT DI GRUPPO ANCORA PIÙ DIVERTENTI"

      descrizione=" Usa tantissimi strumenti, tra cui emoji, adesivi ed effetti per la
       soundboard personalizzati, per rendere uniche le tue chat testuali,
       video o vocali. Scegli un avatar e uno stato personalizzato, e fa' in
       modo che il tuo profilo compaia in chat proprio come hai sempre
       desiderato."
      />

 
      <Landinghero
titolo=" CHAT DI "
gruppo="GRUPPO"
supera="SUPER"
iper="IPER MEGA"
divertente="DIVERTENTE"
descrizione="  Su Discord puoi giocare, divertirti con gli amici e perché no,
 costruire una community globale. Personalizza il tuo spazio e rendilo
il luogo perfetto in cui chiacchierare, giocare e passare del tempo."
mac=" Scarica per Mac"
discord=" Apri Discord nel tuo browser"
scarica=" scarica"
browser="apri discord nel tuo browser"
nito="Nitro"         
scopri="Scopri"
sicurezza=" Sicurezza"
missioni="Missioni"
assistenza="Assistenza"
blog="Blog"
sviluppatori="Sviluppatori"
lavora="Lavora con noi"
apri="Apri Discord"
                />

<Privacy
          titolo="Discord"
          paragrafo="Cliccando su “Accetta tutti i cookie”, l'utente accetta di
            memorizzare i cookie sul dispositivo per migliorare la navigazione
            del sito, analizzare l'utilizzo del sito e assistere nelle nostre
            attività di marketing."
          rifiuta=" Rifiuta tutti"
          cookie="  Accetta tutti i cookie"
          
        />


      <TitoloEbottone
       titolo="NON C'È NIENT'ALTRO QUI. MEGLIO ANDARE A CHATTARE"
       descriione="MEGLIO ANDARE A CHATTARE."
       scarica="Scarica per Mac"
      />








     
      
        <Footer 
        socialLinks={socialLinks}
       
        logo="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e278299a53f5bf88615e90_Symbol.svg" 
       />

     
      
    </div>
    </>
  );
}
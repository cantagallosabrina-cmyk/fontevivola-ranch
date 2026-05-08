import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { Check, Home, Users, Clock } from "lucide-react";

const Pensione = () => {
  const heroBannerImages = [
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/chvr3lqu_IMG_4643.JPEG",
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/pwagmspg_IMG_4645.JPEG",
  ];
  const services = [
    "Box ampi e arieggiati",
    "Lettiera pulita regolarmente",
    "Alimentazione personalizzata",
    "Paddock suddivisi per esigenze",
    "Gestione veterinaria",
    "Tecnici qualificati sempre presenti",
    "Possibilità di lavoro del cavallo",
    "Comunicazione costante con i proprietari",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Carousel */}
      <HeroBanner
        images={heroBannerImages}
        title="Pensione Cavalli"
        subtitle="Benessere, sicurezza e cura professionale per il tuo cavallo"
      />

      {/* Introduzione */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              La Nostra Pensione
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La pensione cavalli del Fontevivola Ranch è pensata per offrire un ambiente sicuro,
            organizzato e professionale, dove ogni cavallo può vivere in condizioni ottimali e
            ricevere un'attenzione costante. La nostra struttura, moderna e funzionale, garantisce
            standard elevati sia per il benessere dell'animale sia per la tranquillità dei
            proprietari.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Grazie alla presenza di tecnici qualificati e a servizi mirati, il ranch rappresenta un
            punto di riferimento per chi cerca una pensione seria e ben gestita per il proprio
            cavallo.
          </p>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              I Nostri Servizi
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start bg-white p-6 rounded-lg shadow-md"
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--primary-brown)" }}
                >
                  <Check size={16} color="white" />
                </div>
                <p className="text-gray-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scuderie e Box */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--primary-brown)", color: "white" }}
                >
                  <Home size={32} />
                </div>
                <h2 className="font-serif text-3xl font-bold" style={{ color: "var(--charcoal)" }}>
                  Scuderie e Box
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le nostre scuderie sono progettate per garantire comfort, sicurezza e una gestione
                quotidiana efficiente. I box sono ampi, arieggiati e dotati di un adeguato
                isolamento termico, così da assicurare condizioni ottimali in ogni stagione.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La lettiera viene mantenuta pulita con regolarità e ogni cavallo riceve
                un'alimentazione personalizzata in base alle sue esigenze, con la possibilità di
                integrare mangimi specifici su richiesta. Gli spazi comuni e le aree di servizio
                sono organizzati per favorire una gestione fluida e professionale, assicurando
                ordine e un ambiente sempre curato.
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/scuderie-box.jpg"
                alt="Box e scuderie del Fontevivola Ranch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paddock */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/scuderie-panoramica.jpg"
                  alt="Vista panoramica delle scuderie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--sage-green)", color: "white" }}
                >
                  <Users size={32} />
                </div>
                <h2 className="font-serif text-3xl font-bold" style={{ color: "var(--charcoal)" }}>
                  Paddock
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il Fontevivola Ranch dispone di numerosi paddock suddivisi per dimensioni e
                utilizzo, che permettono ai cavalli di trascorrere il tempo all'aperto in totale
                sicurezza. I paddock sono recintati, drenati e regolarmente mantenuti, ideali per
                favorire movimento, socializzazione controllata e un corretto equilibrio
                psicofisico.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La suddivisione delle aree consente di adattare ogni spazio alle necessità del
                cavallo: paddock per cavalli da sport, per cavalli in recupero, per giovani cavalli
                o per i soggetti che beneficiano di una routine più dinamica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assistenza */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "var(--bordeaux)", color: "white" }}
                >
                  <Clock size={32} />
                </div>
                <h2 className="font-serif text-3xl font-bold" style={{ color: "var(--charcoal)" }}>
                  Assistenza ai Clienti
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Scegliere il Fontevivola Ranch significa poter contare su assistenza professionale
                e costante. Il nostro staff affianca i proprietari nella gestione quotidiana del
                cavallo, fornendo supporto su alimentazione, routine di lavoro, eventuali esigenze
                veterinarie e programmazione dell'attività sportiva.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La comunicazione è sempre chiara e trasparente: manteniamo aggiornati i clienti
                sull'andamento del cavallo e offriamo consulenza personalizzata per ogni necessità.
                Il ranch è inoltre strutturato per mettere a disposizione spazi comodi, un ambiente
                accogliente e la possibilità di vivere la vita di scuderia in modo sereno e
                organizzato.
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/cavalli-ritratto.jpg"
                alt="I cavalli del Fontevivola Ranch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Perché Scegliere il Fontevivola Ranch
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "var(--primary-brown)" }}
              >
                Professionalità
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tecnici federali FISE e staff qualificato sempre presente
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "var(--primary-brown)" }}
              >
                Sicurezza
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Strutture moderne, paddock ben tenuti e controllo costante
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "var(--primary-brown)" }}
              >
                Benessere
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Alimentazione personalizzata e attenzione alle esigenze individuali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--primary-brown)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Affida il Tuo Cavallo alle Nostre Cure
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Vieni a visitare le nostre strutture e scopri il servizio di pensione
          </p>
          <a
            href="/contatti"
            className="inline-block bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            style={{ color: "var(--primary-brown)" }}
          >
            Contattaci
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pensione;

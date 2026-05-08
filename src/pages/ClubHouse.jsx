import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { PartyPopper, Coffee, Utensils, Calendar } from "lucide-react";

const ClubHouse = () => {
  const heroBannerImages = [
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/p61bd3nr_IMG_4651.JPEG",
    "/images/clubhouse-eventi.jpg",
  ];
  const features = [
    {
      title: "Bar e Cucina",
      description: "Servizi completi per ospitare eventi con catering",
      icon: <Coffee size={32} />,
    },
    {
      title: "Spazio Versatile",
      description: "Ambiente adattabile a diverse tipologie di eventi",
      icon: <Utensils size={32} />,
    },
    {
      title: "Eventi Personalizzati",
      description: "Organizziamo ogni dettaglio secondo le tue esigenze",
      icon: <PartyPopper size={32} />,
    },
    {
      title: "Disponibile per Affitto",
      description: "Prenota la Club House per i tuoi eventi privati",
      icon: <Calendar size={32} />,
    },
  ];

  const eventTypes = [
    "Compleanni",
    "Feste private",
    "Eventi aziendali",
    "Battesimi e comunioni",
    "Cene di gruppo",
    "Riunioni e meeting",
    "Anniversari",
    "Presentazioni e inaugurazioni",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Carousel */}
      <HeroBanner
        images={heroBannerImages}
        title="Club House & Eventi"
        subtitle="Uno spazio unico per i tuoi eventi speciali"
      />

      {/* Introduzione */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              La Nostra Club House
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La Club House del Fontevivola Ranch è uno spazio accogliente e versatile, ideale per
            ospitare eventi, incontri e momenti di condivisione. Dotata di bar e cucina, offre
            tutto il necessario per organizzare appuntamenti curati e ben gestiti.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            È disponibile anche per l'affitto, perfetta per rendere unici compleanni, feste private
            ed eventi personalizzati, immersi nell'atmosfera autentica del ranch. Un ambiente
            curato, funzionale e dotato di tutti i comfort necessari per un'esperienza piacevole e
            ben organizzata.
          </p>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Cosa Offriamo
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-brown)", color: "white" }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipologie di Eventi */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Eventi che Organizziamo
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((eventType, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-lg shadow-md flex items-center justify-center text-center"
              >
                <p className="text-gray-700 font-semibold text-lg">{eventType}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosfera Unica */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
                Un'Atmosfera Unica
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organizzare un evento al Fontevivola Ranch significa immergersi nell'atmosfera
                autentica di un ranch western, circondati dalla natura e dalla bellezza dei
                cavalli. Un contesto unico che renderà ogni occasione memorabile.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Club House offre spazi interni confortevoli e la possibilità di utilizzare gli
                spazi esterni del ranch, creando un'esperienza completa e coinvolgente per i tuoi
                ospiti.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3
                  className="font-serif text-xl font-bold mb-3"
                  style={{ color: "var(--primary-brown)" }}
                >
                  Servizi Inclusi
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: "var(--primary-brown)" }}
                    ></div>
                    <span>Utilizzo della sala e degli spazi esterni</span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: "var(--primary-brown)" }}
                    ></div>
                    <span>Bar e cucina attrezzati</span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: "var(--primary-brown)" }}
                    ></div>
                    <span>Assistenza nell'organizzazione</span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: "var(--primary-brown)" }}
                    ></div>
                    <span>Parcheggio per gli ospiti</span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: "var(--primary-brown)" }}
                    ></div>
                    <span>Possibilità di catering personalizzato</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/clubhouse-bar.jpg"
                  alt="Bar e bancone della Club House"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/clubhouse-eventi.jpg"
                  alt="Sala eventi del Fontevivola Ranch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Perché Sceglierci
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: "var(--primary-brown)", color: "white" }}
              >
                1
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Location Unica
              </h3>
              <p className="text-gray-700">
                Un ambiente autentico e suggestivo che renderà il tuo evento indimenticabile
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: "var(--sage-green)", color: "white" }}
              >
                2
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Organizzazione Professionale
              </h3>
              <p className="text-gray-700">
                Ti seguiamo in ogni fase, dalla progettazione alla realizzazione dell'evento
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: "var(--bordeaux)", color: "white" }}
              >
                3
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Flessibilità
              </h3>
              <p className="text-gray-700">
                Personalizziamo ogni dettaglio secondo le tue esigenze e preferenze
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--primary-brown)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Organizza il Tuo Evento da Noi
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Contattaci per un preventivo personalizzato e per visitare la Club House
          </p>
          <a
            href="/contatti"
            className="inline-block bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            style={{ color: "var(--primary-brown)" }}
          >
            Richiedi Informazioni
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClubHouse;

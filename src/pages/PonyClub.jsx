import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PhotoGallery from "../components/PhotoGallery";
import { Smile, Shield, Star, Heart } from "lucide-react";

const PonyClub = () => {
  const galleryImages = [
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/vzuqck40_3c2b8bf5-10ca-457f-a1a6-84e6bc4a7b90.JPEG",
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/0i8ndm5t_a06c4804-655b-47ca-a880-0249a1d201b3.JPEG",
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/ko11g3id_c11a8fe3-2a34-40ab-a340-0280cced6e03.JPEG",
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/3d5dazt1_e6b276e2-4a36-4f7b-a024-237a837a1b2c.JPEG",
    "https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/kaeajm1h_c11a8fe3-2a34-40ab-a340-0280cced6e03.JPEG",
    "/images/bambini-pony.jpg",
    "/images/pony-primo-piano.jpg",
    "/images/gara-bambina.jpg",
    "/images/gara-paint.jpg",
  ];
  const benefits = [
    {
      title: "Sviluppo Fisico",
      description: "Migliora equilibrio, coordinazione e postura",
      icon: <Star size={32} />,
    },
    {
      title: "Crescita Personale",
      description: "Aumenta fiducia, responsabilità e autonomia",
      icon: <Heart size={32} />,
    },
    {
      title: "Sicurezza",
      description: "Ambiente protetto con istruttori specializzati",
      icon: <Shield size={32} />,
    },
    {
      title: "Divertimento",
      description: "Imparare giocando in compagnia di altri bambini",
      icon: <Smile size={32} />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/kaeajm1h_c11a8fe3-2a34-40ab-a340-0280cced6e03.JPEG')`,
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Pony Club</h1>
          <p className="text-xl md:text-2xl" style={{ color: "var(--warm-tan)" }}>
            Dove i piccoli cavalieri iniziano la loro avventura
          </p>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Nostro Pony Club
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Il Pony Club del Fontevivola Ranch è pensato per bambini e ragazzi che vogliono
            avvicinarsi all'equitazione americana in un ambiente sicuro, professionale e ben
            organizzato. Le lezioni combinano attività in sella e momenti di gestione da terra,
            così da sviluppare fin da subito una relazione corretta con il pony e una buona
            sicurezza personale.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Con l'aiuto di istruttori qualificati e pony equilibrati, i giovani allievi imparano le
            basi della monta americana, migliorando equilibrio, coordinazione e controllo. Ogni
            percorso è strutturato per fasce d'età e livello, permettendo ai bambini di progredire
            con gradualità, acquisire autonomia e affrontare esercizi sempre più completi.
          </p>
        </div>
      </section>

      {/* Benefici */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              I Benefici del Pony Club
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-brown)", color: "white" }}
                >
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programma */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Nostro Programma
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-xl">
              <h3
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "var(--primary-brown)" }}
              >
                Attività in Sella
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Imparare l'assetto corretto</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Controllo delle andature (passo, trotto, galoppo)</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Esercizi di equilibrio e coordinazione</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Giochi educativi a cavallo</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Percorsi e piccoli ostacoli</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-xl">
              <h3
                className="font-serif text-2xl font-bold mb-4"
                style={{ color: "var(--primary-brown)" }}
              >
                Gestione da Terra
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Avvicinamento e primo contatto con il pony</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Pulizia e cura del pony (grooming)</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Sellaggio e gestione attrezzatura</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Comprensione del comportamento del pony</span>
                </li>
                <li className="flex items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  ></div>
                  <span>Norme di sicurezza e rispetto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Obiettivi */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              I Nostri Obiettivi
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Il nostro obiettivo è formare cavalieri attenti e consapevoli, trasmettendo valori
              importanti come rispetto, responsabilità e cura dell'animale. Un'esperienza educativa
              che unisce tecnica, crescita personale e il piacere di imparare in un contesto sereno
              e stimolante.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ogni bambino viene seguito con attenzione, rispettando i suoi tempi e le sue capacità,
              in un ambiente dove la sicurezza è la priorità assoluta e il divertimento è parte
              integrante dell'apprendimento.
            </p>
          </div>
        </div>
      </section>

      {/* Immagine Pony Club */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/pony-club-patrizia.jpg"
              alt="Patrizia con i bambini del Pony Club"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Istruttrice */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              La Nostra Istruttrice
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div
              className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
            >
              <img
                src="/images/pony-club-patrizia.jpg"
                alt="Patrizia Pulcini con i bambini del Pony Club"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
              Patrizia Pulcini
            </h3>
            <p className="font-semibold mb-4" style={{ color: "var(--sage-green)" }}>
              Istruttrice Pony
            </p>
            <p className="text-gray-700 leading-relaxed">
              Patrizia è specializzata nell'insegnamento ai bambini, con una lunga esperienza nel
              creare un ambiente sereno e stimolante dove i piccoli cavalieri possono imparare
              divertendosi. La sua pazienza e dedizione rendono ogni lezione un'esperienza positiva
              e formativa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--primary-brown)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Iscriviti al Pony Club
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Regala a tuo figlio un'esperienza unica a contatto con i pony
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

      {/* Photo Gallery */}
      <PhotoGallery images={galleryImages} title="Le Nostre Foto del Pony Club" />

      <Footer />
    </div>
  );
};

export default PonyClub;

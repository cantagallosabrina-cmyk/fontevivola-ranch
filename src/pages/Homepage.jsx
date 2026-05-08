import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Heart } from "lucide-react";

const Homepage = () => {
  const services = [
    {
      title: "Equitazione Americana",
      description:
        "La scuola di equitazione del Fontevivola Ranch è il luogo ideale per vivere la vera Monta Americana. Accogliamo principianti ed esperti con programmi personalizzati, cavalli affidabili e istruttori federali FISE pronti a guidarti in ogni passo.",
      image: "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/u9v7tn1k_WhatsApp%20Image%202025-12-04%20at%2018.49.05.jpeg",
      link: "/scuola",
    },
    {
      title: "Reining",
      description:
        "Il Reining è il cuore tecnico e sportivo del Fontevivola Ranch. Una disciplina di precisione e controllo, in cui cavallo e cavaliere lavorano in perfetta sintonia per eseguire pattern di figure come spin, sliding stop e cambi di galoppo.",
      image: "https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/t31uw8ym_c789059d-d31a-4609-a050-c61ca9c99673.JPEG",
      link: "/reining",
    },
    {
      title: "Pony Club",
      description:
        "Il Pony Club del Fontevivola Ranch offre ai bambini l'occasione di avvicinarsi all'equitazione americana in un ambiente sicuro e strutturato. Le attività mirano a sviluppare equilibrio, coordinazione e rispetto per l'animale.",
      image: "https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/kaeajm1h_c11a8fe3-2a34-40ab-a340-0280cced6e03.JPEG",
      link: "/pony-club",
    },
    {
      title: "Pensione Cavalli",
      description:
        "Il Fontevivola Ranch offre un servizio di pensione completa per cavalli pensato per garantire benessere, sicurezza e cura quotidiana. Box confortevoli, paddock ampi e un'attenzione costante alle esigenze di ogni animale.",
      image: "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/chvr3lqu_IMG_4643.JPEG",
      link: "/pensione",
    },
    {
      title: "Club House & Eventi",
      description:
        "La Club House del Fontevivola Ranch è uno spazio accogliente e versatile, ideale per ospitare eventi, incontri e momenti di condivisione. Dotata di bar e cucina, perfetta per eventi personalizzati.",
      image: "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/p61bd3nr_IMG_4651.JPEG",
      link: "/club-house",
    },
    {
      title: "Allevamento",
      description:
        "Al Fontevivola Ranch alleviamo Quarter Horses selezionati dalle migliori linee di sangue americane, con attenzione a equilibrio, attitudine sportiva e affidabilità. I puledri crescono in un ambiente controllato e ben gestito.",
      image: "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/lv3c23do_WhatsApp%20Image%202025-12-04%20at%2019.00.29.jpeg",
      link: "/allevamento",
    },
  ];

  const team = [
    {
      name: "Giovanni Bruschi",
      role: "Tecnico FISE 3° livello",
      specialty: "Reining e Monta Americana",
    },
    {
      name: "Sabrina Cantagallo",
      role: "Tecnico FISE 1° livello",
      specialty: "Equitazione Americana",
    },
    {
      name: "Patrizia Pulcini",
      role: "Istruttrice Pony",
      specialty: "Pony Club e Formazione Bambini",
    },
    {
      name: "Marco Maccarrone",
      role: "Tecnico FiteTrec Ante",
      specialty: "Turismo Equestre e Monta da Lavoro",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source
            src="https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/oq943ugf_FVR%20SITO.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="hero-overlay absolute inset-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fontevivola Ranch
          </h1>
          <p className="text-2xl md:text-3xl mb-8 leading-relaxed font-medium" style={{ color: "var(--warm-tan)" }}>
            Reining, Equitazione Americana e Pony Club
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center"
              style={{
                backgroundColor: "var(--primary-brown)",
                color: "white",
              }}
            >
              Prenota una Lezione
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/storia"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all duration-300 inline-flex items-center justify-center"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "var(--charcoal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Scopri di Più
            </Link>
          </div>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Benvenuti al Fontevivola Ranch
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Il Fontevivola Ranch è un centro equestre moderno dedicato alla Monta Americana e,
              in particolare, al Reining, disciplina in cui cavallo e cavaliere lavorano in
              perfetta armonia. Qui professionalità, competenza e amore per i cavalli si uniscono
              in un ambiente curato e accogliente, ideale sia per chi vuole imparare o
              perfezionarsi, sia per chi cerca una pensione di qualità per il proprio cavallo. Il
              nostro Pony Club avvicina anche i più piccoli al mondo dell'equitazione, con
              percorsi formativi basati su rispetto, sicurezza e divertimento. Un luogo autentico
              dove ogni giorno si vive la vera passione per il cavallo.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              I Nostri Servizi
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-64 overflow-hidden image-zoom">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: "var(--primary-brown)",
                      color: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  >
                    Scopri di Più
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria Strutture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Le Nostre Strutture
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Scopri gli spazi moderni e funzionali del Fontevivola Ranch: dalle scuderie ai campi
              di allenamento, ogni dettaglio è pensato per il benessere dei cavalli e dei cavalieri
            </p>
          </div>

          {/* Galleria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Immagine Grande - Scuderie */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="h-full rounded-xl overflow-hidden shadow-lg image-zoom relative group">
                <img
                  src="https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/pwagmspg_IMG_4645.JPEG"
                  alt="Scuderie Fontevivola Ranch"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "500px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-serif text-2xl font-bold mb-2">Scuderie</h3>
                    <p className="text-white/90">Box confortevoli e ben arieggiati</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campo Coperto */}
            <div className="lg:col-span-2">
              <div className="h-64 rounded-xl overflow-hidden shadow-lg image-zoom relative group">
                <img
                  src="https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/fbk5xzlp_IMG_4646.JPEG"
                  alt="Campo Coperto"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-serif text-xl font-bold mb-2">Campo Coperto</h3>
                    <p className="text-white/90">Allenamenti in ogni condizione meteo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Relax */}
            <div className="lg:col-span-1">
              <div className="h-60 rounded-xl overflow-hidden shadow-lg image-zoom relative group">
                <img
                  src="https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/ihf6ria1_IMG_4656.JPEG"
                  alt="Area Relax"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-serif text-lg font-bold mb-1">Area Relax</h3>
                    <p className="text-white/90 text-sm">Spazi comuni accoglienti</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campo di Allenamento */}
            <div className="lg:col-span-1">
              <div className="h-60 rounded-xl overflow-hidden shadow-lg image-zoom relative group">
                <img
                  src="https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/zc40l8o6_IMG_4657.JPEG"
                  alt="Campo di Allenamento"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-serif text-lg font-bold mb-1">Campi di Allenamento</h3>
                    <p className="text-white/90 text-sm">Spazi ampi per il lavoro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Visita */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Vuoi vedere di persona le nostre strutture?
            </p>
            <Link
              to="/contatti"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: "var(--primary-brown)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Prenota una Visita
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Nostro Team
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Il team del Fontevivola Ranch è composto da tecnici federali FISE, professionisti
              qualificati che condividono la stessa passione per la Monta Americana e il Reining.
              Ogni giorno mettono esperienza, dedizione e cura in tutto ciò che fanno —
              dall'allenamento dei cavalli alla formazione dei cavalieri — garantendo un ambiente
              serio, accogliente e di alto livello tecnico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center text-gray-500 font-medium"
                  style={{ backgroundColor: "#E5E5E5" }}
                >
                  [Foto {member.name}]
                </div>
                <h3 className="font-serif text-xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
                  {member.name}
                </h3>
                <p className="font-semibold mb-2" style={{ color: "var(--sage-green)" }}>
                  {member.role}
                </p>
                <p className="text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "var(--primary-brown)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Inizia la Tua Avventura
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Prenota la tua prima lezione o vieni a visitare il ranch. Ti aspettiamo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              style={{
                color: "var(--primary-brown)",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              Prenota Lezione di Prova
            </Link>
            <Link
              to="/contatti"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "var(--primary-brown)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Richiedi Informazioni
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;

import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { Award, Dna, TrendingUp, Home } from "lucide-react";

const Allevamento = () => {
  const heroBannerImages = [
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/lv3c23do_WhatsApp%20Image%202025-12-04%20at%2019.00.29.jpeg",
  ];
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Carousel */}
      <HeroBanner
        images={heroBannerImages}
        title="Allevamento"
        subtitle="Quarter Horses di qualità dalle migliori linee americane"
      />

      {/* Introduzione */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Nostro Allevamento
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            L'allevamento del Fontevivola Ranch è dedicato alla produzione di Quarter Horses
            provenienti da linee genetiche americane di alto livello, selezionate per garantire
            soggetti moderni, versatili e con una naturale predisposizione alle discipline della
            monta americana. La scelta dei riproduttori è mirata a valorizzare attitudine,
            equilibrio e affidabilità, qualità che rendono questi cavalli ideali tanto per
            l'attività sportiva quanto per un utilizzo più amatoriale.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Seguiamo con attenzione tutto il percorso, dalla gestione delle fattrici gravide alla
            crescita dei nuovi nati, garantendo condizioni ottimali e un ambiente controllato e
            professionale. Questo approccio ci consente di offrire Quarter Horses con una base
            caratteriale e fisica di qualità, pronti a intraprendere con successo progetti sportivi
            o percorsi formativi nel mondo della monta americana.
          </p>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              I Nostri Punti di Forza
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--primary-brown)", color: "white" }}
              >
                <Dna size={40} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Genetica Selezionata
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Linee di sangue americane di alto livello
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--sage-green)", color: "white" }}
              >
                <Home size={40} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Paddock Strutturati
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ambienti ampi e sicuri per ogni fase di crescita
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--bordeaux)", color: "white" }}
              >
                <Award size={40} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Cura Professionale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Assistenza veterinaria e gestione quotidiana esperta
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--primary-brown)", color: "white" }}
              >
                <TrendingUp size={40} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                Crescita Ottimale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sviluppo equilibrato fisico e caratteriale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paddock e Strutture */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Paddock e Strutture
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Uno dei punti di forza del nostro allevamento è rappresentato dagli spazi dedicati
                alla crescita dei giovani cavalli. Il ranch dispone infatti di numerosi paddock
                appositamente strutturati, pensati per accompagnare ogni fase dello sviluppo: dai
                primi mesi di vita fino all'età adulta.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ambienti ampi, sicuri e differenziati permettono ai puledri di socializzare,
                muoversi liberamente e crescere con una struttura equilibrata, condizione essenziale
                per il loro futuro benessere e per una carriera sportiva solida.
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/puledro-madre.jpg"
                alt="Puledro Quarter Horse con la madre al paddock"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quarter Horse */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Quarter Horse
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il Quarter Horse è la razza americana per eccellenza, riconosciuta a livello mondiale
                per la sua versatilità, intelligenza e docilità. Originariamente utilizzato nei
                ranch, oggi è protagonista in tutte le discipline western, dal Reining al Ranch
                Riding, dal Barrel Racing al Cutting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Il suo nome deriva dalla sua incredibile velocità sulle brevi distanze (il quarto di
                miglio), ma ciò che lo rende speciale è la sua attitudine al lavoro, il carattere
                affidabile e la capacità di creare un legame profondo con il cavaliere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Al Fontevivola Ranch selezioniamo riproduttori che incarnano queste qualità, con
                particolare attenzione alle linee da Reining, per produrre cavalli atletici,
                intelligenti e pronti a eccellere in ambito sportivo.
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/palomino-primo-piano.jpg"
                alt="Quarter Horse Palomino del Fontevivola Ranch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Puledri */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/puledro-pascolo.jpg"
                alt="Puledro al pascolo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/puledri-due.jpg"
                alt="Due puledri Quarter Horse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/puledro-grigio.jpg"
                alt="Puledro grigio al Fontevivola Ranch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusione */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
            Qualità e Tradizione
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            L'allevamento del Fontevivola Ranch è il risultato di un investimento costante nella
            qualità, nella selezione e nella cura degli spazi. Una realtà che unisce tradizione,
            competenza e attenzione al dettaglio, con l'obiettivo di mettere a disposizione cavalli
            affidabili, ben cresciuti e pronti a valorizzare le potenzialità di ogni cavaliere.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--primary-brown)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Scopri i Nostri Quarter Horses
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Contattaci per informazioni sui cavalli disponibili
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

export default Allevamento;

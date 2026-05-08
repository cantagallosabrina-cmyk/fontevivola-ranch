import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

const Reining = () => {
  const heroBannerImages = [
    "https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/t31uw8ym_c789059d-d31a-4609-a050-c61ca9c99673.JPEG",
    "/images/reining-stop-gara.jpg",
    "/images/reining-spin.jpg",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Carousel */}
      <HeroBanner
        images={heroBannerImages}
        title="Reining"
        subtitle="Il cuore tecnico e sportivo del Fontevivola Ranch"
      />

      {/* Citazione NRHA */}
      <section className="py-16" style={{ backgroundColor: "var(--charcoal)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-white leading-relaxed mb-6">
            "To rein a horse is not only to guide him, but also to control his every movement. The best reined horse should be willingly guided or controlled with little or no apparent resistance and dictated to completely."
          </p>
          <div>
            <p className="text-lg font-semibold" style={{ color: "var(--warm-tan)" }}>
              — Jim Willoughby
            </p>
            <p className="text-sm text-gray-400">
              NRHA Hall of Fame Inductee
            </p>
          </div>
        </div>
      </section>

      {/* Cos'è il Reining */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Cos'è il Reining
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Il Reining è la disciplina che meglio rappresenta l'essenza della monta americana:
            controllo, precisione e qualità nell'esecuzione delle manovre. Attraverso pattern
            composti da figure codificate come spin, sliding stop, rollback, cambi di galoppo e
            cerchi a diverse velocità, il Reining mette in evidenza le capacità atletiche del
            cavallo e la preparazione tecnica del binomio.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Spesso definito come il "dressage western", il Reining richiede anni di preparazione,
            un legame profondo tra cavaliere e cavallo, e una tecnica raffinata che si sviluppa
            attraverso l'allenamento costante e metodico.
          </p>
        </div>
      </section>

      {/* Al Fontevivola Ranch */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Reining al Fontevivola Ranch
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Al Fontevivola Ranch il Reining rappresenta il fulcro della nostra attività tecnica. Da
            anni lavoriamo con costanza allo sviluppo di programmi specifici per chi desidera
            apprendere o perfezionare questa disciplina. Offriamo lezioni per principianti e
            avanzati, percorsi di perfezionamento, preparazione atletica del cavallo e supporto
            dedicato per chi vuole approcciarsi al contesto competitivo.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            L'addestramento dei cavalli segue un metodo strutturato basato su progressione,
            chiarezza degli esercizi e coerenza del lavoro. L'obiettivo è formare cavalli
            equilibrati, reattivi e affidabili, in grado di affrontare le manovre del Reining con
            precisione e controllo. Parallelamente, i cavalieri acquisiscono competenze tecniche
            mirate, migliorando gestione, timing e accuratezza nell'esecuzione delle figure previste
            dai pattern.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Allenarsi al Fontevivola Ranch significa operare in un ambiente professionale e moderno,
            dove ogni fase del lavoro è seguita da tecnici qualificati. Il Reining è una disciplina
            impegnativa, richiede attenzione al dettaglio e costanza nella pratica, ma offre un
            percorso formativo completo e altamente specializzante.
          </p>
        </div>
      </section>


      {/* Immagini */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/gara-ranch-riding.jpg"
                alt="Gara di Ranch Riding al Fontevivola Ranch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/sliding-stop.jpg"
                alt="Sliding stop durante gara di Reining"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--primary-brown)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Scopri il Reining
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Vieni a provare questa disciplina affascinante con i nostri istruttori qualificati
          </p>
          <a
            href="/contatti"
            className="inline-block bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            style={{ color: "var(--primary-brown)" }}
          >
            Prenota una Lezione
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reining;

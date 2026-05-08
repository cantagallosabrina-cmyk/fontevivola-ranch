import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Storia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32" style={{ background: "linear-gradient(135deg, var(--primary-brown) 0%, var(--bordeaux) 100%)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            La Nostra Storia
          </h1>
          <p className="text-xl" style={{ color: "var(--warm-tan)" }}>
            Un viaggio iniziato nel 2010, costruito con passione e dedizione
          </p>
        </div>
      </section>

      {/* Storia Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
                Gli Inizi (2010)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Il Fontevivola Ranch nasce nel 2010 dal sogno di Giovanni Bruschi, che con il
                sostegno della sua famiglia ha dato vita a un luogo dove la passione per i cavalli
                si respira in ogni dettaglio. Un progetto costruito con il cuore, pensato per
                unire sport, natura e vita di ranch in un'unica esperienza autentica.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I primi anni sono stati dedicati al Team Penning, una disciplina di squadra che ci
                ha insegnato una lezione preziosa: andare a cavallo è sempre un lavoro di squadra.
                Nel nostro ranch ogni giornata in sella è fatta di collaborazione, fiducia e
                condivisione — perché qui, prima ancora che un centro sportivo, si cresce come una
                vera famiglia equestre.
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <div
                className="w-full h-full flex items-center justify-center text-gray-500 font-medium"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                [PLACEHOLDER: Foto storica ranch 2010]
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/t31uw8ym_c789059d-d31a-4609-a050-c61ca9c99673.JPEG"
                  alt="Reining"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
                L'Evoluzione: Il Reining
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Con il tempo il nostro percorso è evoluto verso il Reining, la disciplina che oggi
                rappresenta l'anima del ranch. Più tecnica e raffinata, mette al centro l'armonia
                e la comunicazione tra cavallo e cavaliere: un dialogo silenzioso che nasce dal
                rispetto e dalla fiducia reciproca.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il Reining è diventato il fulcro della nostra attività tecnica, permettendoci di
                raggiungere livelli di eccellenza riconosciuti a livello nazionale. Questa
                disciplina richiede precisione, controllo e una profonda connessione con il
                cavallo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
                La Scuola e Oggi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fin dall'inizio, il Fontevivola Ranch è stato anche una scuola di equitazione
                western aperta a bambini, ragazzi e adulti. Negli anni la scuola è cresciuta
                insieme al ranch, migliorando metodi, strutture e qualità dell'insegnamento, fino a
                diventare un punto di riferimento per chi desidera vivere l'equitazione con
                professionalità, passione e rispetto per il cavallo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Oggi il Fontevivola Ranch è un centro equestre completo che offre formazione,
                allenamento sportivo, allevamento di Quarter Horses, pensione per cavalli e
                opportunità di crescita per tutti gli appassionati di monta americana. Un luogo
                dove la tradizione western incontra la professionalità moderna.
              </p>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/ranch-panoramica.jpg"
                alt="Fontevivola Ranch oggi - vista aerea"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              La Nostra Timeline
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div
                className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center font-bold text-white text-xl"
                style={{ backgroundColor: "var(--primary-brown)" }}
              >
                2010
              </div>
              <div className="flex-1 pt-4">
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
                  Nascita del Ranch
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Giovanni Bruschi fonda il Fontevivola Ranch con focus sul Team Penning
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div
                className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center font-bold text-white text-xl"
                style={{ backgroundColor: "var(--sage-green)" }}
              >
                2015
              </div>
              <div className="flex-1 pt-4">
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
                  Transizione al Reining
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Inizia la specializzazione nella disciplina del Reining
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div
                className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center font-bold text-white text-xl"
                style={{ backgroundColor: "var(--bordeaux)" }}
              >
                2020
              </div>
              <div className="flex-1 pt-4">
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
                  Espansione Servizi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ampliamento strutture, avvio allevamento Quarter Horses e servizio pensione
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div
                className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center font-bold text-white text-xl"
                style={{ backgroundColor: "var(--primary-brown)" }}
              >
                Oggi
              </div>
              <div className="flex-1 pt-4">
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
                  Centro di Eccellenza
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Punto di riferimento per la Monta Americana e il Reining nel Lazio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Storia;

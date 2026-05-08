import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PhotoGallery from "../components/PhotoGallery";
import { Check } from "lucide-react";

const Scuola = () => {
  const galleryImages = [
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/anzcdrli_TAT_9597.jpg",
    "https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/u9v7tn1k_WhatsApp%20Image%202025-12-04%20at%2018.49.05.jpeg",
    "https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/x0c7bgy3_d64df0d0-a4c8-4219-85cc-7eb40232c9f3.JPEG",
    "/images/allenamento-coperto.jpg",
    "/images/gara-ranch-riding.jpg",
    "/images/gruppo-scuola.jpg",
  ];
  const features = [
    "Programmi personalizzati per ogni livello",
    "Istruttori federali FISE qualificati",
    "Cavalli da scuola preparati ed equilibrati",
    "Metodo di insegnamento strutturato",
    "Progressioni chiare e obiettivi concreti",
    "Ambiente moderno e ben organizzato",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_reining-lazio/artifacts/u9v7tn1k_WhatsApp%20Image%202025-12-04%20at%2018.49.05.jpeg')`,
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Scuola di Equitazione Americana
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: "var(--warm-tan)" }}>
            Impara la vera Monta Americana con tecnici federali FISE
          </p>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              La Nostra Scuola
            </h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La scuola di equitazione del Fontevivola Ranch è il punto di riferimento per chi
            desidera avvicinarsi alla Monta Americana o perfezionare il proprio livello tecnico in
            un ambiente serio, strutturato e accogliente. Accogliamo principianti, amatori ed
            esperti, con programmi di formazione costruiti su misura e seguiti da istruttori
            federali FISE, garantendo un percorso didattico chiaro e di qualità.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A supporto delle lezioni utilizziamo cavalli da scuola preparati ed equilibrati,
            selezionati per offrire agli allievi un'esperienza sicura e progressiva. Durante le
            lezioni gli allievi lavorano sulle principali discipline western, dalle basi
            dell'Horsemanship all'assetto e alla gestione nelle prove di Ranch Riding e Ranch Rail,
            per arrivare al Reining, disciplina centrale del nostro ranch.
          </p>
        </div>
      </section>

      {/* Caratteristiche */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Perché Scegliere la Nostra Scuola
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
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
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Metodo */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Il Nostro Metodo
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--primary-brown)" }}>
                Progressione Graduale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Il metodo di insegnamento si basa su progressioni chiare, obiettivi concreti e
                un'attenzione costante alla sicurezza e alla corretta impostazione tecnica. Ogni
                attività è studiata per sviluppare coordinazione, precisione, autonomia e
                consapevolezza nella gestione del cavallo, rispettando i tempi e le capacità di
                ciascun cavaliere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--primary-brown)" }}>
                Ambiente Ottimale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                L'ambiente, moderno e ben organizzato, permette di lavorare con continuità e in
                condizioni ottimali sia in fase di apprendimento sia nella preparazione agonistica.
                Le nostre strutture includono campi coperti e scoperti, permettendo lezioni in ogni
                condizione meteo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--primary-brown)" }}>
                Per Tutti i Livelli
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Che tu voglia muovere i primi passi, migliorare la tua tecnica o intraprendere un
                percorso più avanzato, al Fontevivola Ranch troverai istruttori competenti, cavalli
                preparati e un contesto ideale per crescere davvero in sella. È qui che la passione
                per la monta americana diventa un percorso strutturato e alla portata di tutti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immagine Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/lezione-gruppo.jpg"
                alt="Lezione di gruppo al Fontevivola Ranch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/lezione-coperto.jpg"
                alt="Allenamento nel campo coperto"
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
            Inizia il Tuo Percorso
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Prenota una lezione di prova e scopri la Monta Americana
          </p>
          <a
            href="/contatti"
            className="inline-block bg-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            style={{ color: "var(--primary-brown)" }}
          >
            Contattaci Ora
          </a>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery images={galleryImages} title="Le Nostre Lezioni" />

      <Footer />
    </div>
  );
};

export default Scuola;

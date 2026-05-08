import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, MapPin, Phone, X } from "lucide-react";

const News = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Reining: Capire, Osservare, Migliorare",
      date: "Sabato 30 Maggio 2026",
      category: "Incontro Teorico",
      description:
        "Un incontro teorico dedicato al mondo del Reining: visione di video, approfondimento teorico e sistemi di giudizio della disciplina. Dopo la parte teorica, aperitivo e presentazione di tutte le attività dell'estate presso Fontevivola Ranch.",
      image: "/images/evento-30-maggio.png",
      contact: "Sabrina: 333 328 7226 (WhatsApp)",
      featured: true,
    },
    {
      id: 2,
      title: "Stage Reining & Pony Reining",
      date: "30 Giugno - 3 Luglio 2026",
      category: "Stage",
      description:
        "Incontri teorici e pratici su conduzione e gestione del cavallo e del pony, equitazione americana, Reining e Pony Reining. Gran finale il 4 Luglio con la 3ª tappa di Avviamento al Reining presso Fontevivola Ranch.",
      image: "/images/evento-stage-estate.png",
      contact: "Sabrina (cavalli): 333 328 7226 — Patrizia (pony): 334 390 7350",
      featured: true,
    },
    {
      id: 3,
      title: "Horse & Pony Reining Campus 2025",
      date: "7 - 12 Luglio 2025",
      category: "Campus",
      description:
        "Il FVR Campus è stata un'esperienza pensata per tutti i cavalieri, grandi e piccoli: giornate dedicate alla pratica del Reining, alla gestione della scuderia e al lavoro quotidiano con il cavallo. Da lunedì a sabato, un programma completo con Showmanship, Horsemanship, Ranch Riding, Pony Games, avviamento al Reining e gara finale. Un successo che ci ha dato grande soddisfazione e che riproporremo anche quest'anno!",
      image: "/images/evento-campus-1.png",
      secondImage: "/images/evento-campus-2.png",
      contact: "Sabrina (cavalli): 333 328 7226 — Patrizia (pony): 334 390 7350",
      price: null,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-32"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-brown) 0%, var(--bordeaux) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            News & Eventi
          </h1>
          <p className="text-xl" style={{ color: "var(--warm-tan)" }}>
            Tutte le novità, gli stage e gli eventi del Fontevivola Ranch
          </p>
        </div>
      </section>

      {/* Eventi */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-cream rounded-xl overflow-hidden shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className="h-80 lg:h-auto cursor-pointer relative group"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                        Clicca per ingrandire
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    {event.featured && (
                      <span
                        className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 w-fit"
                        style={{ backgroundColor: "var(--bordeaux)" }}
                      >
                        In Evidenza
                      </span>
                    )}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit"
                      style={{
                        backgroundColor: "var(--sage-green)",
                        color: "white",
                      }}
                    >
                      {event.category}
                    </span>
                    <h2
                      className="font-serif text-2xl md:text-3xl font-bold mb-4"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {event.title}
                    </h2>
                    <div className="flex items-center mb-3 text-gray-600">
                      <Calendar size={18} className="mr-2" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center mb-4 text-gray-600">
                      <MapPin size={18} className="mr-2" />
                      <span>Fontevivola Ranch — Sutri (VT)</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    {event.price && (
                      <p
                        className="text-lg font-bold mb-4"
                        style={{ color: "var(--primary-brown)" }}
                      >
                        {event.price}
                      </p>
                    )}
                    <div className="flex items-start text-gray-600">
                      <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{event.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--primary-brown)" }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Vuoi Partecipare?
          </h2>
          <p className="text-xl mb-8" style={{ color: "var(--warm-tan)" }}>
            Contattaci per informazioni e iscrizioni ai nostri eventi
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

      {/* Modal Locandina */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setSelectedEvent(null)}
        >
          <div className="relative max-w-2xl max-h-[90vh]">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="max-h-[85vh] w-auto rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default News;

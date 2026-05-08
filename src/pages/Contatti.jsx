import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/INSERISCI_TUO_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Non fornito",
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Messaggio inviato con successo!", {
          description: "Ti risponderemo al più presto.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitSuccess(true);
      } else {
        toast.error("Errore nell'invio", {
          description: "Riprova o contattaci direttamente per telefono.",
        });
      }
    } catch (error) {
      toast.error("Errore di connessione", {
        description: "Controlla la tua connessione e riprova.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Toaster />

      {/* Hero Section */}
      <section className="relative py-32" style={{ background: "linear-gradient(135deg, var(--primary-brown) 0%, var(--bordeaux) 100%)" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Contattaci</h1>
          <p className="text-xl" style={{ color: "var(--warm-tan)" }}>
            Siamo a tua disposizione per informazioni e prenotazioni
          </p>
        </div>
      </section>

      {/* Contatti e Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informazioni di Contatto */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: "var(--charcoal)" }}>
                Informazioni di Contatto
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  >
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--charcoal)" }}>
                      Indirizzo
                    </h3>
                    <p className="text-gray-700">
                      Via delle Viole, 40
                      <br />
                      Sutri (VT)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "var(--sage-green)" }}
                  >
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--charcoal)" }}>
                      Telefono
                    </h3>
                    <a
                      href="tel:+393292348551"
                      className="text-gray-700 hover:text-primary-brown transition-colors"
                    >
                      329 234 8551 (Giovanni)
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "var(--bordeaux)" }}
                  >
                    <Mail size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--charcoal)" }}>
                      Email
                    </h3>
                    <a
                      href="mailto:info@fontevivolaranch.it"
                      className="text-gray-700 hover:text-primary-brown transition-colors"
                    >
                      info@fontevivolaranch.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "var(--primary-brown)" }}
                  >
                    <MessageCircle size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--charcoal)" }}>
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/393292348551"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary-brown transition-colors"
                    >
                      Scrivici su WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari */}
              <div className="bg-cream p-6 rounded-xl mb-8">
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
                  Orari di Apertura
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Lunedì - Venerdì:</span>
                    <span>9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sabato:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Domenica:</span>
                    <span>9:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form di Contatto */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: "var(--charcoal)" }}>
                Inviaci un Messaggio
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-brown"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-brown"
                    placeholder="tua@email.it"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-brown"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Oggetto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-brown"
                  >
                    <option value="">Seleziona un'opzione</option>
                    <option value="lezione">Prenotazione Lezione</option>
                    <option value="pony-club">Informazioni Pony Club</option>
                    <option value="pensione">Pensione Cavalli</option>
                    <option value="allevamento">Allevamento</option>
                    <option value="eventi">Eventi e Club House</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-brown resize-none"
                    placeholder="Scrivi qui il tuo messaggio..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg text-lg font-semibold text-white flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: isSubmitting ? "#999" : "var(--primary-brown)",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? (
                    "Invio in corso..."
                  ) : (
                    <>
                      Invia Messaggio
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
              Come Raggiungerci
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.697!2d12.22!3d42.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE0JzI0LjAiTiAxMsKwMTMnMTIuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Fontevivola Ranch"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;

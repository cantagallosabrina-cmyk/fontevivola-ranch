import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrizione */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/35x3zk52_FVR%20LOGO.jpeg"
                alt="Fontevivola Ranch"
                className="h-16 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Centro equestre specializzato in Monta Americana e Reining. Professionalità,
              passione e competenza nel cuore del Lazio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/fontevivola_ranch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--primary-brown)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bordeaux)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary-brown)";
                }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/fontevivola_ranch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--primary-brown)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bordeaux)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary-brown)";
                }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/393292348551"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: "var(--primary-brown)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bordeaux)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary-brown)";
                }}
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-serif">Servizi</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/scuola"
                  className="hover:text-warm-tan transition-colors duration-300"
                  style={{
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--warm-tan)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "inherit";
                  }}
                >
                  Scuola di Equitazione
                </Link>
              </li>
              <li>
                <Link
                  to="/reining"
                  className="hover:text-warm-tan transition-colors duration-300"
                  style={{
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--warm-tan)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "inherit";
                  }}
                >
                  Reining
                </Link>
              </li>
              <li>
                <Link
                  to="/pony-club"
                  className="hover:text-warm-tan transition-colors duration-300"
                  style={{
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--warm-tan)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "inherit";
                  }}
                >
                  Pony Club
                </Link>
              </li>
              <li>
                <Link
                  to="/pensione"
                  className="hover:text-warm-tan transition-colors duration-300"
                  style={{
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--warm-tan)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "inherit";
                  }}
                >
                  Pensione Cavalli
                </Link>
              </li>
              <li>
                <Link
                  to="/allevamento"
                  className="hover:text-warm-tan transition-colors duration-300"
                  style={{
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--warm-tan)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "inherit";
                  }}
                >
                  Allevamento
                </Link>
              </li>
              <li>
                <Link
                  to="/club-house"
                  className="hover:text-warm-tan transition-colors duration-300"
                  style={{
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "var(--warm-tan)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "inherit";
                  }}
                >
                  Club House & Eventi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-serif">Contatti</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" style={{ color: "var(--warm-tan)" }} />
                <span>Via delle Viole, 40<br />Sutri (VT)</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" style={{ color: "var(--warm-tan)" }} />
                <a
                  href="tel:+393292348551"
                  className="hover:text-warm-tan transition-colors duration-300"
                >
                  329 234 8551
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" style={{ color: "var(--warm-tan)" }} />
                <a
                  href="mailto:info@fontevivolaranch.it"
                  className="hover:text-warm-tan transition-colors duration-300"
                >
                  info@fontevivolaranch.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Fontevivola Ranch. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

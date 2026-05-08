import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/storia", label: "La Nostra Storia" },
    { path: "/scuola", label: "Scuola di Equitazione" },
    { path: "/reining", label: "Reining" },
    { path: "/pony-club", label: "Pony Club" },
    { path: "/allevamento", label: "Allevamento" },
    { path: "/pensione", label: "Pensione" },
    { path: "/club-house", label: "Club House" },
    { path: "/news", label: "News" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_8f5ba68b-fd02-4a1b-8cdb-d83c8bd065ee/artifacts/35x3zk52_FVR%20LOGO.jpeg"
              alt="Fontevivola Ranch Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary-brown font-semibold"
                    : "text-gray-700 hover:text-primary-brown"
                }`}
                style={{
                  color: isActive(link.path) ? "var(--primary-brown)" : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              className="px-6 py-2 rounded-lg font-semibold transition-all duration-300"
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
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "bg-primary-brown text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor: isActive(link.path) ? "var(--primary-brown)" : undefined,
                  color: isActive(link.path) ? "white" : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg font-semibold text-center"
              style={{
                backgroundColor: "var(--primary-brown)",
                color: "white",
              }}
            >
              Contatti
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

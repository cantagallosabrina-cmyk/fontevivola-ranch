import React, { useState, useEffect } from "react";

const HeroBanner = ({ images, title, subtitle, overlayOpacity = 0.6 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia immagine ogni 4 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div
        className="hero-overlay absolute inset-0"
        style={{ 
          zIndex: 2,
          opacity: overlayOpacity 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl" style={{ color: "var(--warm-tan)" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;

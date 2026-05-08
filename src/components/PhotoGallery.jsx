import React, { useEffect, useRef } from "react";

const PhotoGallery = ({ images, title = "Galleria Fotografica" }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = galleryRef.current?.querySelectorAll(".gallery-item");
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
            {title}
          </h2>
          <div className="section-divider"></div>
        </div>

        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item opacity-0 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;

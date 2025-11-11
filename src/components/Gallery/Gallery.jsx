import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";
import ContactInfo from "../Common/ContactInfo.jsx";

/* === AUTOMATYCZNE ŁADOWANIE OBRAZÓW === */
const images = Object.values(
  import.meta.glob("../../assets/gallery_pictures/*.{png,jpg,jpeg,webp}", {
    eager: true,
  })
).map((module) => module.default);

function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (index) => {
    setSelectedIdx(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = "auto";
  };

  const showPrev = (e) => {
    e?.stopPropagation?.();
    setSelectedIdx((i) => (i > 0 ? i - 1 : images.length - 1));
  };

  const showNext = (e) => {
    e?.stopPropagation?.();
    setSelectedIdx((i) => (i < images.length - 1 ? i + 1 : 0));
  };

  // Obsługa klawiatury: ESC, ←, →
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <section className="gallery-section py-5">
      <div className="container text-center">
        <h2 className="gallery-title mb-5 position-relative d-inline-block">
          Ślubne inspiracje
        </h2>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
              <img src={src} alt={`Inspiracja ${i + 1}`} className="gallery-img" />
            </div>
          ))}
        </div>
      </div>

      {/* === LIGHTBOX === */}
      {selectedIdx !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={showPrev}
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
            <img
              src={images[selectedIdx]}
              alt={`Podgląd zdjęcia ${selectedIdx + 1}`}
              className="lightbox-img"
            />
            <button
              className="lightbox-nav lightbox-next"
              onClick={showNext}
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <ContactInfo />
    </section>
  );
}

export default Gallery;

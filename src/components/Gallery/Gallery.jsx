import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";
import ContactInfo from "../Common/ContactInfo.jsx";

/*
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================
*/

/*
  === 📌 ZAŁADOWANIE OBRAZÓW DO GALERII ===

  import.meta.glob() — funkcja Vite, która automatycznie importuje
  WSZYSTKIE pliki graficzne z folderu gallery_pictures.

  ✔ działa automatycznie
  ✔ nie trzeba ręcznie importować każdego zdjęcia
  ✔ każde nowe zdjęcie dodane do folderu pojawi się w galerii
  ✔ sortowanie po nazwach plików (zgodnie z kolejnością w folderze)

  Dzięki temu galeria jest w 100% dynamiczna i skalowalna.
*/

const images = Object.entries(
  import.meta.glob("../../assets/gallery_pictures/*.{png,jpg,jpeg,webp}", {
    eager: true, // natychmiast ładuje ścieżki — brak opóźnień
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true }) // naturalne sortowanie nazw
  )
  .map(([_, module]) => module.default);



/*
  === 📌 KOMPONENT GALLERY ===

  Wyświetla:
  ✔ siatkę zdjęć
  ✔ lightbox (powiększenie zdjęcia)
  ✔ przełączanie strzałkami
  ✔ zamykanie ESC
  ✔ blokowanie scrolla podczas podglądu

  Komponent jest czysto prezentacyjny, stan dotyczy tylko indeksu zdjęcia.
*/

function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  /* --- OTWARCIE LIGHTBOXA --- */
  const openLightbox = (index) => {
    setSelectedIdx(index);
    document.body.style.overflow = "hidden"; // blokuje scroll tła
  };

  /* --- ZAMKNIĘCIE LIGHTBOXA --- */
  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = "auto";
  };

  /* --- NAWIGACJA (poprzednie) --- */
  const showPrev = useCallback((e) => {
    e?.stopPropagation?.();
    setSelectedIdx((i) => (i > 0 ? i - 1 : images.length - 1));
  }, []);

  /* --- NAWIGACJA (następne) --- */
  const showNext = useCallback((e) => {
    e?.stopPropagation?.();
    setSelectedIdx((i) => (i < images.length - 1 ? i + 1 : 0));
  }, []);


  /*
    === 📌 OBSŁUGA KLAWIATURY ===
    ESC → zamknij
    ← → przełącz zdjęcia
  */
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIdx, showPrev, showNext]);




  /* === RENDER === */
  return (
    <section className="gallery-section py-5">
      <div className="container text-center">
        
        {/* Tytuł galerii */}
        <h2 className="gallery-title mb-5 position-relative d-inline-block">
          Zobacz moje realizajce
        </h2>

        {/* Siatka zdjęć */}
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Inspiracja ${i + 1}`}
                className="gallery-img"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          ))}
        </div>
      </div>


      {/* === LIGHTBOX === */}
      {selectedIdx !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zamknięcie */}
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>

            {/* Strzałka lewa */}
            <button
              className="lightbox-nav lightbox-prev"
              onClick={showPrev}
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>

            {/* Wybrane zdjęcie */}
            <img
              src={images[selectedIdx]}
              alt={`Podgląd zdjęcia ${selectedIdx + 1}`}
              className="lightbox-img"
            />

            {/* Strzałka prawa */}
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
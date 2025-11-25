import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

/*
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================

  === 📌 KOMPONENT Scroll-To-Top ===

  Funkcjonalność:
  ✔ pokazuje przycisk dopiero po przewinięciu 300px w dół
  ✔ płynnie przewija stronę na samą górę
  ✔ posiada animację widoczności (CSS)
  ✔ lekki, prosty i skuteczny element UX

  Ten komponent możesz umieścić na każdej stronie, aby zapewnić
  użytkownikowi wygodny powrót na początek strony.
*/

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false); // 🔸 czy przycisk ma być widoczny?

  /*
  ------------------------------------------------------------
    📌 OBSERWACJA SCROLLA
    Po przekroczeniu 300px w dół — pokaż przycisk.
    Jeśli użytkownik przewinie wyżej, ukryj go.
  ------------------------------------------------------------
  */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // 🧹 cleanup
  }, []);

  /*
  ------------------------------------------------------------
    📌 PŁYNNE PRZEWIJANIE NA GÓRĘ
  ------------------------------------------------------------
  */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
  ------------------------------------------------------------
    📌 JSX — PRZYCISK SCROLL-TO-TOP
    Klasa .visible dodaje animację widoczności w CSS.
  ------------------------------------------------------------
  */
  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Przewiń na górę"
    >
      {/* Strzałka — CSS obraca ją o 180° w górę */}
      <span className="arrow">▾</span>
    </button>
  );
}

export default ScrollToTopButton;

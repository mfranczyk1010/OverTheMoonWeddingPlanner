import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

/*
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================

  === 📌 KOMPONENT NAWIGACJI (NAVBAR) ===

  Ten komponent odpowiada za:
  ✔ dynamiczną zmianę stylu po scrollowaniu
  ✔ mobilne menu (hamburger + animacja)
  ✔ aktywne podświetlenie wybranej sekcji
  ✔ zamykanie menu po kliknięciu poza nim
  ✔ przewijanie do góry po zmianie sekcji
  ✔ integrację z sekcjami SPA przez setSection()

  Całość jest w pełni responsywna i lekka.
*/

function Navigation({ setSection }) {
  const [scrolled, setScrolled] = useState(false);            // 🔸 czy navbar jest po scrollu?
  const [activeSection, setActiveSection] = useState("about"); // 🔸 aktualnie wybrana sekcja
  const [menuOpen, setMenuOpen] = useState(false);             // 🔸 mobilne menu on/off
  const menuRef = useRef(null);                                // 🔸 referencja do całego navbara

  /* --------------------------------------------------------
     📌 OBSERWACJA SCROLLA — navbar zmienia wygląd po 50px
  -------------------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --------------------------------------------------------
     📌 ZAMYKANIE MENU PO KLIKNIĘCIU POZA NIM
     Jeśli menu jest otwarte i użytkownik kliknie poza navbar,
     komponent zamknie menu automatycznie.
  -------------------------------------------------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  /* --------------------------------------------------------
     📌 ZMIANA SEKCJI + przewinięcie na górę + zamknięcie menu
  -------------------------------------------------------- */
  const handleNavClick = (section) => {
    setSection(section);
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`} ref={menuRef}>
      
      {/* -------------------- GÓRNY PASEK -------------------- */}
      <div className="navbar-top">
        {/* Logo (kliknięcie → powrót do sekcji O mnie) */}
        <h1 className="navbar-logo" onClick={() => handleNavClick("about")}>
          Over The Moon
        </h1>

        {/* --- HAMBURGER / X DLA MOBILNEGO MENU --- */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* -------------------- DOLNE MENU -------------------- */}
      <div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">

          <li
            className={`nav-item-custom ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            O mnie
          </li>

          <li
            className={`nav-item-custom ${activeSection === "offer" ? "active" : ""}`}
            onClick={() => handleNavClick("offer")}
          >
            Oferta
          </li>

          <li
            className={`nav-item-custom ${activeSection === "gallery" ? "active" : ""}`}
            onClick={() => handleNavClick("gallery")}
          >
            Galeria
          </li>

          <li
            className={`nav-item-custom ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >
            Kontakt
          </li>

          {/* 🔸 Ikona Instagram */}
          <li className="nav-item-custom instagram-icon">
            <a
              href="https://www.instagram.com/overthemoon_weddingplanner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} className="instagram-icon" />
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

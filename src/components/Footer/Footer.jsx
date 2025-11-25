import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

/*  
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================  
*/

/*
  === 📌 KOMPONENT Footer ===

  Odpowiada za wyświetlanie dolnej części strony, w tym:

  ✔ bieżący rok (automatycznie pobierany z Date())
  ✔ nazwę marki + imię wykonawcy
  ✔ link do Polityki Prywatności (sterowany przez setSection)
  ✔ sygnaturę autora strony w lewym dolnym rogu

  Struktura komponentu jest prosta i czysto prezentacyjna.
  Cała logika sprowadza się do kliknięcia, które zmienia sekcję
  wyświetlaną w aplikacji (SPA).
*/

function Footer({ setSection }) {
  return (
    <footer className="footer-wrapper">

      {/* === GŁÓWNY BLOK FOOTERA === */}
      <div className="footer-content">
        {/* Tekst praw autorskich z dynamiczną datą */}
        <p className="footer-text">
          © {new Date().getFullYear()} Over The Moon Wedding Planner Gosia Franczyk
        </p>

        {/* Link nawigacyjny do polityki prywatności */}
        <p
          className="footer-link"
          onClick={() => setSection("privacy")}
        >
          Polityka Prywatności
        </p>
      </div>

      {/* === PODPIS AUTORA STRONY ===
          Pozycjonowany absolutnie (w CSS) w lewym dolnym rogu.
          Rozwiązanie estetyczne — nie koliduje z layoutem reszty.
      */}
      <p className="footer-author">
        Strona wykonana przez: <strong>Maciej Franczyk</strong>
      </p>
    </footer>
  );
}

export default Footer;

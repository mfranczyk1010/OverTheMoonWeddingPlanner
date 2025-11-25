import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Offer.css";

import OfferImg1 from "../../assets/web_pictures/offer_bg1.webp";
import OfferImg2 from "../../assets/web_pictures/offer_bg2.webp";
import OfferImg3 from "../../assets/web_pictures/offer_bg3.webp";
import ContactInfo from "../Common/ContactInfo";

/*
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================

  === 📌 KOMPONENT OFERTY (3 warianty współpracy) ===

  Ten komponent odpowiada za:

  ✔ wyświetlanie trzech wariantów współpracy  
  ✔ efekt 60/40 – tekst + zdjęcie  
  ✔ eleganckie rozwijanie listy obowiązków (collapse)  
  ✔ animowane "Pokaż więcej / mniej"  
  ✔ automatyczne przeniesienie wybranego wariantu do formularza  
  ✔ integrację z Contact.jsx przez localStorage  
  ✔ pełną responsywność i lekki kod

  Całość utrzymana w premium stylu zgodnym z całą stroną.
*/

function Offer({ setSection }) {
  const [showMore, setShowMore] = useState({
    full: false,           // 🔸 sekcja PEŁNA ORGANIZACJA otwarta/zamknięta
    partial: false,        // 🔸 sekcja CZĘŚCIOWA ORGANIZACJA
    coordination: false,   // 🔸 sekcja KOORDYNACJA DNIA
  });

  /* --------------------------------------------------------
     📌 Zapamiętywanie wybranej oferty i przekierowanie
     do formularza kontaktowego (Contact.jsx)
  -------------------------------------------------------- */
  const handleContactRedirect = (offerName) => {
    localStorage.setItem("selectedOffer", offerName);
    setSection("contact");
  };

  /* --------------------------------------------------------
     📌 Przełączanie sekcji "Pokaż więcej"
  -------------------------------------------------------- */
  const toggleShow = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="offer-section py-5 d-flex flex-column align-items-center">
      <div className="container-fluid text-center px-0">
        {/* --- NAGŁÓWEK --- */}
        <div className="mb-5">
          <h2 className="offer-title mb-4 position-relative d-inline-block">
            Poznaj 3 warianty współpracy
          </h2>
          <p className="offer-desc mx-auto">
            Stwórzmy razem wydarzenie, które zachwyci każdego gościa.  
            Pomogę Ci zaplanować dzień, który będzie pełen magii, elegancji i spokoju.
          </p>
        </div>

        <div className="offer-cards-wrapper d-flex flex-column align-items-center gap-5">
          {/* === PEŁNA ORGANIZACJA === */}
          <div className="offer-card-split">
            <div className="offer-left">
              <h5 className="offer-card-title">Pełna organizacja ślubu i wesela</h5>
              <p>
                Nie wiecie od czego zacząć planowanie swojego ślubu? Oto jestem :)  
                Przejdę z Wami przez cały proces planowania – od koncepcji po dzień ślubu.
                Pomogę dobrać odpowiednich podwykonawców, wybrać motyw przewodni,
                dekoracje i dopilnować każdego szczegółu.
              </p>

              <p className="fw-bold mt-3 mb-2">Przybliżony zakres obowiązków:</p>

              <ul className="offer-list">
                <li>Wybór miejsca ślubu i przyjęcia</li>
                <li>Pomoc w wyborze motywu przewodniego wesela</li>
                <li>Selekcja wszystkich potrzebnych podwykonawców i analiza umów</li>
              </ul>

              <div className={`offer-collapse ${showMore.full ? "expanded" : "collapsed"}`}>
                <ul className="offer-list">
                  {[
                    "Przygotowanie i kontrola budżetu",
                    "Stworzenie harmonogramu przygotowań weselnych",
                    "Stały kontakt z Parą Młodą",
                    "Harmonogram dnia ślubu i potwierdzenie go z podwykonawcami",
                    "Obecność w dniu przyjęcia dwóch doświadczonych osób",
                    "Koordynacja pracy podwykonawców i komunikacja z dostawcami",
                    "Rozłożenie na sali papeterii, prezentów dla gości itd.",
                    "Dopilnowanie wszystkich ustalonych kwestii",
                    "Opieka nad Parą Młodą i gośćmi",
                    "Rozwiązywanie wszystkich nagłych sytuacji",
                    "Rozliczenie się z podwykonawcami (z pełnomocnictwem Pary Młodej)",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`offer-toggle-btn ${showMore.full ? "is-open" : ""}`}
                onClick={() => toggleShow("full")}
              >
                {showMore.full ? "Pokaż mniej" : "Pokaż więcej"}
                <span className="arrow">▾</span>
              </button>

              {showMore.full && (
                <div className="offer-footer mt-4 text-center">
                  <p className="fw-semibold">
                    Zainteresowana tą ofertą?{" "}
                    <span
                      className="offer-contact-link"
                      onClick={() =>
                        handleContactRedirect("Pełna organizacja ślubu i wesela")
                      }
                    >
                      Skontaktuj się ze mną →
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div
              className="offer-right"
              style={{ backgroundImage: `url(${OfferImg1})` }}
            ></div>
          </div>

          {/* === CZĘŚCIOWA ORGANIZACJA === */}
          <div className="offer-card-split">
            <div className="offer-left">
              <h5 className="offer-card-title">Częściowa organizacja ślubu i wesela</h5>
              <p>
                Macie już część podwykonawców, ale potrzebujecie pomocy w dopięciu szczegółów?  
                Pomogę znaleźć brakujące elementy i spiąć wszystko w całość!
              </p>

              <p className="fw-bold mt-3 mb-2">Przybliżony zakres obowiązków:</p>

              <ul className="offer-list">
                <li>Ustalenie zakresu współpracy na pierwszym spotkaniu</li>
                <li>Dobór brakujących podwykonawców i analiza umów</li>
                <li>Stały kontakt z Parą Młodą i doradzanie według potrzeb</li>
              </ul>

              <div className={`offer-collapse ${showMore.partial ? "expanded" : "collapsed"}`}>
                <ul className="offer-list">
                  {[
                    "Stworzenie dokładnego scenariusza przyjęcia",
                    "Koordynacja pracy podwykonawców i komunikacja z dostawcami",
                    "Obecność w dniu przyjęcia dwóch doświadczonych osób",
                    "Dopilnowanie winietek, papeterii i innych detali",
                    "Rozliczenie się z podwykonawcami (z pełnomocnictwem Pary Młodej)",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`offer-toggle-btn ${showMore.partial ? "is-open" : ""}`}
                onClick={() => toggleShow("partial")}
              >
                {showMore.partial ? "Pokaż mniej" : "Pokaż więcej"}
                <span className="arrow">▾</span>
              </button>

              {showMore.partial && (
                <div className="offer-footer mt-4 text-center">
                  <p className="fw-semibold">
                    Zainteresowana tą ofertą?{" "}
                    <span
                      className="offer-contact-link"
                      onClick={() =>
                        handleContactRedirect("Częściowa organizacja ślubu i wesela")
                      }
                    >
                      Skontaktuj się ze mną →
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div
              className="offer-right"
              style={{ backgroundImage: `url(${OfferImg2})` }}
            ></div>
          </div>

          {/* === KOORDYNACJA DNIA ŚLUBU === */}
          <div className="offer-card-split">
            <div className="offer-left">
              <h5 className="offer-card-title">Koordynacja dnia ślubu</h5>
              <p>
                Dzień ślubu to czas radości — nie stresu.  
                Zadbam, by wszystko przebiegało zgodnie z planem,  
                a Wy mogli w pełni cieszyć się chwilą.
              </p>

              <ul className="offer-list">
                <li>Czuwanie nad realizacją scenariusza</li>
                <li>Stała komunikacja z usługodawcami</li>
                <li>Rozwiązywanie nagłych sytuacji</li>
              </ul>

              <div className={`offer-collapse ${showMore.coordination ? "expanded" : "collapsed"}`}>
                <ul className="offer-list">
               <li>Koordynacja wejść, atrakcji i harmonogramu wydarzeń</li>
        <li>Opieka nad Parą Młodą, świadkami i kluczowymi gośćmi</li>
        <li>Nadzór nad terminowym przebiegiem wszystkich punktów uroczystości</li>
        <li>Bezpośredni kontakt z obsługą sali i podwykonawcami w dniu wydarzenia</li>
                </ul>
              </div>

              <button
                className={`offer-toggle-btn ${showMore.coordination ? "is-open" : ""}`}
                onClick={() => toggleShow("coordination")}
              >
                {showMore.coordination ? "Pokaż mniej" : "Pokaż więcej"}
                <span className="arrow">▾</span>
              </button>

             {showMore.coordination && (
  <div className="offer-footer mt-4 text-center">
    <p className="fw-semibold">
      Zainteresowana tą ofertą?{" "}
      <span
        className="offer-contact-link"
        onClick={() =>
          handleContactRedirect("Koordynacja dnia ślubu")
        }
      >
        Skontaktuj się ze mną →
      </span>
    </p>
  </div>
)}
            </div>
            <div
              className="offer-right"
              style={{ backgroundImage: `url(${OfferImg3})` }}
            ></div>
          </div>
        </div>
      </div>
          <ContactInfo/>
    </section>

  );
}

export default Offer;

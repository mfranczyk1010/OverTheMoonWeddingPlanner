import React from "react";
import "./Privacy.css";
import ContactInfo from "../Common/ContactInfo.jsx";

/*
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================

  === 📌 KOMPONENT POLITYKI PRYWATNOŚCI ===

  Ten komponent odpowiada za:

  ✔ wyświetlanie treści polityki prywatności  
  ✔ zachowanie struktury RODO w formie przejrzystej, czytelnej sekcji  
  ✔ przycisk powrotu do strony głównej  
  ✔ integrację z ContactInfo (dane kontaktowe w stopce)  
  ✔ w pełni responsywny układ z centralnym blokiem tekstu

  Komponent jest statyczny — nie zawiera logiki biznesowej,
  tylko prezentuje sformatowaną treść zgodną z prawem.
*/

function Privacy({ setSection }) {
  return (
    <section className="privacy-section py-5 d-flex flex-column align-items-center">
      
      {/* ----------------------------------------------------
         📌 GŁÓWNY KONTENER TREŚCI
      ---------------------------------------------------- */}
      <div className="privacy-container text-center">
        <h2 className="privacy-title mb-5 position-relative d-inline-block">
          Polityka Prywatności
        </h2>

        {/* ----------------------------------------------------
           📌 Sekcja 1 — Administrator danych
        ---------------------------------------------------- */}
        <p><strong>1. Administrator danych osobowych</strong></p>
        <p>
          Administratorem danych osobowych jest{" "}
          <strong>Over The Moon Wedding Planner (Małgorzata Franczyk)</strong>.
        </p>

        {/* Dane kontaktowe — oddzielone w osobnych <p> dla przejrzystości */}
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:weddingplanner.gosiafranczyk@gmail.com">
            weddingplanner.gosiafranczyk@gmail.com
          </a>
        </p>
        <p>
          <strong>Telefon:</strong>{" "}
          <a href="tel:+48662879423">+48 662 879 423</a>
        </p>


        {/* ----------------------------------------------------
           📌 Sekcja 2 — Zakres przetwarzania
        ---------------------------------------------------- */}
        <p><strong>2. Zakres przetwarzanych danych</strong></p>
        <p>
          Przetwarzane są dane przekazywane dobrowolnie w formularzu kontaktowym:
          imię, nazwisko, adres e-mail, numer telefonu oraz treść wiadomości.
        </p>

        {/* ----------------------------------------------------
           📌 Sekcja 3 — Cel przetwarzania
        ---------------------------------------------------- */}
        <p><strong>3. Cel przetwarzania</strong></p>
        <p>
          Dane są przetwarzane wyłącznie w celu udzielenia odpowiedzi na przesłane zapytanie
          zgodnie z art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).
        </p>

        {/* ----------------------------------------------------
           📌 Sekcja 4 — Odbiorcy danych
        ---------------------------------------------------- */}
        <p><strong>4. Odbiorcy danych</strong></p>
        <p>
          Dane mogą być przekazywane podmiotom technicznym (np. EmailJS),
          wyłącznie w zakresie niezbędnym do realizacji celu kontaktu.
        </p>

        {/* ----------------------------------------------------
           📌 Sekcja 5 — Czas przechowywania
        ---------------------------------------------------- */}
        <p><strong>5. Czas przechowywania</strong></p>
        <p>
          Dane są przechowywane przez okres niezbędny do realizacji odpowiedzi
          lub do momentu cofnięcia zgody przez użytkownika.
        </p>

        {/* ----------------------------------------------------
           📌 Sekcja 6 — Prawa użytkownika
        ---------------------------------------------------- */}
        <p><strong>6. Prawa użytkownika</strong></p>
        <ul>
          <li>dostęp do danych oraz uzyskanie ich kopii,</li>
          <li>sprostowanie danych,</li>
          <li>usunięcie danych („prawo do bycia zapomnianym”),</li>
          <li>ograniczenie przetwarzania,</li>
          <li>prawo wniesienia sprzeciwu wobec przetwarzania.</li>
        </ul>

        {/* ----------------------------------------------------
           📌 Sekcja 7 — Dobrowolność
        ---------------------------------------------------- */}
        <p><strong>7. Dobrowolność podania danych</strong></p>
        <p>
          Podanie danych jest dobrowolne, lecz konieczne,
          aby otrzymać odpowiedź na przesłane zapytanie.
        </p>

        {/* ----------------------------------------------------
           📌 Sekcja 8 — Zmiany polityki
        ---------------------------------------------------- */}
        <p><strong>8. Zmiany polityki prywatności</strong></p>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian
          w niniejszej polityce.
        </p>

        {/* ----------------------------------------------------
           📌 Przycisk powrotu na stronę główną
        ---------------------------------------------------- */}
        <div className="text-center mt-5">
          <button
            className="btn btn-outline-dark"
            onClick={() => setSection("about")}
          >
            Wróć do strony głównej
          </button>
        </div>
      </div>

      {/* ----------------------------------------------------
         📌 STOPKA KONTAKTU — spójność stron
      ---------------------------------------------------- */}
      <ContactInfo />
    </section>
  );
}

export default Privacy;

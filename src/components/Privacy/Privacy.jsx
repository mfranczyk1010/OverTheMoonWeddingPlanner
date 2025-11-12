import React from "react";
import "./Privacy.css";
import ContactInfo from "../Common/ContactInfo.jsx";

function Privacy({ setSection }) {
  return (
    <section className="privacy-section py-5 d-flex flex-column align-items-center">
      <div className="privacy-container text-center">
        <h2 className="privacy-title mb-5 position-relative d-inline-block">
          Polityka Prywatności
        </h2>

        <p><strong>1. Administrator danych osobowych</strong></p>
        <p>
          Administratorem danych osobowych jest <strong>Over The Moon Wedding Planner</strong> 
          (Małgorzata Franczyk). Kontakt: <p>
            <strong>Email:</strong>  <a href="mailto:weddingplanner.gosiafranczyk@gmail.com">weddingplanner.gosiafranczyk@gmail.com</a>
          </p>
          <p>
            <strong>Telefon:</strong> <a href="tel:+48662879423">+48 662 879 423</a>
          </p>  
        </p>

        <p><strong>2. Zakres przetwarzanych danych</strong></p>
        <p>
          Przetwarzane są dane przekazywane dobrowolnie przez użytkowników w formularzu kontaktowym:
          imię, nazwisko, adres e-mail, numer telefonu oraz treść wiadomości.
        </p>

        <p><strong>3. Cel przetwarzania</strong></p>
        <p>
          Dane osobowe są przetwarzane wyłącznie w celu udzielenia odpowiedzi na przesłaną wiadomość,
          zgodnie z art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).
        </p>

        <p><strong>4. Odbiorcy danych</strong></p>
        <p>
          Dane mogą być powierzane podmiotom świadczącym usługi techniczne (np. EmailJS),
          wyłącznie w zakresie niezbędnym do realizacji celów wskazanych powyżej.
        </p>

        <p><strong>5. Czas przechowywania</strong></p>
        <p>
          Dane są przetwarzane przez czas niezbędny do udzielenia odpowiedzi lub do momentu cofnięcia zgody.
        </p>

        <p><strong>6. Prawa użytkownika</strong></p>
        <ul>
          <li>dostęp do danych i uzyskanie ich kopii,</li>
          <li>sprostowanie danych,</li>
          <li>usunięcie danych („prawo do bycia zapomnianym”),</li>
          <li>ograniczenie przetwarzania,</li>
          <li>wniesienie sprzeciwu wobec przetwarzania.</li>
        </ul>

        <p><strong>7. Dobrowolność podania danych</strong></p>
        <p>
          Podanie danych jest dobrowolne, jednak niezbędne do otrzymania odpowiedzi na zapytanie.
        </p>

        <p><strong>8. Zmiany polityki prywatności</strong></p>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce.
        </p>

        <div className="text-center mt-5">
          <button className="btn btn-outline-dark" onClick={() => setSection("about")}>
            Wróć do strony głównej
          </button>
        </div>
      </div>

      <ContactInfo />
    </section>
  );
}

export default Privacy;

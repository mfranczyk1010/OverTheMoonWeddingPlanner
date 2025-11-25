import React from "react";
import "./ContactInfo.css";

/*  
===========================================================
  KOD JEST SKOMENTOWANY PRZEZ CHAT GPT,
  PISANY WŁASNORĘCZNIE HEJTERZE
===========================================================  
*/

/*
  === 📌 KOMPONENT ContactInfo ===
  Ten bardzo lekki komponent wyświetla skrócone dane kontaktowe,
  które są używane w kilku miejscach na stronie — głównie w stopce
  oraz na końcu sekcji takich jak About i Contact.

  ✔ Komponent jest czysty i prezentacyjny — nie ma stanu
  ✔ Dane kontaktowe są klikalne (tel:, mailto:)
  ✔ Można go łatwo umieszczać w dowolnej sekcji
  ✔ Zapewnia spójność wizualną i strukturalną w całym projekcie
*/

function ContactInfo() {
  return (
    <div className="contact-info-footer">
      {/* --- EMAIL --- */}
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:weddingplanner.gosiafranczyk@gmail.com">
          weddingplanner.gosiafranczyk@gmail.com
        </a>
      </p>

      {/* --- TELEFON --- */}
      <p>
        <strong>Telefon:</strong>{" "}
        <a href="tel:+48662879423">+48 662 879 423</a>
      </p>
    </div>
  );
}

export default ContactInfo;

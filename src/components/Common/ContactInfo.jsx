import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contact-info-footer">
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:weddingplanner.gosiafranczyk@gmail.com">weddingplanner.gosiafranczyk@gmail.com</a>
      </p>
      <p>
        <strong>Telefon:</strong>{" "}
        <a href="tel:+48662879423">+48 662 879 423</a>
      </p>
    </div>
  );
}

export default ContactInfo;

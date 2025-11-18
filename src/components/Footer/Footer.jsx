import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer({ setSection }) {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Over The Moon Wedding Planner Gosia Franczyk
        </p>

        <p
          className="footer-link"
          onClick={() => setSection("privacy")}
        >
          Polityka Prywatności
        </p>
      </div>

      {/* 🔹 PODPIS W LEWYM DOLNYM ROGU */}
      <p className="footer-author">
        Strona wykonana przez: <strong>Maciej Franczyk</strong>
      </p>
    </footer>
  );
}

export default Footer;

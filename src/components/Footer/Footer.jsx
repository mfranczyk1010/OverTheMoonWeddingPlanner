import React from "react";
import "./Footer.css";

function Footer({ setSection }) {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Over The Moon Wedding Planner
        </p>

        <p
          className="footer-link"
          onClick={() => setSection("privacy")}
        >
          Polityka Prywatności
        </p>
      </div>
    </footer>
  );
}

export default Footer;

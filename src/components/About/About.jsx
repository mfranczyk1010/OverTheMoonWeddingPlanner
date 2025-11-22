import React, { useEffect } from "react";
import ContactInfo from "../Common/ContactInfo.jsx";

/* === 🔥 ZMIENIONE NA WEBP === */
import bannerImage from "../../assets/web_pictures/banner.webp";
import Image from "../../assets/web_pictures/about.webp";
import ImageOffer1 from "../../assets/web_pictures/if1.webp";
import ImageOffer2 from "../../assets/web_pictures/if2.webp";
import ImageOffer3 from "../../assets/web_pictures/if3.webp";
import ImageEnd from "../../assets/web_pictures/endpic.webp";

import "./About.css";

function About({ setSection }) {

  // 🔹 Efekt pojawiania się elementów przy scrollu (zostaje)
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".about-title, .about-subtext, .about-subtitle, .testimonial-card, .offer-mini-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (sectionName) => {
    setSection(sectionName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* --- BANNER (bez lazy — musi być szybki) --- */}
      <div className="about-banner-wrapper">
        <img
          src={bannerImage}
          alt="Over The Moon Wedding"
          className="about-banner-img"
          decoding="async"
        />
      </div>

      {/* --- SEKCJA O MNIE --- */}
      <section className="about-section text-center">
        <h2 className="about-title">O mnie</h2>

        <div className="about-content d-flex">
          <div className="about-text-side">
            <p>
              Organizuję personalizowane i nowoczesne przyjęcia przepełnione
              miłością. Pomagam parom młodym przekuć marzenia w rzeczywistość.
              Najważniejsze dla mnie jest, aby ten dzień był absolutnie Wasz —
              taki, jakim go czujecie i pragniecie. Z pełnym zaangażowaniem
              dzielę się doświadczeniem, pomysłami i wsparciem na każdym etapie
              przygotowań, dbając o każdy detal. W dniu ślubu jestem z Wami,
              czuwając nad przebiegiem uroczystości, abyście mogli skupić się
              wyłącznie na przeżywaniu tej magicznej chwili — bez zbędnych trosk
              i zmartwień.
            </p>

            <p className="about-highlight mt-4">
              <strong>
                ZAUFAJCIE MI, A JA SPRAWIĘ, ŻE TEN DZIEŃ BĘDZIE DOKŁADNIE TAKI,
                JAKIM GO SOBIE WYMARZYLIŚCIE.
              </strong>
            </p>
          </div>

          <div className="about-photo-side">
            <img
              src={Image}
              alt="Gosia Wedding Planner"
              className="about-photo-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* --- REFERENCJE --- */}
        <h3 className="about-subtitle mt-5">Referencje</h3>
        <p className="about-subtext">
          Zobacz, co mówią moje Pary o naszej współpracy 💬
        </p>

        <div className="testimonials-grid mt-4">
          <div className="testimonial-card">
            <blockquote>
              “Mieliśmy ogromną przyjemność współpracować z Gosią przy
              organizacji naszego wesela 22.08.2025...”
            </blockquote>
            <p className="testimonial-author">Renata i Domnik</p>
          </div>

          <div className="testimonial-card">
            <blockquote>
              “Przeogromnie polecam współpracę! Gosia ma indywidualne podejście…”
            </blockquote>
            <p className="testimonial-author">Klaudia i Wojtek</p>
          </div>

          <div className="testimonial-card">
            <blockquote>
              “Współpraca z Gosią to czysta przyjemność!✨ ...”
            </blockquote>
            <p className="testimonial-author">Weronika i Dawid</p>
          </div>
        </div>

        {/* --- MINI SEKCJA OFERTA --- */}
        <div className="about-offer-preview mt-5">
          <h3 className="about-subtitle mb-4">Oferta</h3>
          <p className="about-subtext mb-5">
            Sprawdź, w jaki sposób mogę pomóc Ci w organizacji wymarzonego dnia 💍
          </p>

          <div className="offer-cards-mini">
            {[ 
              { img: ImageOffer1, title: "Pełna organizacja", desc: "Od koncepcji..." },
              { img: ImageOffer2, title: "Częściowa organizacja", desc: "Pomogę znaleźć..." },
              { img: ImageOffer3, title: "Koordynacja dnia ślubu", desc: "Czuwam nad przebiegiem..." }
            ].map((offer, i) => (
              <div key={i} className="offer-mini-card" onClick={() => navigateTo("offer")}>
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="offer-mini-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="offer-hover-overlay">SPRAWDŹ</div>
                <div className="offer-mini-content">
                  <h4>{offer.title}</h4>
                  <p>{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ZAPROSZENIE --- */}
        <div className="about-invite-section mt-5">
          <h3 className="about-subtitle">
            Zapraszam do pierwszego, niezobowiązującego spotkania 🤍
          </h3>
          <p className="about-subtext">
            Z przyjemnością opowiem o tym, jak przebiega współpraca  
            i w jaki sposób mogę pomóc Wam w stworzeniu idealnego dnia.
          </p>

          <img
            src={ImageEnd}
            alt="Spotkanie Over The Moon"
            className="about-invite-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* --- LINKI DOLNE --- */}
        <div className="about-links">
          <span className="about-link" onClick={() => navigateTo("offer")}>
            Oferta
          </span>
          <span className="about-link" onClick={() => navigateTo("gallery")}>
            Galeria
          </span>
          <span className="about-link" onClick={() => navigateTo("contact")}>
            Kontakt
          </span>
        </div>

        <ContactInfo />
      </section>
    </>
  );
}

export default About;

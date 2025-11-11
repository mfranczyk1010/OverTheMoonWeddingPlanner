import React, { useEffect } from "react";
import ContactInfo from "../Common/ContactInfo.jsx";
import bannerImage from "../../assets/web_pictures/banner.png";
import Image from "../../assets/web_pictures/about.jpg";
import ImageOffer1 from "../../assets/web_pictures/if1.jpg";
import ImageOffer2 from "../../assets/web_pictures/if2.jpg";
import ImageOffer3 from "../../assets/web_pictures/if3.jpg";
import ImageEnd from "../../assets/web_pictures/endpic.jpg";
import "./About.css";

function About({ setSection }) { // ⬅️ przyjmujemy setSection z App.jsx

  // 🔹 Efekt fade-in przy przewijaniu
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

  // 🔹 Pomocnicza funkcja — przełącza sekcję + przewija na górę
  const navigateTo = (sectionName) => {
    setSection(sectionName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* --- BANNER --- */}
      <div className="about-banner-full">
        <img
          src={bannerImage}
          alt="Over The Moon Wedding"
          className="about-banner-img"
        />
      </div>

      {/* --- SEKCJA O MNIE --- */}
      <section className="about-section text-center">
        <h2 className="about-title">O mnie</h2>

        <div className="about-content d-flex">
          {/* LEWA kolumna – tekst */}
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

          {/* PRAWA kolumna – zdjęcie */}
          <div className="about-photo-side">
            <img
              src={Image}
              alt="Gosia Wedding Planner"
              className="about-photo-img"
            />
          </div>
        </div>

        {/* --- REFERENCJE --- */}
        <h3 className="about-subtitle mt-5">Referencje</h3>
        <p className="about-subtext">
          Zobacz, co mówią Pary Młode o naszej współpracy 💬
        </p>

        <div className="testimonials-grid mt-4">
          <div className="testimonial-card">
            <blockquote>
              “Mieliśmy ogromną przyjemność współpracować z Gosią przy
              organizacji naszego wesela 22.08.2025. Uroczystość odbyła się w
              sali Forest i od początku do końca wszystko było dopięte na
              ostatni guzik. Gosia była niezwykle profesjonalna, uważna na
              detale i otwarta na nasze pomysły. Dzięki niej mogliśmy cieszyć
              się dniem bez stresu. Organizacja na najwyższym poziomie, świetna
              komunikacja i ogromne zaangażowanie. To był magiczny, niezapomniany
              dzień. Z całego serca polecamy! ❤️”
            </blockquote>
            <p className="testimonial-author">Karolina i Michał</p>
          </div>

          <div className="testimonial-card">
            <blockquote>
              “Przeogromnie polecam współpracę! 💗 Gosia ma indywidualne
              podejście do Klienta, dzięki czemu znalazła dla nas super
              kreatywne rozwiązania, których z pewnością sami byśmy nie
              znaleźli. No i cudowne wsparcie 💗 Mogliśmy cały czas liczyć na
              pomoc Gosi. Serdecznie wszystkim polecam :)”
            </blockquote>
            <p className="testimonial-author">Julia i Paweł</p>
          </div>

          <div className="testimonial-card">
            <blockquote>
              “Współpraca z Gosią to czysta przyjemność!✨ Znaleźliśmy ją
              przypadkiem na Instagramie i to był strzał w dziesiątkę! Pomogła
              nam zorganizować przepiękne wesele 💜💙 Wszystko spięte na
              ostatni guzik, zero stresu, bardzo nam pomogła przy koordynacji i
              miała świetne pomysły i wskazówki. Polecamy z całego serca! 💫”
            </blockquote>
            <p className="testimonial-author">Ania i Krzysztof</p>
          </div>
        </div>

        {/* --- MINI SEKCJA OFERTA --- */}
        <div className="about-offer-preview mt-5">
          <h3 className="about-subtitle mb-4">Oferta</h3>
          <p className="about-subtext mb-5">
            Sprawdź, w jaki sposób mogę pomóc Ci w organizacji wymarzonego dnia 💍
          </p>

          <div className="offer-cards-mini">

            <div className="offer-mini-card" onClick={() => navigateTo("offer")}>
              <img src={ImageOffer1} alt="Pełna organizacja" className="offer-mini-img" />
                  <div className="offer-hover-overlay">SPRAWDŹ</div>
              <div className="offer-mini-content">
                <h4>Pełna organizacja</h4>
                <p>
                  Od koncepcji po dzień ślubu — kompleksowa obsługa i pełne wsparcie na każdym etapie.
                </p>
              </div>
            </div>

          <div className="offer-mini-card" onClick={() => navigateTo("offer")}>
            <img src={ImageOffer2} alt="Częściowa organizacja" className="offer-mini-img" />
        <div className="offer-hover-overlay">SPRAWDŹ</div>
        <div className="offer-mini-content">
          <h4>Częściowa organizacja</h4>
          <p>
            Potrzebujecie pomocy w dograniu szczegółów? Pomogę znaleźć brakujących podwykonawców oraz spiąć wszystko w jedną całość!
          </p>
        </div>
          </div>

            <div className="offer-mini-card" onClick={() => navigateTo("offer")}>
              <img src={ImageOffer3} alt="Koordynacja dnia ślubu" className="offer-mini-img" />
               <div className="offer-hover-overlay">SPRAWDŹ</div>
              <div className="offer-mini-content">
                <h4>Koordynacja dnia ślubu</h4>
                <p>
                  Czuwam nad przebiegiem uroczystości, byś mógł w pełni cieszyć się chwilą — bez stresu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- ZAPROSZENIE DO SPOTKANIA --- */}
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
          />
        </div>

        {/* --- SUBTELNE ODNOŚNIKI --- */}
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

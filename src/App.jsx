// 🔹 App.jsx
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navigation from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Offer from "./components/Offer/Offer.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

function App() {
  const [section, setSection] = useState("about");

  const renderSection = () => {
    switch (section) {
      case "about": return <About setSection={setSection} />;   // ⬅️ DODANE
      case "offer": return <Offer setSection={setSection} />;
      case "contact": return <Contact setSection={setSection} />;
      case "gallery": return <Gallery setSection={setSection} />;
      case "privacy": return <Privacy setSection={setSection} />;

      default: return <About setSection={setSection} />;
    }
  };

  return (
    <>
      <Navigation setSection={setSection} />
      <div className="app-wrapper">
        <div className="content-box">{renderSection()}</div>
      </div>
      <Footer setSection={setSection} />
       <ScrollToTop />
    </>
  );
}

export default App;

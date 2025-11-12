import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Image from "../../assets/web_pictures/kontakt.jpg";
import ContactInfo from "../Common/ContactInfo.jsx";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const selectedOffer = localStorage.getItem("selectedOffer");
    if (selectedOffer) {
      setFormData((prev) => ({ ...prev, service: selectedOffer }));
      localStorage.removeItem("selectedOffer");
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, []);

  const isPhone = (p) => {
    if (!p) return true;
    else{
    let phone = p.replace(/ /g, "");
    if (phone.startsWith("+")) phone = phone.slice(3);
    return phone.length >= 9 && phone.length <= 15 && /^\d+$/.test(phone);}
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value ? "" : "Podaj imię.";
      case "surname":
        return value ? "" : "Podaj nazwisko.";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Podaj poprawny adres email.";
      case "phone":
        return isPhone(value)
          ? ""
          : "Telefon 9–15 cyfr (może zawierać spacje i +)";
      case "service":
        return value ? "" : "Wybierz rodzaj usługi.";
      case "message":
        return value.length > 20 ? "" : "Treść jest za krótka.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    for (let key in formData) {
      formErrors[key] = validateField(key, formData[key]);
    }
    setErrors(formErrors);

    if (Object.values(formErrors).every((err) => !err)) {
      emailjs
        .send("service_92f304o", "template_zws4can", formData, "_0jTn9LfwORp9TkME")
        .then(
          () => {
            setSubmitted(true);
            setFormData({
              name: "",
              surname: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
          },
          () => {
            alert("Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie.");
          }
        );
    }
  };

  return (
    <section className="section">
      {/* GÓRNA SEKCJA INFORMACYJNA */}
      <div className="contact-info-section row justify-content-center align-items-center mb-5">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <div
            className="contact-image"
            style={{ backgroundImage: `url(${Image})` }}
          />
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-start contact-text">
          <h3>Skontaktuj się z nami!</h3>
          <p>
            Ślub to nie tylko dekoracje i wybór sukni ślubnej, a przede
            wszystkim setki decyzji, terminy, umowy, emocje i stres.
          </p>
          <p>
            Wedding Planner to Twój spokój i pewność, że wszystko będzie
            dopilnowane ✨  
            Kalendarz na rok 2026 i 2027 otwarty – porozmawiajmy 🤍
          </p>
          <p>
            <strong>Email:</strong>  <a href="mailto:weddingplanner.gosiafranczyk@gmail.com">weddingplanner.gosiafranczyk@gmail.com</a>
          </p>
          <p>
            <strong>Telefon:</strong> <a href="tel:+48662879423">+48 662 879 423</a>
          </p>
        </div>
      </div>

      {/* FORMULARZ */}
      <div ref={formRef} className="row justify-content-center">
        <h2 className="text-center mb-4">Wyślij mi wiadomość 💌</h2>
        <div className="col-12 col-md-10 col-lg-8">
          <div className="contact-form-box shadow-sm">
            {submitted && (
              <div className="alert alert-success d-flex align-items-center justify-content-between">
                <div>Mail został wysłany pomyślnie!</div>
                <button
                  className="btn-close"
                  onClick={() => setSubmitted(false)}
                ></button>
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Imię <span className="reqired">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nazwisko <span className="reqired">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  isInvalid={!!errors.surname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.surname}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email <span className="reqired">*</span></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefon</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rodzaj usługi <span className="reqired">*</span></Form.Label>
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  isInvalid={!!errors.service}
                >
                  <option value="">-- Wybierz --</option>
                  <option>Pełna organizacja ślubu i wesela</option>
                  <option>Częściowa organizacja ślubu i wesela</option>
                  <option>Koordynacja dnia ślubu</option>
                  <option>Kontakt w innej sprawie</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.service}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Treść wiadomości ({formData.message.length}/20) <span className="reqired">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="outline-dark" type="submit" className="w-100">
                Wyślij
              </Button>
               <Form.Label>
                 <span className="reqired">* wymagane</span>
                </Form.Label>
            </Form>
          </div>
        </div>
      </div>
      <ContactInfo />
    </section>
  );
}

export default Contact;

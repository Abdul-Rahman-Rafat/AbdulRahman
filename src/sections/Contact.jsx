import { useState } from "react";
import emailjs from "emailjs-com";
import {
  RiCloseLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiSendPlaneLine,
} from "@remixicon/react";
import { contactDetails, socialLinks } from "../data/personal";

function Contact({ text, sectionRef }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleOpenForm() {
    setIsFormOpen(true);
    setFormMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    emailjs
      .sendForm(
        "service_u9cc6jn",
        "template_a4g0mzk",
        event.target,
        "nulMAMw1RIWdtD6Ig",
      )
      .then(
        () => {
          setFormMessage(
            "Message sent successfully. I'll get back to you soon.",
          );
          setIsSubmitting(false);
          event.target.reset();
        },
        () => {
          setFormMessage("Error sending message. Please try again later.");
          setIsSubmitting(false);
        },
      );
  }

  function getDetailIcon(labelKey) {
    if (labelKey === "contactPhoneLabel") return <RiPhoneLine size={17} />;
    if (labelKey === "contactLocationLabel") return <RiMapPinLine size={17} />;
    return <RiMailLine size={17} />;
  }

  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-wrap">
        <div className={`contact-inner ${isFormOpen ? "form-open" : ""}`}>
          <div className="contact-info-panel">
            <div className="section-label">{text.sectionContact}</div>
            <h2 className="contact-big">
              {text.contactTitle}
              <br />
              {text.contactTitleSecond} <em>{text.contactTitleEm}</em>
            </h2>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div className="contact-detail" key={detail.labelKey}>
                  <div className="contact-detail-icon">
                    {getDetailIcon(detail.labelKey)}
                  </div>
                  <div>
                    <div className="contact-detail-label">
                      {text[detail.labelKey]}
                    </div>
                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      <span>{text[detail.valueKey]}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-row">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  key={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              className="btn-primary contact-open-btn"
              type="button"
              onClick={handleOpenForm}
            >
              {text.sendMessage}
              {/* <RiSendPlaneLine size={14} /> */}
            </button>
          </div>

          {isFormOpen && (
            <div className="contact-form-panel">
              <button
                className="contact-close-btn"
                type="button"
                onClick={() => setIsFormOpen(false)}
                aria-label="Close form"
              >
                <RiCloseLine size={18} />
              </button>

              <h3>{text.sendMessage}</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">{text.yourName}</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder={text.namePlaceholder}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">{text.yourEmail}</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder={text.emailPlaceholder}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">{text.yourMessage}</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={text.messagePlaceholder}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  className="btn-primary contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : text.sendMessage}
                  {/* <RiSendPlaneLine size={15} /> */}
                </button>
                {formMessage && (
                  <p className="contact-form-message">{formMessage}</p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;

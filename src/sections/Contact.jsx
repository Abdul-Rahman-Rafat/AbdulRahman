import { contactDetails, socialLinks } from "../data/personal";

function Contact({ text, sectionRef }) {
  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-wrap">
        <div className="contact-inner">
          <div className="section-label">{text.sectionContact}</div>
          <h2 className="contact-big">
            {text.contactTitle}<br />
            {text.contactTitleSecond} <em>{text.contactTitleEm}</em>
          </h2>

          <div className="contact-details">
            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.labelKey}>
                <div className="contact-detail-label">{text[detail.labelKey]}</div>
                {detail.href ? (
                  <a href={detail.href}>{detail.value}</a>
                ) : (
                  <span>{text[detail.valueKey]}</span>
                )}
              </div>
            ))}
          </div>

          <div className="social-row">
            {socialLinks.map((link) => (
              <a href={link.url} target="_blank" rel="noreferrer" className="social-btn" key={link.name}>
                {link.name}
              </a>
            ))}
          </div>
          <a href="mailto:abdorafat489@gmail.com" className="btn-primary">{text.sendMessage}</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

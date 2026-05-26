import { RiMoonLine, RiSunLine } from "@remixicon/react";

function Navbar({
  text,
  theme,
  language,
  onThemeToggle,
  onLanguageToggle,
  onScrollToSection,
  activeSection,
  sectionRefs,
}) {
  return (
    <nav>
      <div className="nav-logo">AR.dev</div>
      <ul className="nav-links">
        <li>
          <button
            className={`nav-link-btn ${activeSection === "about" ? "active" : ""}`}
            type="button"
            onClick={() => onScrollToSection(sectionRefs.about.ref, sectionRefs.about.id)}
          >
            {text.navAbout}
          </button>
        </li>
        <li>
          <button
            className={`nav-link-btn ${activeSection === "skills" ? "active" : ""}`}
            type="button"
            onClick={() => onScrollToSection(sectionRefs.skills.ref, sectionRefs.skills.id)}
          >
            {text.navSkills}
          </button>
        </li>
        <li>
          <button
            className={`nav-link-btn ${activeSection === "projects" ? "active" : ""}`}
            type="button"
            onClick={() => onScrollToSection(sectionRefs.projects.ref, sectionRefs.projects.id)}
          >
            {text.navProjects}
          </button>
        </li>
        <li>
          <button
            className={`nav-link-btn ${activeSection === "contact" ? "active" : ""}`}
            type="button"
            onClick={() => onScrollToSection(sectionRefs.contact.ref, sectionRefs.contact.id)}
          >
            {text.navContact}
          </button>
        </li>
      </ul>
      <div className="nav-controls">
        <button
          className={`nav-toggle-btn ${theme === "light" ? "active" : ""}`}
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <RiSunLine size={15} />
          ) : (
            <RiMoonLine size={15} />
          )}
        </button>
        <div className="nav-divider"></div>
        <button
          className={`nav-toggle-btn ${language === "ar" ? "active" : ""}`}
          onClick={onLanguageToggle}
          aria-label="Toggle language"
        >
          {/* <RiTranslate2 size={14} /> */}
          {language === "ar" ? "EN" : "AR"}
        </button>
        <div className="nav-divider"></div>
        <button className="nav-cta" type="button" onClick={() => onScrollToSection(sectionRefs.contact.ref, sectionRefs.contact.id)}>
          {text.navHire}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

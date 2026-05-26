import { RiMoonLine, RiSunLine } from "@remixicon/react";

function Navbar({
  text,
  theme,
  language,
  onThemeToggle,
  onLanguageToggle,
  onScrollToSection,
  sectionRefs,
}) {
  return (
    <nav>
      <div className="nav-logo">AR.dev</div>
      <ul className="nav-links">
        <li>
          <button className="nav-link-btn" type="button" onClick={() => onScrollToSection(sectionRefs.about)}>
            {text.navAbout}
          </button>
        </li>
        <li>
          <button className="nav-link-btn" type="button" onClick={() => onScrollToSection(sectionRefs.skills)}>
            {text.navSkills}
          </button>
        </li>
        <li>
          <button className="nav-link-btn" type="button" onClick={() => onScrollToSection(sectionRefs.projects)}>
            {text.navProjects}
          </button>
        </li>
        <li>
          <button className="nav-link-btn" type="button" onClick={() => onScrollToSection(sectionRefs.contact)}>
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
        <button className="nav-cta" type="button" onClick={() => onScrollToSection(sectionRefs.contact)}>
          {text.navHire}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

function Navbar({ text, theme, language, onThemeToggle, onLanguageToggle }) {
  return (
    <nav>
      <div className="nav-logo">AR.dev</div>
      <ul className="nav-links">
        <li><a href="#about">{text.navAbout}</a></li>
        <li><a href="#skills">{text.navSkills}</a></li>
        <li><a href="#projects">{text.navProjects}</a></li>
        <li><a href="#contact">{text.navContact}</a></li>
      </ul>
      <div className="nav-controls">
        <button
          className={`nav-toggle-btn ${theme === "light" ? "active" : ""}`}
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          <span>{theme === "dark" ? "☀" : "☾"}</span>
        </button>
        <div className="nav-divider"></div>
        <button
          className={`nav-toggle-btn ${language === "ar" ? "active" : ""}`}
          onClick={onLanguageToggle}
          aria-label="Toggle language"
        >
          {language === "ar" ? "EN" : "AR"}
        </button>
        <div className="nav-divider"></div>
        <a href="#contact" className="nav-cta">{text.navHire}</a>
      </div>
    </nav>
  );
}

export default Navbar;

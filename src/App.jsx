import { useEffect, useRef, useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import RocketNavigator from "./components/RocketNavigator";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills";
import { translations } from "./data/translations";

function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const text = translations[language];
  const sections = [
    { id: "home", label: "Home", ref: homeRef },
    { id: "about", label: "About", ref: aboutRef },
    { id: "skills", label: "Skills", ref: skillsRef },
    { id: "projects", label: "Projects", ref: projectsRef },
    { id: "contact", label: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const root = document.documentElement;
    const isArabic = language === "ar";

    root.classList.toggle("light", theme === "light");
    root.classList.toggle("rtl", isArabic);
    root.setAttribute("lang", language);
    root.setAttribute("dir", isArabic ? "rtl" : "ltr");
  }, [theme, language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            setTimeout(() => element.classList.add("visible"), Number(element.dataset.delay || 0));
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".skill-item").forEach((element, index) => {
      element.dataset.delay = index * 50;
      observer.observe(element);
    });

    document.querySelectorAll(".project-card, .project-more").forEach((element, index) => {
      element.dataset.delay = index * 90;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observedSections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "skills", ref: skillsRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.dataset.section);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    observedSections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.dataset.section = section.id;
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleLanguageToggle() {
    setLanguage(language === "en" ? "ar" : "en");
  }

  function scrollToSection(sectionRef, sectionId) {
    if (sectionId) {
      setActiveSection(sectionId);
    }

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <BackgroundCanvas />
      <CustomCursor />
      <Navbar
        text={text}
        theme={theme}
        language={language}
        onThemeToggle={handleThemeToggle}
        onLanguageToggle={handleLanguageToggle}
        onScrollToSection={scrollToSection}
        activeSection={activeSection}
        sectionRefs={{
          about: { ref: aboutRef, id: "about" },
          skills: { ref: skillsRef, id: "skills" },
          projects: { ref: projectsRef, id: "projects" },
          contact: { ref: contactRef, id: "contact" },
        }}
      />
      <RocketNavigator sections={sections} activeSection={activeSection} onScrollToSection={scrollToSection} />
      <Hero text={text} sectionRef={homeRef} onScrollToSection={scrollToSection} projectsRef={projectsRef} />
      <About text={text} sectionRef={aboutRef} onScrollToSection={scrollToSection} contactRef={contactRef} />
      <Skills text={text} sectionRef={skillsRef} />
      <Projects text={text} sectionRef={projectsRef} />
      <Contact text={text} sectionRef={contactRef} />
      <Footer text={text} />
    </>
  );
}

export default App;

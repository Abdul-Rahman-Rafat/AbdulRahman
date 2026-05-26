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
  const text = translations[language];
  const sections = [
    { label: "Home", ref: homeRef },
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
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

  function handleThemeToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleLanguageToggle() {
    setLanguage(language === "en" ? "ar" : "en");
  }

  function scrollToSection(sectionRef) {
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
        sectionRefs={{
          about: aboutRef,
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      <RocketNavigator sections={sections} onScrollToSection={scrollToSection} />
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

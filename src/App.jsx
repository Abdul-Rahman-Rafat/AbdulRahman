import { useEffect, useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
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
  const text = translations[language];

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
      />
      <Hero text={text} />
      <About text={text} />
      <Skills text={text} />
      <Projects text={text} />
      <Contact text={text} />
      <Footer text={text} />
    </>
  );
}

export default App;

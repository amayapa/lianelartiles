/* ======================= IMPORTATIONS ======================= */
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage";
import Header from "./Components/header";
import Footer from "./Components/footer";
import React, { useState, useEffect } from "react";
import About from "./Components/aboutMe";
import Contact from "./Components/contactme";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Skills from "./Components/skills";
import IsMobile from "ismobilejs";

function App() {
  /* ======================= STATE & VARS ======================= */
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [isMobile, setIsMobile] = useState(false);
  const [languages, setLanguages] = useState({
    eng: true,
    esp: false,
    fre: false,
  });

  const html = document.querySelector("#root");
  const root = document.querySelector(":root");
  const colors = getComputedStyle(root);
  const bgLightImage = colors.getPropertyValue("--bg-light-img");
  const bgLightPortraitImage = colors.getPropertyValue(
    "--bg-light-img-portrait"
  );
  const bgImage = colors.getPropertyValue("--bg-img");
  const bgPortraitImage = colors.getPropertyValue("--bg-img-portrait");
  const bgColorDark = colors.getPropertyValue("--bg-color-dark");
  const bgColorLight = colors.getPropertyValue("--bg-color-light");
  const textColorDark = colors.getPropertyValue("--text-color-dark");
  const textColorLight = colors.getPropertyValue("--text-color-light");
  const footerColorDark = colors.getPropertyValue("--footer-color-dark");
  const footerColorLight = colors.getPropertyValue("--footer-color-light");
  const bgGradientDarkA = colors.getPropertyValue("--bg-gradient-dark-a");
  const bgGradientDarkB = colors.getPropertyValue("--bg-gradient-dark-b");
  const bgGradientLightA = colors.getPropertyValue("--bg-gradient-light-a");
  const bgGradientLightB = colors.getPropertyValue("--bg-gradient-light-b");
  const ftDarkHoverColor = colors.getPropertyValue("--ft-dark-hover-color");
  const ftLightHoverColor = colors.getPropertyValue("--ft-light-hover-color");
  const shadowHeaderDark = colors.getPropertyValue("--shadow-header-dark");
  const shadowHeaderLight = colors.getPropertyValue("--shadow-header-light");
  const textCRDark = colors.getPropertyValue("--text-copyRight-dark");
  const textCRLight = colors.getPropertyValue("--text-copyRight-light");
  const bgCardDark = colors.getPropertyValue("--bg-card-dark");
  const bgCardLight = colors.getPropertyValue("--bg-card-light");
  const msgContainerDark = colors.getPropertyValue("--msg-container-dark");
  const msgContainerLight = colors.getPropertyValue("--msg-container-light");
  const msgDark = colors.getPropertyValue("--msg-dark");
  const msgLight = colors.getPropertyValue("--msg-light");

  /* ======================= FUNCTIONS ======================= */
  useEffect(() => {
    const userAgent = window.navigator;
    setIsMobile(IsMobile(userAgent).any);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    switchMode();
    // eslint-disable-next-line
  }, [darkMode]);

  const switchMode = () => {
    if (darkMode) {
      html.style.setProperty("--bg-img", bgImage);
      html.style.setProperty("--bg-img-portrait", bgPortraitImage);
      html.style.setProperty("--bg-color-dark", bgColorDark);
      html.style.setProperty("--bg-color-light", bgColorLight);
      html.style.setProperty("--footer-color-dark", footerColorDark);
      html.style.setProperty("--footer-color-light", footerColorLight);
      html.style.setProperty("--bg-gradient-dark-a", bgGradientDarkA);
      html.style.setProperty("--bg-gradient-dark-b", bgGradientDarkB);
      html.style.setProperty("--text-color-dark", textColorDark);
      html.style.setProperty("--ft-color-dark", textColorLight);
      html.style.setProperty("--ft-dark-hover-color", ftDarkHoverColor);
      html.style.setProperty("--shadow-header-dark", shadowHeaderDark);
      html.style.setProperty("--bg-card-dark", bgCardDark);
      html.style.setProperty("--text-copyRight-dark", textCRLight);
      html.style.setProperty("--msg-container-dark", msgContainerDark);
      html.style.setProperty("--msg-dark", msgDark);
    } else {
      html.style.setProperty("--bg-img", bgLightImage);
      html.style.setProperty("--bg-img-portrait", bgLightPortraitImage);
      html.style.setProperty("--bg-color-dark", bgColorLight);
      html.style.setProperty("--bg-color-light", bgColorDark);
      html.style.setProperty("--footer-color-dark", footerColorLight);
      html.style.setProperty("--footer-color-light", footerColorDark);
      html.style.setProperty("--bg-gradient-dark-a", bgGradientLightA);
      html.style.setProperty("--bg-gradient-dark-b", bgGradientLightB);
      html.style.setProperty("--text-color-dark", textColorLight);
      html.style.setProperty("--ft-color-dark", textColorDark);
      html.style.setProperty("--ft-dark-hover-color", ftLightHoverColor);
      html.style.setProperty("--shadow-header-dark", shadowHeaderLight);
      html.style.setProperty("--text-copyRight-dark", textCRDark);
      html.style.setProperty("--bg-card-dark", bgCardLight);
      html.style.setProperty("--msg-container-dark", msgContainerLight);
      html.style.setProperty("--msg-dark", msgLight);
    }
  };

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
  }
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  /* ======================= RENDERING ======================= */
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header darkMode={darkMode} languages={languages} />
        </Route>
        <Route exact path="/">
          <LandingPage languages={languages} />
        </Route>
        <Route path="/about">
          <About languages={languages} />
        </Route>
        <Route path="/contact">
          <Contact languages={languages} />
        </Route>
        <Route path="/education">
          <Education languages={languages} darkMode={darkMode} />
        </Route>
        <Route path="/projects">
          <Projects
            languages={languages}
            darkMode={darkMode}
            isMobile={isMobile}
          />
        </Route>
        <Route path="/resume">
          <Resume languages={languages} />
        </Route>
        <Route path="/skills">
          <Skills languages={languages} />
        </Route>
        <Route path="/">
          <Footer
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            languages={languages}
            setLanguages={setLanguages}
            isMobile={isMobile}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;

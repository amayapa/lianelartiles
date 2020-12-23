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

function App() {
  /* ======================= STATE & VARS ======================= */
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [language, setLanguage] = useState({
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
  /* ======================= FUNCTIONS ======================= */
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  useEffect(() => {
    if (darkMode) {
      html.style.setProperty("--bg-img", bgImage);
      html.style.setProperty("--bg-img-portrait", bgPortraitImage);
      html.style.setProperty("--bg-color-dark", bgColorDark);
      html.style.setProperty("--footer-color-dark", footerColorDark);
      html.style.setProperty("--bg-gradient-dark-a", bgGradientDarkA);
      html.style.setProperty("--bg-gradient-dark-b", bgGradientDarkB);
      html.style.setProperty("--text-color-dark", textColorDark);
      html.style.setProperty("--ft-color-dark", textColorLight);
      html.style.setProperty("--ft-dark-hover-color", ftDarkHoverColor);
      html.style.setProperty("--shadow-header-dark", shadowHeaderDark);
    } else {
      html.style.setProperty("--shadow-header-dark", shadowHeaderLight);
      html.style.setProperty("--bg-img", bgLightImage);
      html.style.setProperty("--bg-img-portrait", bgLightPortraitImage);
      html.style.setProperty("--bg-color-dark", bgColorLight);
      html.style.setProperty("--footer-color-dark", footerColorLight);
      html.style.setProperty("--bg-gradient-dark-a", bgGradientLightA);
      html.style.setProperty("--bg-gradient-dark-b", bgGradientLightB);
      html.style.setProperty("--text-color-dark", textColorLight);
      html.style.setProperty("--ft-color-dark", textColorDark);
      html.style.setProperty("--ft-dark-hover-color", ftLightHoverColor);
    }
  }, [darkMode]);

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
    <div className="App html">
      <Router>
        <div className="general-container">
          <Route path="/">
            <Header darkMode={darkMode} language={language} />
          </Route>
          <Route exact path="/">
            <LandingPage language={language} />
          </Route>
          <Route path="/about">
            <About language={language} />
          </Route>
          <Route path="/contact">
            <Contact language={language} />
          </Route>
          <Route path="/education">
            <Education language={language} />
          </Route>
          <Route path="/projects">
            <Projects language={language} />
          </Route>
          <Route path="/resume">
            <Resume language={language} />
          </Route>
          <Route path="/skills">
            <Skills language={language} />
          </Route>
          <Route path="/">
            <Footer
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              setLanguage={setLanguage}
            />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;

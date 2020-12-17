import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage";
import Header from "./Components/header";
import Footer from "./Components/footer";
import React, { useState, use } from "react";
import About from "./Components/aboutMe";
import Contact from "./Components/contactme";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Skills from "./Components/skills";

function App() {
  const [state, setstate] = useState("asdf");
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={Footer} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/skills" component={Skills} />
      </Router>
    </div>
  );
}

export default App;

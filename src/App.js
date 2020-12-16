import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage";
import Header from "./Components/header";
import Footer from "./Components/footer";
import React, { useState, use } from "react";
import Education from "./Components/education";

function App() {
  const [state, setstate] = useState("asdf");
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={Footer} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={Footer} />
        <Route path="/contact" component={Footer} />
        <Route path="/education" component={Education} />
      </Router>
    </div>
  );
}

export default App;

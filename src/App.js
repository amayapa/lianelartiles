import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage";
import Header from "./Components/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Route path="/landing" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;

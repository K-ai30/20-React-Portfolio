import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./assets/css/global.css";
import FooterNav from "./components/Footer/Footer";
import HeaderNav from "./components/Header/Header";
import About from "./components/AboutMe/About";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import SkillsPage from "./components/SkillsPage/Skills";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/#portfolio" component={PortfolioPage} />
          <Route path="/#technical" component={SkillsPage} />
          <Route path="/#contact" component={ContactPage} />
        </Switch>
        <FooterNav />
      </div>
    </Router>
  );
}

export default App;

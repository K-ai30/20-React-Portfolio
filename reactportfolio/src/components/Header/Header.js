import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import "./Header.css";

function HeaderNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-border">
      <a
        className="navbar-brand d-flex align-items-center text-white custom-background"
        href="#About"
      >
        Alia Kyle Perry
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Router>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn nav-link" id="aboutBtn" to="/">
                <i className="fas fa-user"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn nav-link" id="portfolioBtn" to="/#portfolio">
                <i className="fas fa-laptop-code"></i> Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn nav-link"
                id="techSkillsBtn"
                to="/#technical"
              >
                <i className="fas fa-code"></i> Technical
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn nav-link" id="contactBtn" to="/#contact">
                <i className="far fa-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    </nav>
  );
}

export default HeaderNav;

import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

import history from "../../history";

const Header = props => {
  const path = history.location.pathname;

  return (
    <header className="header container masthead mb-auto">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className={`nav-brand ${path === "/" ? "active" : ""}`}>
          <b>Cutter Construction</b>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
            <li className={`nav-item ${path === "/about" ? "active" : ""}`}>
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
            </li>
            <li className={`nav-item ${path === "/services" ? "active" : ""}`}>
              <Link className="nav-link" to="/services">
                SERVICES
              </Link>
            </li>
            <li className={`nav-item ${path === "/gallery" ? "active" : ""}`}>
              <Link className="nav-link" to="/gallery">
                GALLERY
              </Link>
            </li>
            <li className={`nav-item ${path === "/contact" ? "active" : ""}`}>
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      <div className="call-action">
        <a href="tel:5304011493">CALL US: 530-401-1493</a>
      </div>
    </header>
  );
};

export default Header;

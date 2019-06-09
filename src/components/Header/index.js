import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className="header container masthead mb-auto">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="nav-brand" to="#">
          <span className="brand-0">CUTTER</span>{" "}
          <span className="brand-1">Construction</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
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
        <a href="tel:5302681602">CALL US: 530-268-1602</a>
      </div>
    </header>
  );
};

export default Header;

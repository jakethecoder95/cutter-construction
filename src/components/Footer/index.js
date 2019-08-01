import "./Footer.scss";
import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <small>
        © {new Date().getFullYear()} Cutter Construction created by{" "}
        <a
          href="https://jakethecoder95.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JR Development
        </a>
      </small>

      <small>License #884996</small>
    </footer>
  );
};

export default Footer;

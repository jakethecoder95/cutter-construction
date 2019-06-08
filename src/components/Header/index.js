import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header class="cover-container masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">Cover</h3>
        <nav class="nav nav-masthead justify-content-center">
          <Link class="nav-link active" to="#">
            Home
          </Link>
          <Link class="nav-link" to="#">
            Features
          </Link>
          <Link class="nav-link" to="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

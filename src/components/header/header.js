import React from "react";
import "./header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link to="/">WEB DEV</Link>
          </div>
          <div className="menu">MENU</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

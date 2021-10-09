import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./hamburger";

const Header = ({ history }) => {
  //State of the menu button
  const [btnState, setBtnState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  //Page change on click
  useEffect(() => {
    //Listen for page change
    history.listen(() => {
      setBtnState({ clicked: false, menuName: "Menu" });
    });
  });

  const handleMenu = () => {
    if (btnState.initial === false) {
      setBtnState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      console.log(btnState);
    } else if (btnState.clicked === true) {
      setBtnState({
        clicked: !btnState.clicked,
        menuName: "Menu",
      });
      console.log(btnState);
    } else if (btnState.clicked === false) {
      setBtnState({
        clicked: !btnState.clicked,
        menuName: "Menu",
      });
      console.log(btnState);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link to="/">HOME</Link>
          </div>
          <div className="menu">
            <button onClick={handleMenu}>MENU</button>
          </div>
        </div>
      </div>
      <Hamburger btnState={btnState} />
    </header>
  );
};

export default withRouter(Header);

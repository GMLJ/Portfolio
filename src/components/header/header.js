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
  //State for disabled button
  const [disabled, setDisabled] = useState(false);

  //Page change on click
  useEffect(() => {
    //Listen for page change
    history.listen(() => {
      setBtnState({ clicked: false, menuName: "Menu" });
    });
  });

  const handleMenu = () => {
    disableMenu();
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

  // Menu button disabled or not
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <header>
      <div className="container">
        <div className="row">
          <button className="menu" disabled={disabled} onClick={handleMenu}>
            WORK
          </button>
        </div>
      </div>
      <Hamburger btnState={btnState} />
    </header>
  );
};

export default withRouter(Header);

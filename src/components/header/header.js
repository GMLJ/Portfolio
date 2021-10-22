import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";

import Hamburger from "./elements/contact";

const Header = ({ history, transition }) => {
  //State of the menu button
  const [btnState, setBtnState] = useState({
    initial: false,
    clicked: null,
  });

  //State for disabled button (triggers during opening and closing animations)
  const [disabled, setDisabled] = useState(false);

  //Page change on click
  useEffect(() => {
    //Listen for page change
    history.listen(() => {
      setBtnState({ clicked: false });
    });
  });

  const handleMenu = () => {
    disableMenu();
    if (btnState.initial === false) {
      setBtnState({
        initial: null,
        clicked: true,
      });
      console.log(btnState);
    } else if (btnState.clicked === true) {
      setBtnState({
        clicked: !btnState.clicked,
      });
      console.log(btnState);
    } else if (btnState.clicked === false) {
      setBtnState({
        clicked: !btnState.clicked,
      });
      console.log(btnState);
    }
  };

  // Menu button disabled (triggers during opening and closing animations)
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <motion.div
      className="headerClass"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, ...transition },
      }}
    >
      <header
        style={{ cursor: btnState.clicked === true ? "none" : "default" }}
      >
        <div className="container">
          <div className="row">
            <button className="menu" disabled={disabled} onClick={handleMenu}>
              Contact
            </button>
          </div>
        </div>
        <Hamburger btnState={btnState} />
      </header>
    </motion.div>
  );
};

export default withRouter(Header);

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ btnState }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  // let hoverBack = useRef(null);
  // let line1 = useRef(null);
  // let line2 = useRef(null);
  // let line3 = useRef(null);

  useEffect(() => {
    if (btnState.clicked === false) {
      //close menu
      staggerClose(revealMenu, revealMenuBackground);
    } else if (
      btnState.clicked === true ||
      (btnState.clicked === true && btnState.initial === null)
    ) {
      //open menu
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [btnState]);

  const staggerClose = (node1, node2) => {
    const closeDuration = 0.8;
    const closeStagger = 0.07;
    gsap.to([node1, node2], {
      duration: closeDuration,
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: closeStagger,
      },
    });
    gsap.to(menu, {
      duration: closeDuration + closeStagger,
      css: { display: "none" },
    });
  };

  const staggerReveal = (node1, node2) => {
    gsap.to(menu, {
      duration: 0,
      css: { display: "block" },
    });
    gsap.to([node1, node2], {
      duration: 0,
      opacity: 1,
      height: "100%",
    });
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        {/* <div ref={(el) => (hoverBack = el)} className="hover-background"></div> */}
        <div className="hover-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    {/* <Link ref={(el) => (line2 = el)} to="/solutions"> */}
                    <a
                      href="https://www.linkedin.com/in/matthias-guilbert/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINKEDIN
                    </a>
                  </li>
                  <li>
                    {/* <Link ref={(el) => (line3 = el)} to="/contact-us"> */}
                    <a
                      href="https://github.com/GMLJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </a>
                  </li>
                  <li>
                    {/* <Link ref={(el) => (line1 = el)} to="/opportunities"> */}
                    <a
                      href="https://codepen.io/GMLJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CODEPEN
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:guilbertmatthias32@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      EMAIL
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://github.com/GMLJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;

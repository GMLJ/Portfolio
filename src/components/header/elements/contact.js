import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Cube from "./cube";

const Hamburger = ({ btnState }) => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  const [canScroll, setCanScroll] = useState(true);
  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  useEffect(() => {
    if (btnState.clicked === false) {
      //close menu
      staggerClose(revealMenu, revealMenuBackground);
      setCanScroll(true);
    } else if (
      btnState.clicked === true ||
      (btnState.clicked === true && btnState.initial === null)
    ) {
      //open menu
      staggerReveal(revealMenuBackground, revealMenu);
      setCanScroll(false);
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

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  const [cubeParam, setCubeParam] = useState({
    color: "#ed3833",
    speed: 5,
    // url: "/images/shopping.jpg",
  });

  return (
    <div ref={(el) => (menu = el)} className="contact-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <nav>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/matthias-guilbert/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={() =>
                  setCubeParam({ color: "#ed3833", speed: 15 })
                }
                onMouseOut={() => setCubeParam({ color: "#ed3833", speed: 5 })}
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GMLJ"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={() =>
                  setCubeParam({ color: "#ed3833", speed: 15 })
                }
                onMouseOut={() => setCubeParam({ color: "#ed3833", speed: 5 })}
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/GMLJ"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={() =>
                  setCubeParam({ color: "#ed3833", speed: 15 })
                }
                onMouseOut={() => setCubeParam({ color: "#ed3833", speed: 5 })}
              >
                CODEPEN
              </a>
            </li>
            <li>
              <a
                href="mailto:guilbertmatthias32@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={() =>
                  setCubeParam({ color: "#ed3833", speed: 15 })
                }
                onMouseOut={() => setCubeParam({ color: "#ed3833", speed: 5 })}
              >
                EMAIL
              </a>
            </li>
            <div
              className="cursor"
              style={{ left: cursorX + "px", top: cursorY + "px" }}
            ></div>
          </ul>
        </nav>
        <Cube
          cubeColor={cubeParam.color}
          cubeSpeed={cubeParam.speed}
          // cubeUrl={cubeParam.url}
        />
      </div>
    </div>
  );
};

export default Hamburger;

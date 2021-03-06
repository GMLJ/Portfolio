import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";

//Component
import ScrollForMore from "./elements/ScrollForMore.jsx";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Hero = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  // const x = useTransform(scrollYProgress, [0, 0.1], ["100%", "80%"]);
  const y = useTransform(scrollYProgress, [0, 0.3], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], ["1", "0"]);

  const typeWritterStyle = () => {
    if (window.innerWidth > 600) {
      return {
        fontFamily: "HelveticaNeue-CondensedBold",
        color: "#0f1624",
        fontWeight: 500,
        fontSize: "1.5rem",
      };
    } else {
      return {
        fontFamily: "HelveticaNeue-CondensedBold",
        color: "#0f1624",
        fontWeight: 100,
        fontSize: "0.5rem",
      };
    }
  };
  const typeWritterStyles = typeWritterStyle();

  return (
    <div className="heroContainer">
      <div className="top-row">
        <div className="jobAndName">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.5, ...transition },
            }}
            className="details"
          >
            <TypeWriterEffect
              textStyle={{ typeWritterStyles }}
              startDelay={2500}
              className="devWeb"
              text="D??veloppeur Web"
              typeSpeed={60}
              hideCursorAfterText="true"
            />
          </motion.div>
          <motion.div style={{ opacity: opacity }} className="portfolio">
            <motion.span variants={firstName} className="first">
              <motion.span variants={letter}>M</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>h</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>s</motion.span>
            </motion.span>
            <motion.span variants={lastName} className="last">
              <motion.span variants={letter}>G</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>b</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>t</motion.span>
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="bottom-row">
        <motion.div
          className="thumbnail-single"
          // style={{ width: x }}
          initial={{
            y: "-50%",
            width: imageDetails.width,
            height: imageDetails.height,
            borderTopLeftRadius: "50%",
            borderTopRightRadius: "50%",
          }}
          animate={{
            y: 0,
            width: "100%",
            height: "50vh",
            borderTopLeftRadius: "0%",
            borderTopRightRadius: "0%",
            transition: { delay: 0.2, ...transition },
          }}
        >
          <motion.img
            style={{ scale: scale, x: y }}
            initial={{ scale: 1.1, y: "5%" }}
            animate={{
              transition: { delay: 0.2, ...transition },
              y: window.innerWidth > 1440 ? -200 : 0,
            }}
            src={require("../../images/MatthiasGuilbert.webp")}
            alt="Artwork by Izzat Emmanuel"
          />
        </motion.div>
        <ScrollForMore />
      </div>
    </div>
    // </div>
  );
};

export default Hero;

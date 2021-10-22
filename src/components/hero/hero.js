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
      delayChildren: 0.8,
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.8,
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const x = useTransform(scrollYProgress, [0, 0.4], ["0", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["1", "0"]);

  return (
    <div className="container fluid">
      <div className="row center top-row">
        <div className="top">
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
              textStyle={{
                fontFamily: "HelveticaNeue-CondensedBold",
                color: "#1e1f13",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              startDelay={2500}
              className="devWeb"
              text="Développeur Web"
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
      <div className="row bottom-row">
        <div className="bottom">
          <div className="image-container-single">
            <motion.div
              style={{ x: x }}
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
                height: window.innerWidth > 1440 ? 800 : 400,
                borderTopLeftRadius: "0%",
                borderTopRightRadius: "0%",
                transition: { delay: 0.2, ...transition },
              }}
              className="thumbnail-single"
            >
              <div className="frame-single">
                <motion.img
                  style={{ scale: scale }}
                  initial={{ scale: 1.1, y: "5%" }}
                  animate={{
                    transition: { delay: 0.2, ...transition },
                    y: window.innerWidth > 1440 ? -200 : 0,
                  }}
                  src={require("../../images/MatthiasGuilbert.webp")}
                  alt="Artwork by Izzat Emmanuel"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <ScrollForMore />
      </div>
    </div>
  );
};

export default Hero;

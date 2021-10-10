import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Header from "../../components/header/header";

//Components
import ScrollForMore from "../../components/scrollForMore";

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

const AboutMe = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const x = useTransform(scrollYProgress, [0, 0.4], ["0", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["1", "0"]);

  const [canScroll, setCanScroll] = useState(false);
  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <motion.div
        className="headerClass"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.5, ...transition },
        }}
      >
        <Header />
      </motion.div>

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
              <div className="devWeb">Développeur Web</div>
            </motion.div>
            <motion.div style={{ opacity: opacity }} className="aboutMe">
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
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              A LITTLE BIT <br />
              ABOUT ME
            </h2>
            <p>
              I am Matthias Guilbert, a WEB DEV from Paris. It has not always
              been as such though... Before I fell in love with programming, I
              was 10+ years a LEADER in various fields of work such as the
              FRENCH NAVY COMMANDOS AND RIFLEMEN ARCHAEOLOGY SPORTS COACHING VIP
              SECURITY TEXTILE INDUSTRY ARTS AND CULTURE... A happy/bumpy road !
              However, I always felt inspired by people with the specific
              technical skills to build from the ground up. I always knew a day
              will come when I'll have the opportunity to be one of them. I now
              dedicate 100% of my time to help DREAMS COME TO LIFE through
              CODING.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
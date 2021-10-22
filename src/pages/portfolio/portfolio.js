import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Work from "../../components/work/work";

//Components
import BouncingBalls from "../../components/BouncingLogos";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Portfolio = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const colorFade = useTransform(
    scrollYProgress,
    [1.2, 2],
    ["#fff", "#010020"]
  );

  //Block scroll on enter page animation
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
      className="single"
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header transition={transition} />
      <Hero imageDetails={imageDetails} />

      <motion.div
        className="background-fade"
        style={{ backgroundColor: colorFade }}
      >
        <div className="container">
          <div className="rotateWebDev">
            <h2 class="rotateWeb">WEB</h2>
            <h2>DEV</h2>
          </div>
          <div className="row">
            <div className="profileBox">
              <img
                className="profilePicture"
                src={require("../../images/profile.png")}
                alt="profile"
              />
            </div>
            <p>
              I am Matthias Guilbert, a FRONT END DEV 👨‍💻 from Paris making his
              way to FULLSTACK.
              <br />
              <br />
              I love to work with HTML, CSS, SASS, JAVASCRIPT, REACT, NODE JS,
              MONGO DB...
              <br />
              <BouncingBalls />
              <br />
              It has not always been as such though... <br />
              Before I fell in love with programming, I was 10+ years a LEADER
              in various fields of work such as : the French Navy Commandos and
              Riflemen 🎖️, Archaeology ⛏️ , Sports Coaching 🏋️ Textile Industry
              👕, Arts and Culture 🎨 ...
              <br />
              <br />A happy/bumpy road ! However, I always felt inspired by
              people with the specific technical skills to build from the ground
              up. I always knew a day will come when I'll have the opportunity
              to be one of them. I now dedicate 100% of my time to help DREAMS
              COME TO LIFE through CODING.
            </p>
          </div>
        </div>

        <Work />
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;

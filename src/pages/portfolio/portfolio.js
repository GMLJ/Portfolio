import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Work from "../../components/work/work";

//Components
import AboutMe from "../../components/aboutMe/aboutMe";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Portfolio = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const colorFade = useTransform(
    scrollYProgress,
    [1.2, 2],
    ["#f1f1f1", "#010020"]
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
      className="portfolioContainer"
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
        <AboutMe />
        <Work />
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;

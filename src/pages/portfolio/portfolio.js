import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

//COMPONENTS
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import AboutMe from "../../components/aboutMe/aboutMe";
import Work from "../../components/work/work";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const colorFadeResponsive =
  window.innerWidth > 700 ? [0.19, 0.22] : [0.15, 0.17];

const Portfolio = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const colorFade = useTransform(scrollYProgress, colorFadeResponsive, [
    "#f1f1f1",
    "#0f1624",
  ]);

  // Block scroll on enter page animation
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
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default Portfolio;

import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import WorkCards from "../workCards/workCards";

//Components
import Particle from "./elements/Particle";

const Work = () => {
  const { scrollYProgress } = useViewportScroll();
  const backgroundFade = useTransform(
    scrollYProgress,
    [1.2, 2],
    ["#fff", "#0F1624"]
  );
  return (
    <>
      <motion.div
        className="particles"
        style={{ backgroundColor: backgroundFade }}
      >
        <h2>
          <span>WORK</span>
        </h2>

        <Particle />
      </motion.div>
      <WorkCards />
    </>
  );
};

export default Work;

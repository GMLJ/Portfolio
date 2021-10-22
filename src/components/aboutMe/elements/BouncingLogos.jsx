import React from "react";
import { SiBlueprint, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const BouncingBalls = () => {
  return (
    <div className="bouncingLogos">
      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
        alt="HTML logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 0,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
        alt="CSS logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 0.5,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
        alt="SASS logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 1,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        alt="JavaScript logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 1.5,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
        alt="REACT logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 2,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
        alt="NodeJS logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 2.5,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>

      <motion.div
        style={{
          margin: "0 0.4rem 0 0.8rem",
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 3,
          },
        }}
        animate={{
          y: ["35%", "15%"],
        }}
      >
        <SiMongodb size="2.5rem" color="#4AA44E" />
      </motion.div>

      <motion.img
        src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
        alt="VSCode logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 3.5,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
      <motion.img
        src="https://camo.githubusercontent.com/926050f1c795978fee869e0b07f678b4a2a4dc6360fd85ca2ea882a5c6394e18/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3237302f3237303739382e706e67"
        alt="Github logo"
        style={{
          scale: 0.5,
        }}
        transition={{
          y: {
            duration: 0.2,
            yoyo: Infinity,
            ease: "easeOut",
            delay: 4,
          },
        }}
        animate={{
          y: ["10%", "-10%"],
        }}
      ></motion.img>
    </div>
  );
};

export default BouncingBalls;

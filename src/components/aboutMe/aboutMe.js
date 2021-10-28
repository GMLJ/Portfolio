import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

//Components
import BouncingBalls from "./elements/BouncingLogos";

//Picture
import profile from "../../images/profile.png";

const AboutMe = ({ txtColorFade }) => {
  return (
    <div className="containerAboutMe">
      <div className="rotateWebDev">
        <h2 class="rotateWeb">WEB</h2>
        <h2>DEV</h2>
      </div>
      <div className="profileBox">
        <img className="profilePicture" src={profile} alt="profile" />
      </div>
      <motion.div className="descriptionBox" style={{ color: txtColorFade }}>
        <p>
          Salut, je suis un DÉVELOPPEUR FRONT END 👨‍💻 en chemin ver le FULLSTACK.
          <br />
          <br />
          J'aime travailler avec du HTML, CSS, SASS, JAVASCRIPT, REACT, NODE JS,
          MONGO DB...
          <br />
          <BouncingBalls />
          <br />
          Les choses n'ont pourtant pas toujours été ainsi... <br />
          Avant de tomber amoureux de la programmation informatique j'ai été
          pendant 10+ années un LEADER dans de nombreux secteurs pro:
          <br />
          Marine Nationale 🎖️, archéologie ⛏️ , coaching sportif 🏋️ Industrie
          textile 👕, Arts et Culture 🎨 ...
          <br />
          <br />
          Un joyeux sentier, sinueux et peu encombré !
          <br />
          Pourtant, j'ai toujours été inspiré par les personnes possédant les
          compétences techniques pointues pour construire quelque chose à partir
          de rien. Je savais qu'un jour, indubitablement, je grossirais leurs
          rangs.
          <br />
          <br />
          Je dédie désormais 100% de mon temps à faire de RÊVES des RÉALITÉS
          grâce au CODE.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;

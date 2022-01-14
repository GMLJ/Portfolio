import React from "react";
import { motion } from "framer-motion";

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
          Salut, je suis Matthias, CHEF DE PROJET.
          <br />
          <br />
          J'aime aussi bidouiller en HTML, CSS, SASS, JAVASCRIPT, REACT, NODE
          JS, MONGO DB...
          <br />
          <BouncingBalls />
          <br />
          Avant de tomber amoureux de la programmation informatique j'ai été
          pendant 10+ années un LEADER dans de nombreux secteurs pro:
          <br />
          Marine Nationale 🎖️, archéologie ⛏️ , coaching sportif 🏋️ Industrie
          textile 👕, Arts et Culture 🎨 ...
          <br />
          <br />
          Un joyeux sentier, sinueux et peu encombré !
          <br />
          <br />
          J'ai récemment perfectionné mes compétences en code dans le but
          inavoué de transitionner vers des rôles de chef de projet dans
          l'industrie tech 👨🏻‍💻
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;

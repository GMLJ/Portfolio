import React from "react";

//Components
import BouncingBalls from "./elements/BouncingLogos";

const AboutMe = () => {
  return (
    <div className="containerAboutMe">
      <div className="rotateWebDev">
        <h2 class="rotateWeb">WEB</h2>
        <h2>DEV</h2>
      </div>
      <div className="profileBox">
        <img
          className="profilePicture"
          src={require("../../images/profile.png")}
          alt="profile"
        />
      </div>
      <div className="descriptionBox">
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
          pendant 10+ années un LEADER dans de nombreux secteurs pro: Marine
          Nationale 🎖️, archéologie ⛏️ , coaching sportif 🏋️ Industrie textile
          👕, Arts et Culture 🎨 ...
          <br />
          <br />
          Un joyeux sentier, sinueux et peu encombré ! Pourtant, j'ai toujours
          été inspiré par les personnes possédant les compétences techniques
          pointues pour construire quelque chose à partir de rien. J'ai toujours
          su qu'un jour, je grossirais leurs rangs. Je dédie désormais 100% de
          mon temps à faire de RÊVES des RÉALITÉS grâce au CODE.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

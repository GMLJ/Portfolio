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
          I am Matthias Guilbert, a FRONT END DEV 👨‍💻 from Paris making his way
          to FULLSTACK.
          <br />
          <br />
          I love to work with HTML, CSS, SASS, JAVASCRIPT, REACT, NODE JS, MONGO
          DB...
          <br />
          <BouncingBalls />
          <br />
          It has not always been as such though... <br />
          Before I fell in love with programming, I was 10+ years a LEADER in
          various fields of work such as : the French Navy Commandos and
          Riflemen 🎖️, Archaeology ⛏️ , Sports Coaching 🏋️ Textile Industry 👕,
          Arts and Culture 🎨 ...
          <br />
          <br />A happy/bumpy road ! However, I always felt inspired by people
          with the specific technical skills to build from the ground up. I
          always knew a day will come when I'll have the opportunity to be one
          of them. I now dedicate 100% of my time to help DREAMS COME TO LIFE
          through CODING.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

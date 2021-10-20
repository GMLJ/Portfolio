import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 6,
          },
          color: {
            value: ["#e1185d", "#ed3833", "#ffffff", "#1b75bc"],
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
      }}
      height="110vh"
    />
  );
};

export default Particle;

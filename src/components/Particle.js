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
            value: 150,
          },
          size: {
            value: 6,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
      height="110vh"
    />
  );
};

export default Particle;

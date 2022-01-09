import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
          },
          size: {
            value: 6,
          },
          // color: {
          //   value: ["#ed3833", "#ffffff", "#1b75bc"],
          // },
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

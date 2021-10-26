import React from "react";
import Particles from "react-particles-js";

const ParticleProjects = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 15,
          },
          size: {
            value: 40,
          },
          color: {
            value: ["#ed3833", "#ffffff", "#1b75bc"],
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

export default ParticleProjects;

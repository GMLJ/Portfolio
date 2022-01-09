import React from "react";
import Particles from "react-tsparticles";

const ParticleProjects = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
          },
          size: {
            value: 30,
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
      height="20vh"
    />
  );
};

export default ParticleProjects;

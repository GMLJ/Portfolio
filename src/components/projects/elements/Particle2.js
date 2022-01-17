import React from "react";
import Particles from "react-tsparticles";

const ParticleProjects = () => {
  return (
    <Particles
      width="100vw"
      height="20vh"
      options={{
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          rotate: {
            value: 0,
            random: false,
            direction: "clockwise",
            animation: {
              enable: false,
              speed: 5,
              sync: false,
            },
          },
          move: {
            enable: true,
            outMode: "out",
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
            options: {
              circle: [
                {
                  particles: {
                    color: {
                      value: "#f00",
                    },
                    move: {
                      direction: "top",
                    },
                  },
                },
                {
                  particles: {
                    color: {
                      value: "#00f",
                    },
                    move: {
                      direction: "bottom",
                    },
                  },
                },
              ],
            },
          },
          size: {
            value: 16,
          },
        },
      }}
    />
  );
};

export default ParticleProjects;

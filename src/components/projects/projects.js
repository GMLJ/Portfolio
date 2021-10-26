import React from "react";
import ProjectsCards from "../projectsCards/projectsCards";
import Particle from "../work/elements/Particle";

const Work = () => {
  return (
    <>
      <div className="projects">
        <h2>
          <span>PROJECTS</span>
        </h2>
        <Particle />
      </div>
      <ProjectsCards />
    </>
  );
};

export default Work;

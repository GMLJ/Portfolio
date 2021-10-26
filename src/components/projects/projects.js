import React from "react";
import ProjectsCards from "../projectsCards/projectsCards";
import ParticleProjects from "./elements/Particle2";

const Work = () => {
  return (
    <>
      <div className="projects">
        <h2>
          <span>PROJETS</span>
        </h2>
        <ParticleProjects />
      </div>
      <ProjectsCards />
    </>
  );
};

export default Work;

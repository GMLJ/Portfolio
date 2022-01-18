import React from "react";
import WorkCards from "../workCards/workCards";

//Components
import Particle from "./elements/Particle";

const Work = () => {
  return (
    <>
      <div className="particles">
        <h2>
          <span>WORK</span>
        </h2>
        <Particle />
      </div>
      <WorkCards />
    </>
  );
};

export default Work;

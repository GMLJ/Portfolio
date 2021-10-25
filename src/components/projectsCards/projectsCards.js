import React from "react";
import { projects } from "../../constants/constants";

const ProjectsCards = () => {
  return (
    <div className="projectsCardContainer">
      {projects.map(({ title, description, image, tags, source, id }) => (
        <div className="projectsCard" key={id}>
          <div className="projectsImgContainer">
            <img src={image} />
          </div>
          <div className="projectsHalfContainer">
            <div className="projectsHeaderCard">
              <a href={source} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </div>
            <div className="projectsHr" />
            <div className="projectsCardInfo">{description}</div>
            <div className="projectsHr" />

            <div className="projectsBottomCard">
              <div className="projectsTagList">
                {tags.map((tag, i) => (
                  <div className="projectsTag" key={i}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="projectsBtnLink">
                <a
                  className="projectsExternalLinks"
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  code
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;

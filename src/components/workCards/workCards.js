import React from "react";
import { works } from "../../constants/constants";

const WorkCards = () => {
  return (
    <div id="works">
      <div className="workCardsContainer">
        <div className="cardContainer">
          {works.map(
            ({ title, description, image, tags, source, visit, id }) => (
              <div className="workCard" key={id}>
                <video
                  loop
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                  src={image}
                />
                <div className="halfContainer">
                  <div className="titleContent">
                    <div className="headerCard">{title}</div>
                    <div className="hr" />
                  </div>
                  <div className="cardInfo">{description}</div>
                  <div className="hr" />

                  <div className="bottomCard">
                    <div className="stack">Stack</div>
                    <div className="tagList">
                      {tags.map((tag, i) => (
                        <div className="tag" key={i}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="utilityList">
                    <a
                      className="externalLinks"
                      href={visit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      code
                    </a>
                    <a
                      className="externalLinks"
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCards;

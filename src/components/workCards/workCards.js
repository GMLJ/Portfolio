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
                <img src={image} />
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
                  <div className="externalLinks" href={visit}>
                    Code
                  </div>
                  <div className="externalLinks" href={source}>
                    Website
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

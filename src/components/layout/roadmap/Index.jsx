import React from "react";
import { boxTimelineDatas } from "../../mock/BoxTimelineDatas";
import BoxTimeline from "../../molecules/boxTimeline/Index";

import "./style.scss";

const Roadmap = () => {
  return (
    <section className="roadmap section container">
      <h2 className="section__title">NFT roadmap</h2>
      <span className="small-tagline"></span>
      <span className="big-tagline"></span>

      <p className="section__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
        aliquet turpis elit elit natoque varius
      </p>
      <div className="timeline">
        {boxTimelineDatas.map((item) => (
          <BoxTimeline
            key={item.id}
            date={item.date}
            title={item.title}
            text={item.text}
            condition={item.condition}
          />
        ))}
      </div>
    </section>
  );
};

export default Roadmap;

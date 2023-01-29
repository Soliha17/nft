import React from "react";

import "./style.scss";

const CardCollection = ({
  id,
  avt,
  galleryImg1,
  galleryImg2,
  galleryImg3,
  by,
  text,
  btn,
}) => {
  return (
    <div className="card-collection">
      <div className="gallery__card-collection">
        <span>
          <img src={galleryImg1} alt="galleryImg1" />
        </span>
        <span>
          <img src={galleryImg2} alt="galleryImg2" />
        </span>
        <span>
          <img src={galleryImg3} alt="galleryImg3" />
        </span>
      </div>
      <div className="info__card-collection">
        <img src={avt} alt="avatar" />
        <h6 className="font-style--1821">{by}</h6>
        <p className="font-style--1619">{text}</p>
      </div>
      <button
        className={`btn__card-collection font-style--1619 ${
          btn === "red--btn" ? "red--btn" : "dark--btn"
        }`}
      >
        +FOLLOW
      </button>
    </div>
  );
};

export default CardCollection;

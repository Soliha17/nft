import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./style.scss";

const CardBlog = ({ img, date, title, text }) => {
  return (
    <div className="card-blog">
      <div className="img-group__card-blog">
        <LazyLoadImage effect="blur" src={img} alt="blog card" />
        <p className="font-style--1619">{date}</p>
      </div>
      <div className="info-group__card-blog">
        <h6 className="font-style--1830">{title}</h6>
        <p className="font-style--1619">{text}</p>
        <button className="btn__card-blog font-style--1619">Read More</button>
      </div>
    </div>
  );
};

export default CardBlog;

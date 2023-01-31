import React from "react";
import "./style.scss";

const CardCreate = ({ img, title, text }) => {
  return (
    <div className="create-card">
      <img src={img} alt="icon create card" />
      <div className="info__create-card">
        <h4 className="font-style--2030">{title}</h4>
        <p className="font-style--1420">{text}</p>
      </div>
    </div>
  );
};

export default CardCreate;

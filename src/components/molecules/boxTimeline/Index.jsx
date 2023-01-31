import React from "react";

const BoxTimeline = ({ date, title, text, condition }) => {
  return (
    <div className={`box__timeline ${condition}`}>
      <div className="date">{date}</div>
      <div className="content">
        <h2 className="font-style--2030">{title}</h2>
        <p>{text}</p>
        <button className="btn__timeline font-style--1525">read more</button>
      </div>
    </div>
  );
};

export default BoxTimeline;

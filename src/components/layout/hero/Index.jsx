import React from "react";

import Header from "../header/Index";

import "./style.scss";

import MathShape from "../../../assets/images/math-shape.svg";
import RedVector from "../../../assets/images/red-vector.svg";
import WhiteVector from "../../../assets/images/white-vector.svg";
import Icon1 from "../../../assets/icons/creative-icon.svg";
import Icon2 from "../../../assets/icons/hero-icon-2.svg";
import Icon3 from "../../../assets/icons/hero-icon-3.svg";
import Icon4 from "../../../assets/icons/hero-icon-4.svg";
import Icon5 from "../../../assets/icons/hero-icon-5.svg";

const Hero = () => {
  return (
    <div className="hero-wrapper" id="home">
      <div className="hero">
        <img
          className="math-shape"
          src={MathShape}
          alt="math background shape"
        />

        <Header />
        <div className="hero__info">
          <h1>
            Explore Thousands Of Digital
            <span className="red-circle"> Art </span> And Collectibles
          </h1>
          <p className="font-style--1830">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged It was
            popularised in the 1960s
          </p>
          <div className="hero__btn-group">
            <button className="explore-now-btn font-style--1823">
              Explore Now
            </button>
            <button className="create-account-btn font-style--1823">
              Create Account
            </button>
          </div>
          <img className="red-vector" src={RedVector} alt="red vector shape" />
          <img
            className="white-vector"
            src={WhiteVector}
            alt="white vector shape"
          />
        </div>
        <div className="hero__footer">
          <img src={Icon1} alt="hero plusses icon" />
          <img src={Icon2} alt="hero plusses icon" />
          <img src={Icon3} alt="hero plusses icon" />
          <img src={Icon4} alt="hero plusses icon" />
          <img src={Icon5} alt="hero plusses icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

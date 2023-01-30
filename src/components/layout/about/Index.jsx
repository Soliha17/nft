import React from "react";

import "./style.scss";

import Bg1 from "../../../assets/images/bg-img-1.svg";
import Bg2 from "../../../assets/images/bg-img-2.svg";
import Bg3 from "../../../assets/images/bg-img-3.svg";
import VideoPlay from "../../../assets/images/play-video-img.svg";

const About = () => {
  return (
    <section className="section section-1 container">
      <p className="section__subtitle">NFT Marketplace</p>
      <h2 className="section__title">The Largest NFT MarketPlace</h2>

      <div className="section-1__content">
        <div className="section-1__left">
          <img className="bg-img-1" src={Bg1} alt="bg 1" />
          <img className="bg-img-2" src={Bg2} alt="bg 2" />
          <img className="bg-img-3" src={Bg3} alt="bg 3" />
          <img className="video-play" src={VideoPlay} alt="play video" />
        </div>
        <div className="section-1__right">
          <p className="font-style--1630">
            written in. This book is a treatise on the theory of ethics very
            popular during the Renaissance.The first line of Lorem Ipsum, "Lorem
            ipsum dolor sit amet
          </p>

          <p className="font-style--1630">
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc
          </p>

          <ul className="section-1__list">
            <li className="section-1__item font-style--1619">
              except to obtain some advantage from it?
            </li>
            <li className="section-1__item font-style--1619">
              Nam libero tempore, cum soluta nobis est eligendi optioas
              cumque...
            </li>
            <li className="section-1__item font-style--1619">
              choice is untrammelled and when nothing prevents our being.
            </li>
            <li className="section-1__item font-style--1619">
              which is the same as saying through shrinking from toil and pain
            </li>
            <li className="section-1__item font-style--1619">
              except to obtain some advantage from it?
            </li>
          </ul>
          <button className="section-1__btn font-style--1830">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;

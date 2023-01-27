import React from "react";

import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/scss/alice-carousel.scss";

import "./style.scss";

import CardCollection from "../../molecules/CardCollection/Index";

import { cardCollectionDatas } from "../../mock/CardCollectionDatas";

import UnderVectorIcon from "../../../assets/icons/under-icon.svg";
import Button from "../../atoms/button/Index";

const items = cardCollectionDatas.map(
  ({ id, avt, galleryImg1, galleryImg2, galleryImg3, by, text, btn }) => {
    return (
      <CardCollection
        id={id}
        avt={avt}
        galleryImg1={galleryImg1}
        galleryImg2={galleryImg2}
        galleryImg3={galleryImg3}
        by={by}
        text={text}
        btn={btn}
      />
    );
  }
);
const Collection = () => {
  return (
    <section className="collection container">
      <p className="section__subtitle">Collection</p>
      <h2 className="section__title">
        NFT Collection{" "}
        <span>
          Art <img src={UnderVectorIcon} alt="under vector" />
        </span>
      </h2>
      <AliceCarousel
        // autoPlay
        autoPlayInterval={1500}
        mouseTracking
        // infinite
        disableButtonsControls
        items={items}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      />
      <Button />
    </section>
  );
};

export default Collection;

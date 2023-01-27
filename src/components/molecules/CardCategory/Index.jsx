import React from "react";

import "./style.scss";

import PhotoAlbum from "react-photo-album";

import {
  FirtsCardCategoryPhotos,
  SecondCardCategoryPhotos,
  ThirdCardCategoryPhotos,
  FourthCardCategoryPhotos,
  FifthCardCategoryPhotos,
  SixthCardCategoryPhotos,
} from "../../atoms/PhotosCardCategory";

import NextIcon from "../../../assets/icons/next-icon.svg";

const CardCategory = () => {
  return (
    <div className="card-container__category">
      <div className="card__category">
        <PhotoAlbum layout="rows" photos={FirtsCardCategoryPhotos} />
        <div className="card-info__category">
          <div className="card-title__category">
            <h4 className="font-style--2030">Art</h4>
            <p className="font-style--1420">125 Item</p>
          </div>
          <a href="" className="view-all__category font-style--1619">
            View All
            <img src={NextIcon} alt="next vector icon" />
          </a>
        </div>
      </div>
      <div className="card__category">
        <PhotoAlbum layout="rows" photos={SecondCardCategoryPhotos} />
        <div className="card-info__category">
          <div className="card-title__category">
            <h4 className="font-style--2030">Collectibles</h4>
            <p className="font-style--1420">325 Item</p>
          </div>
          <a href="" className="view-all__category font-style--1619">
            View All
            <img src={NextIcon} alt="next vector icon" />
          </a>
        </div>
      </div>
      <div className="card__category">
        <PhotoAlbum layout="rows" photos={ThirdCardCategoryPhotos} />
        <div className="card-info__category">
          <div className="card-title__category">
            <h4 className="font-style--2030">Photos</h4>
            <p className="font-style--1420">3250 Item</p>
          </div>
          <a href="" className="view-all__category font-style--1619">
            View All
            <img src={NextIcon} alt="next vector icon" />
          </a>
        </div>
      </div>
      <div className="card__category">
        <PhotoAlbum layout="rows" photos={FourthCardCategoryPhotos} />
        <div className="card-info__category">
          <div className="card-title__category">
            <h4 className="font-style--2030">3D Art</h4>
            <p className="font-style--1420">3562 Item</p>
          </div>
          <a href="" className="view-all__category font-style--1619">
            View All
            <img src={NextIcon} alt="next vector icon" />
          </a>
        </div>
      </div>
      <div className="card__category">
        <PhotoAlbum layout="rows" photos={FifthCardCategoryPhotos} />
        <div className="card-info__category">
          <div className="card-title__category">
            <h4 className="font-style--2030">Stachu</h4>
            <p className="font-style--1420">325 Item</p>
          </div>
          <a href="" className="view-all__category font-style--1619">
            View All
            <img src={NextIcon} alt="next vector icon" />
          </a>
        </div>
      </div>
      <div className="card__category">
        <PhotoAlbum layout="rows" photos={SixthCardCategoryPhotos} />
        <div className="card-info__category">
          <div className="card-title__category">
            <h4 className="font-style--2030">2D</h4>
            <p className="font-style--1420">125 Item</p>
          </div>
          <a href="" className="view-all__category font-style--1619">
            View All
            <img src={NextIcon} alt="next vector icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;

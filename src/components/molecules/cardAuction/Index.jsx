import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./style.scss";

import RedFeed from "../../../assets/images/red-feed.png";

const CardAuction = ({img,avt,condition,name,username,cost}) => {
  return (
    <div className="auction-card">
      <div className="image-group__auction-card">
        <LazyLoadImage
          effect="blur"
          src={img}
          className="bg-img__auction-card"
          alt="bg auction card"
        />
        <img
          src={RedFeed}
          className="feed-img__auction-card"
          alt="feed auction card"
        />
      </div>
      <div className="info-group__auction-card">
        <div className="top__info-group">
          <span>
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.53365 3.29986L2.25385 3.10498V11.3876C2.25385 11.5868 2.34463 11.6666 2.53287 11.6666H5.72853L5.53365 3.29986Z"
                fill="#C17D4F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3588 11.3876C14.3588 11.568 14.2747 11.6666 14.0798 11.6666H5.53369V3.10498H14.3588V11.3876Z"
                fill="#CE9875"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.53367 3.29988H2.25387L0.323829 0.630156C0.235235 0.507266 0.277305 0.404297 0.440079 0.404297H7.82128L5.53367 3.29988Z"
                fill="#C6865C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.33765 3.29988H14.3587L16.2888 0.630156C16.3818 0.501719 16.3331 0.404297 16.1725 0.404297H7.43046L5.33765 3.29988Z"
                fill="#C6865C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9007 3.29986V4.4426C10.9007 4.6142 10.7601 4.75482 10.5874 4.75482H8.83009C8.65845 4.75482 8.51782 4.61416 8.51782 4.4426V3.29986L9.94622 3.10498L10.9007 3.29986Z"
                fill="#E27F84"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.51782 3.29988H10.9007L12.9935 0.404297H10.6106L8.51782 3.29988Z"
                fill="#C9646D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.53365 3.29988H4.55701L6.64978 0.404297H7.62642L5.53365 3.29988Z"
                fill="#C17D4F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3821 3.29988H14.3587L16.2888 0.630156C16.3818 0.501719 16.3331 0.404297 16.1725 0.404297H15.197C15.3564 0.404297 15.4051 0.501719 15.3121 0.630156L13.3821 3.29988Z"
                fill="#C17D4F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3821 3.29987H14.3588V6.25076H13.3821V3.29987Z"
                fill="#C6865C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.55701 3.29987H5.53365V11.6666H4.55701V3.29987Z"
                fill="#B16E3D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3588 17.5862C17.6198 17.5862 20.2784 14.9276 20.2784 11.6666C20.2784 8.4067 17.6198 5.74698 14.3588 5.74698C11.0989 5.74698 8.43915 8.4067 8.43915 11.6666C8.43915 14.9275 11.0989 17.5862 14.3588 17.5862Z"
                fill="#FFE07D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3588 5.74698C17.6286 5.74698 20.2784 8.39784 20.2784 11.6666C20.2784 14.9364 17.6286 17.5862 14.3588 17.5862C14.1949 17.5862 14.0322 17.5795 13.8705 17.5662C16.9111 17.3182 19.3018 14.7714 19.3018 11.6666C19.3018 8.56174 16.9111 6.01604 13.8705 5.76694C14.0322 5.75471 14.1949 5.74698 14.3588 5.74698Z"
                fill="#FFD064"
              />
              <path
                d="M10.6349 12.8215C10.6349 12.9832 10.5032 13.1149 10.3415 13.1149C10.1798 13.1149 10.0492 12.9832 10.0492 12.8215V10.5482C10.0492 10.3865 10.1799 10.2559 10.3415 10.2559C10.45 10.2559 10.5452 10.3146 10.5951 10.4021L11.6381 11.9113L11.6249 10.5471C11.6226 10.3854 11.7533 10.2537 11.9138 10.2526C12.0755 10.2515 12.2073 10.381 12.2084 10.5416L12.2294 12.7163C12.2361 12.7938 12.2151 12.878 12.173 12.9433C12.1353 13.002 12.0833 13.0441 12.0202 13.0684C11.9482 13.0961 11.8718 13.0972 11.7943 13.0673C11.7356 13.0441 11.6813 13.002 11.6381 12.94L10.6349 11.4872V12.8215H10.6349ZM14.898 10.6268C14.846 10.474 14.9279 10.3079 15.0807 10.2559C15.2336 10.2028 15.3997 10.2847 15.4528 10.4375L15.9677 11.9357L16.5091 10.4154C16.5634 10.2625 16.7306 10.1828 16.8823 10.236C16.972 10.268 17.0362 10.3378 17.0628 10.4209L17.5766 11.9279L18.1003 10.433C18.1535 10.2813 18.3207 10.2005 18.4724 10.2536C18.6252 10.3068 18.7049 10.4729 18.6517 10.6257L17.8534 12.9045C17.8268 12.9931 17.7604 13.0673 17.6674 13.0983C17.5134 13.1503 17.3474 13.0684 17.2964 12.9155L16.7793 11.4008L16.2423 12.9067C16.2157 12.9931 16.1493 13.0673 16.0574 13.0983C15.9045 13.1514 15.7374 13.0695 15.6853 12.9167L14.898 10.6268ZM14.0819 10.2725C14.2436 10.2725 14.3742 10.4031 14.3742 10.5648C14.3742 10.7264 14.2436 10.8582 14.0819 10.8582H13.4242V11.4009H14.0122C14.1738 11.4009 14.3045 11.5315 14.3045 11.6932C14.3045 11.8548 14.1738 11.9866 14.0122 11.9866H13.4242V12.5292H14.0819C14.2436 12.5292 14.3742 12.6598 14.3742 12.8215C14.3742 12.9832 14.2436 13.1149 14.0819 13.1149H13.1308C12.9691 13.1149 12.8384 12.9832 12.8384 12.8215V10.5648C12.8384 10.4031 12.9691 10.2725 13.1308 10.2725H14.0819V10.2725Z"
                fill="#E27F84"
              />
            </svg>
            <p className="font-style--1220">{condition}</p>
          </span>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5597 0.808758C17.5581 0.823356 19.9852 3.25039 19.9998 6.24878C19.9998 11.7421 9.99978 17.1821 9.99978 17.1821C9.99978 17.1821 -0.000244141 11.6621 -0.000244141 6.24878C-0.000244141 3.24436 2.43531 0.808758 5.43977 0.808758C7.27891 0.794415 8.99829 1.71944 9.99978 3.26207C11.0081 1.72695 12.7231 0.804318 14.5597 0.808758Z"
              fill="#D7443E"
            />
          </svg>
        </div>
        <div className="middle__info-group">
          <div className="title__info-group">
            <img src={avt} alt="avatar card auction" />
            <span>
              <h5 className="font-style--1625">{name}</h5>
              <p className="font-style--1220">{username}</p>
            </span>
          </div>
          <div className="cost__info-group">
            <p className="font-style--1225">Current Bid</p>
            <h6 className="font-style--1620">{cost}</h6>
          </div>
        </div>
        <button className="btn__auction-card font-style--1619">
          Price Bid
        </button>
      </div>
    </div>
  );
};

export default CardAuction;

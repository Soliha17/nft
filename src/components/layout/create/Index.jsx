import React from 'react';

import "./style.scss";

import CreateImg from "../../../assets/images/create-img.svg";
import IconC1 from "../../../assets/icons/1-icon-c.svg";
import IconC2 from "../../../assets/icons/2-icon-c.svg";
import IconC3 from "../../../assets/icons/3-icon-c.svg";
import IconC4 from "../../../assets/icons/4-icon-c.svg";


const Create = () => {
  return (
    <section className="create section container">
      <h2>Creat And Sell Your NFTs</h2>

      <div className="create-container">
        <div className="create__left">
          <div className="create-card">
            <img src={IconC1} alt="first icon create card" />
            <div className="info__create-card">
              <h4 className="font-style--2030">Setup Your Wallet</h4>
              <p className="font-style--1420">
                when our power of choice is untram and when nothing prevents our
              </p>
            </div>
          </div>
          <div className="create-card">
            <img src={IconC2} alt="second icon create card" />
            <div className="info__create-card">
              <h4 className="font-style--2030">For Sale Listing</h4>
              <p className="font-style--1420">
                when our power of choice is untram and when nothing prevents our
              </p>
            </div>
          </div>
          <div className="create-card">
            <img src={IconC3} alt="third icon create card" />
            <div className="info__create-card">
              <h4 className="font-style--2030">Creat Your Collection</h4>
              <p className="font-style--1420">
                when our power of choice is untram and when nothing prevents our
              </p>
            </div>
          </div>
          <div className="create-card">
            <img src={IconC4} alt="fourth icon create card" />
            <div className="info__create-card">
              <h4 className="font-style--2030">Add Your NFT</h4>
              <p className="font-style--1420">
                when our power of choice is untram and when nothing prevents our
              </p>
            </div>
          </div>
        </div>
        <div className="create__right">
          <img src={CreateImg} alt="create" />
        </div>
      </div>
    </section>
  );
}

export default Create
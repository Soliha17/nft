import React from "react";

import CardSeller from "../../molecules/cardSeller/Index";

import { cardSellerDatas } from "../../mock/CardSellerDatas";

import "./style.scss";

const Seller = () => {
  return (
    <section className="section seller container">
      <p className="section__subtitle"> Seller</p>
      <h2 className="section__title">
        NFT Best Seller <span>Last 7 Day</span>
      </h2>
      <p className="section__paragraph">
        It has survived not only five centuries, but also the leap into
      </p>

      <div className="card-container__seller">
        {cardSellerDatas.map((item) => (
          <CardSeller key={item.id} img={item.img} name={item.name} username={item.username} itemNumber={item.itemNumber} number={item.number}  />
        ))}
      </div>
    </section>
  );
};

export default Seller;

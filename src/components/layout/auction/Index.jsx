import React from "react";

import "./style.scss";

import CardAuction from "../../molecules/cardAuction/Index";

import { cardAuctionDatas } from "../../mock/CardAuctionDatas";

const Auction = () => {
  return (
    <section className="section category container">
      <p className="section__subtitle">Live Auction</p>
      <h2 className="section__title">NFT Live Auction</h2>
      <div className="card-container__auction">
        {cardAuctionDatas.map((item) => (
          <CardAuction
            key={item.id}
            img={item.img}
            avt={item.avt}
            condition={item.condition}
            name={item.name}
            username={item.username}
            cost={item.cost}
          />
        ))}
      </div>
    </section>
  );
};

export default Auction;

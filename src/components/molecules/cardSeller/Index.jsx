import React from "react";

import "./style.scss";

const CardSeller = ({ img, name, username, itemNumber, number }) => {
  return (
    <div className="card-seller">
      <div className="img__card-seller">
        <img src={img} alt="best seller avatar" />
      </div>
      <div className="info__card-seller">
        <h4 className="font-style--1830">{name}</h4>
        <p className="font-style--1619">{username}</p>
        <div className="footer__card-seller">
          <p className="font-style--1619">{itemNumber}</p>
          <p className="font-style--1210">{number}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSeller;

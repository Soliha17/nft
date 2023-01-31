import React from "react";

import "./style.scss";

import CreateImg from "../../../assets/images/create-img.svg";

import { createCardDatas } from "../../mock/CardCreateDatas";
import CardCreate from "../../molecules/cardCreate/Index";

const Create = () => {
  return (
    <section className="create section container" id="create">
      <h2>Creat And Sell Your NFTs</h2>

      <div className="create-container">
        <div className="create__left">
          {createCardDatas.map((item) => (
            <CardCreate
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
        <div className="create__right">
          <img src={CreateImg} alt="create section icon" />
        </div>
      </div>
    </section>
  );
};

export default Create;

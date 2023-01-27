import React from 'react';
import Button from '../../atoms/button/Index';
import CardCategory from '../../molecules/CardCategory/Index';
import "./style.scss";

const Category = () => {
  return (
    <section className="section category container">
      <p className="section__subtitle">NFT Marketplace</p>
      <h2 className="section__title">NFT all Category</h2>
      <CardCategory />
      <Button/>
    </section>
  );
}

export default Category;

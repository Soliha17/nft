import React from "react";

import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/scss/alice-carousel.scss";

import CardBlog from "../../molecules/cardBlog/Index";

import { cardBlogDatas } from "../../mock/CardBlogDatas";

import "./style.scss";

const items = cardBlogDatas.map(({ id, img, date, title, text }) => {
  return <CardBlog id={id} img={img} date={date} title={title} text={text} />;
});

const Blog = () => {
  return (
    <section className="blog section container">
      <h2 className="section__title">Our Latest Blog</h2>
      <p className="section__paragraph">
        It has survived not only five centuries, but also the
      </p>

      <AliceCarousel
        autoPlay
        autoPlayInterval={1500}
        mouseTracking
        infinite
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
    </section>
  );
};

export default Blog;

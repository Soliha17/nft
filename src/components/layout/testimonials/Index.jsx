import React from "react";

import "./style.scss";

import TestimonialsImg from "../../../assets/images/testimonials-img.png";
import QuoteIcon from "../../../assets/images/quotes.png";
import Stars from "../../../assets/images/stars-group.svg";
import AvatarTestimonials from "../../../assets/images/avatar-testimonials.png";

const Testimonials = () => {
  return (
    <section className="testimonials section container">
      <h2 className="section__title">Hear From Our Happy Users</h2>

      <p className="section__paragraph">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged
      </p>
      <div className="carousel">
        <article className="carousel__slide carousel__slide--01">
          <div className="testimonials__box">
            <div className="testimonials__left">
              <div className="testimonials__top">
                <div className="testimonials__info">
                  <div>
                    <img src={AvatarTestimonials} alt="AvatarTestimonials" />
                  </div>
                  <div className="testimonials__title">
                    <h4 className="font-style--2026">Alamin Khan</h4>
                    <p className="font-style--1619">Art Director</p>
                    <img src={Stars} alt="stars group" />
                  </div>
                </div>
                <div className="testimonials__icon">
                  <img src={QuoteIcon} alt="quote icon" />
                </div>
              </div>
              <p className="font-style--2030">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It
                popularised in the 1960s with the release of Letraset containing
                Lorem Ipsum passages, and more recently with.
              </p>
            </div>
            <div className="testimonials__right">
              <img src={TestimonialsImg} alt="" />
            </div>
          </div>
        </article>
        <article class="carousel__slide carousel__slide--02">
          <div className="testimonials__box">
            <div className="testimonials__left">
              <div className="testimonials__top">
                <div className="testimonials__info">
                  <div>
                    <img src={AvatarTestimonials} alt="AvatarTestimonials" />
                  </div>
                  <div className="testimonials__title">
                    <h4 className="font-style--2026">Alamin Khan</h4>
                    <p className="font-style--1619">Art Director</p>
                    <img src={Stars} alt="stars group" />
                  </div>
                </div>
                <div className="testimonials__icon">
                  <img src={QuoteIcon} alt="quote icon" />
                </div>
              </div>
              <p className="font-style--2030">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It
                popularised in the 1960s with the release of Letraset containing
                Lorem Ipsum passages, and more recently with.
              </p>
            </div>
            <div className="testimonials__right">
              <img src={TestimonialsImg} alt="" />
            </div>
          </div>
        </article>
        <article class="carousel__slide carousel__slide--03">
          <div className="testimonials__box">
            <div className="testimonials__left">
              <div className="testimonials__top">
                <div className="testimonials__info">
                  <div>
                    <img src={AvatarTestimonials} alt="AvatarTestimonials" />
                  </div>
                  <div className="testimonials__title">
                    <h4 className="font-style--2026">Alamin Khan</h4>
                    <p className="font-style--1619">Art Director</p>
                    <img src={Stars} alt="stars group" />
                  </div>
                </div>
                <div className="testimonials__icon">
                  <img src={QuoteIcon} alt="quote icon" />
                </div>
              </div>
              <p className="font-style--2030">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It
                popularised in the 1960s with the release of Letraset containing
                Lorem Ipsum passages, and more recently with.
              </p>
            </div>
            <div className="testimonials__right">
              <img src={TestimonialsImg} alt="" />
            </div>
          </div>
        </article>
        <article class="carousel__slide carousel__slide--04">
          <div className="testimonials__box">
            <div className="testimonials__left">
              <div className="testimonials__top">
                <div className="testimonials__info">
                  <div>
                    <img src={AvatarTestimonials} alt="AvatarTestimonials" />
                  </div>
                  <div className="testimonials__title">
                    <h4 className="font-style--2026">Alamin Khan</h4>
                    <p className="font-style--1619">Art Director</p>
                    <img src={Stars} alt="stars group" />
                  </div>
                </div>
                <div className="testimonials__icon">
                  <img src={QuoteIcon} alt="quote icon" />
                </div>
              </div>
              <p className="font-style--2030">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It
                popularised in the 1960s with the release of Letraset containing
                Lorem Ipsum passages, and more recently with.
              </p>
            </div>
            <div className="testimonials__right">
              <img src={TestimonialsImg} alt="" />
            </div>
          </div>
        </article>
        <ul className="carousel__pager">
          <li className="carousel__marker carousel__marker--01">Slide One</li>
          <li className="carousel__marker carousel__marker--02">Slide Two</li>
          <li className="carousel__marker carousel__marker--03">Slide Three</li>
          <li className="carousel__marker carousel__marker--04">Slide Four</li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;

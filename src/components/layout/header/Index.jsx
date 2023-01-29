import React, { useState, useEffect } from "react";

import "./style.scss";

import Logo from "../../../assets/images/logo.svg";
import Menu from "../../../assets/icons/menu-1.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState("header__list");

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileMenu === true);
  }, [mobileMenu]);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header-wrapper");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  function showMenu() {
    mobileMenu === "header__list"
      ? setMobileMenu("header__list header__list--active")
      : setMobileMenu("header__list");
  }

  return (
    <div className="header-wrapper">
      <header className="header container">
        <div className="header__logo">
          <img src={Logo} alt="nft gallery logo" />
        </div>
        <ul className={mobileMenu}>
          <li className="header__item">
            <a href="#home" className="header__link font-style--1821">
              Home
            </a>
          </li>
          <li className="header__item">
            <a href="#collection" className="header__link font-style--1821">
              Activity
            </a>
          </li>
          <li className="header__item">
            <a href="#category" className="header__link font-style--1821">
              Category
            </a>
          </li>
          <li className="header__item">
            <a href="#blog" className="header__link font-style--1821">
              Blogs
            </a>
          </li>
          <li className="header__item">
            <a href="#seller" className="header__link font-style--1821">
              Browser
            </a>
          </li>
        </ul>
        <a href="#create" className="header__btn font-style--1619">
          Start Collecting
        </a>
        <button className="hamburger__btn" onClick={showMenu}>
          <img src={Menu} alt="menu icon" />
        </button>
      </header>
    </div>
  );
};

export default Header;

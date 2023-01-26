import React, { useState, useEffect } from "react";

import "./style.scss";

import Logo from "../../../assets/images/logo.svg";
import Menu from "../../../assets/icons/menu-1.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileMenu === true);
  }, [mobileMenu]);

  function showMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <header className="header container">
      <div className="header__logo">
        <img src={Logo} alt="nft gallery logo" />
      </div>
      <ul className={mobileMenu ? "header__list" : "header__list--none"}>
        <li className="header__item">
          <a href="" className="header__link font-style--1821">
            Home
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link font-style--1821">
            Activity
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link font-style--1821">
            Category
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link font-style--1821">
            Blogs
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link font-style--1821">
            Browser
          </a>
        </li>
      </ul>
      <button className="header__btn font-style--1619">Start Collecting</button>
      <button className="hamburger__btn" onClick={showMenu}>
        <img src={Menu} alt="menu icon" />
      </button>
    </header>
  );
};

export default Header;

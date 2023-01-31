import React from "react";
import "./style.scss";

const FooterList = ({ list }) => {
  return list.map((item) => (
    <ul className="footer__list" key={item.id}>
      <li className="footer__item">{item.link}</li>
    </ul>
  ));
};

export default FooterList;

import React from "react";

import "./style.scss";

import FooterBg1 from "../../../assets/images/footer-math-shape.svg";
import FooterBg2 from "../../../assets/images/footer-cubic-shape.svg";
import FooterLogo from "../../../assets/icons/footer-logo.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import YoutubeIcon from "../../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={FooterBg1}
        className="shape-1__footer"
        alt="footer math shape"
      />
      <div className="footer__wrapper container">
        <div className="footer__content">
          <div className="footer__column footer__column--first">
            <img src={FooterLogo} alt="footer logo" />
            <p className="font-style--1625">
              which is the same as saying through shrinking from toil and pain.
              These cases are perfectly simple and easy to distinguish.
            </p>
            <span>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5833 7.02315C15.5833 3.24469 12.5203 0.181641 8.7418 0.181641C4.96334 0.181641 1.9003 3.24469 1.9003 7.02315C0.923481 7.14477 -0.00012207 7.78331 -0.00012207 9.26564V12.8384C-0.00012207 14.5108 1.17054 15.1189 2.28038 15.1189H3.38262C3.59252 15.1189 3.76271 14.9487 3.76271 14.7388V7.38042C3.76271 7.17052 3.59252 7.00034 3.38262 7.00034H2.66046C2.66046 3.64173 5.38319 0.919003 8.7418 0.919003C12.1004 0.919003 14.8231 3.64173 14.8231 7.00034H14.101C13.8911 7.00034 13.7209 7.17052 13.7209 7.38042V14.7274C13.7209 14.9373 13.8911 15.1075 14.101 15.1075H14.8231C14.7167 17.7187 13.4624 18.3306 10.9577 18.4409V18.1862C10.9577 17.7664 10.6174 17.426 10.1975 17.426H7.8068C7.38695 17.426 7.04663 17.7664 7.04663 18.1862V19.4215C7.04663 19.8413 7.38695 20.1816 7.8068 20.1816H10.2051C10.625 20.1816 10.9653 19.8413 10.9653 19.4215V19.201C13.375 19.0908 15.4579 18.5929 15.5833 15.0847C16.5601 14.9631 17.4837 14.3246 17.4837 12.8422V9.26944C17.4837 7.77951 16.5639 7.14477 15.5833 7.02315ZM3.00254 7.7339V14.3474H2.26138C1.69885 14.3474 0.741041 14.1497 0.741041 12.827V9.25424C0.741041 7.94295 1.68745 7.7339 2.26138 7.7339H3.00254ZM10.2051 18.8475V19.4253H7.8068V18.19H10.2051V18.8475ZM16.7236 12.8384C16.7236 14.1497 15.7771 14.3588 15.2032 14.3588H14.4811V7.76051H15.2222C15.7847 7.76051 16.7426 7.95815 16.7426 9.28084L16.7236 12.8384Z"
                  fill="#DEDEDE"
                />
              </svg>
              <p className="font-style--1619">+7 (495) 2222-0000-32</p>
            </span>
            <span>
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0308 14.7937H1.96894C1.44687 14.7931 0.946346 14.5854 0.577198 14.2163C0.20805 13.8471 0.000425728 13.3465 -0.00012207 12.8245V2.9048C0.000425728 2.38272 0.20805 1.88218 0.577198 1.513C0.946346 1.14382 1.44687 0.936145 1.96894 0.935547H18.0308C18.5529 0.936145 19.0534 1.14382 19.4226 1.513C19.7917 1.88218 19.9993 2.38272 19.9999 2.9048V12.8245C19.9993 13.3465 19.7917 13.8471 19.4226 14.2163C19.0534 14.5854 18.5529 14.7931 18.0308 14.7937ZM1.96894 1.68818C1.6464 1.68853 1.33717 1.81682 1.10911 2.04491C0.881056 2.27301 0.752806 2.58226 0.752507 2.9048V12.8245C0.752806 13.147 0.881056 13.4563 1.10911 13.6843C1.33717 13.9124 1.6464 14.0407 1.96894 14.0411H18.0308C18.3534 14.0407 18.6626 13.9124 18.8906 13.6843C19.1187 13.4563 19.247 13.147 19.2472 12.8245V2.9048C19.247 2.58226 19.1187 2.27301 18.8906 2.04491C18.6626 1.81682 18.3534 1.68853 18.0308 1.68818H1.96894Z"
                  fill="#DEDEDE"
                />
                <path
                  d="M9.99989 10.0793C9.90815 10.0794 9.81956 10.0459 9.75076 9.98523L0.68158 1.97951L1.17963 1.41504L9.99989 9.20174L18.8205 1.41598L19.3186 1.98045L10.2494 9.98617C10.1804 10.0467 10.0916 10.0798 9.99989 10.0793Z"
                  fill="#DEDEDE"
                />
                <path
                  d="M0.476929 13.6118L6.56951 6.66996L7.13549 7.1667L1.04291 14.1086L0.476929 13.6118Z"
                  fill="#DEDEDE"
                />
                <path
                  d="M12.8834 7.15967L13.4494 6.66293L19.5421 13.6049L18.9761 14.1017L12.8834 7.15967Z"
                  fill="white"
                />
              </svg>
              <p className="font-style--1619">Hello.me@nft.com</p>
            </span>
            <span>
              <svg
                width="15"
                height="21"
                viewBox="0 0 15 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42175 4.13477C5.48324 4.13477 3.90613 5.71187 3.90613 7.65039C3.90613 9.58891 5.48324 11.166 7.42175 11.166C9.36027 11.166 10.9374 9.58891 10.9374 7.65039C10.9374 5.71187 9.36027 4.13477 7.42175 4.13477ZM7.42175 10.3848C5.91402 10.3848 4.68738 9.15812 4.68738 7.65039C4.68738 6.14266 5.91402 4.91602 7.42175 4.91602C8.92949 4.91602 10.1561 6.14266 10.1561 7.65039C10.1561 9.15812 8.92949 10.3848 7.42175 10.3848Z"
                  fill="#DEDEDE"
                />
                <path
                  d="M10.9374 15.3066C11.1531 15.3066 11.328 15.1318 11.328 14.916C11.328 14.7003 11.1531 14.5254 10.9374 14.5254C10.7216 14.5254 10.5468 14.7003 10.5468 14.916C10.5468 15.1318 10.7216 15.3066 10.9374 15.3066Z"
                  fill="white"
                />
                <path
                  d="M12.7312 11.6399L11.6043 13.2361C11.4798 13.4124 11.5218 13.6561 11.698 13.7805C11.8743 13.905 12.1181 13.8629 12.2425 13.6867L13.3662 12.095C14.3328 10.8041 14.8436 9.26734 14.8436 7.65039C14.8436 3.55793 11.5142 0.228516 7.42175 0.228516C3.32929 0.228516 -0.00012207 3.55793 -0.00012207 7.65039C-0.00012207 9.26734 0.510698 10.8041 1.4773 12.095L6.66781 19.4473H1.56238C1.34667 19.4473 1.17175 19.6221 1.17175 19.8379C1.17175 20.0536 1.34667 20.2285 1.56238 20.2285H13.2811C13.4968 20.2285 13.6718 20.0536 13.6718 19.8379C13.6718 19.6221 13.4968 19.4473 13.2811 19.4473H8.1757L10.216 16.5573C10.3404 16.381 10.2984 16.1373 10.1222 16.0129C9.94586 15.8884 9.70214 15.9304 9.57777 16.1067L7.42175 19.1606C7.42175 19.1606 2.108 11.6339 2.10574 11.6309C1.23921 10.4753 0.781128 9.09887 0.781128 7.65039C0.781128 3.98875 3.76011 1.00977 7.42175 1.00977C11.0834 1.00977 14.0624 3.98875 14.0624 7.65039C14.0624 9.09887 13.6043 10.4753 12.7378 11.6309C12.7355 11.6339 12.7333 11.6369 12.7312 11.6399Z"
                  fill="#DEDEDE"
                />
              </svg>
              <p className="font-style--1619">
                00000 Collins Street West Victoria 66666 Australia
              </p>
            </span>
          </div>
          <div className="footer__column footer__column--second">
            <h3>Explore</h3>
            <ul className="footer__list">
              <li className="footer__item">My Account</li>
              <li className="footer__item">Create Now</li>
              <li className="footer__item">List a Item</li>
              <li className="footer__item">Privacy Polocy</li>
              <li className="footer__item">FAQs</li>
            </ul>
          </div>
          <div className="footer__column footer__column--third">
            <h3>Marketplece</h3>
            <ul className="footer__list">
              <li className="footer__item">Art</li>
              <li className="footer__item">Photo</li>
              <li className="footer__item">Create a Store</li>
              <li className="footer__item">Start Selling</li>
            </ul>
          </div>
          <div className="footer__column footer__column--four">
            <h3>Newsletter</h3>
            <div className="footer__social-box">
              <span>
                <img src={FacebookIcon} alt="facebook icon" />
              </span>
              <span>
                <img src={InstagramIcon} alt="intagram icon" />
              </span>
              <span>
                <img src={PhoneIcon} alt="phone icon" />
              </span>
              <span>
                <img src={TwitterIcon} alt="twitter icon" />
              </span>
              <span>
                <img src={YoutubeIcon} alt="you tube icon" />
              </span>
            </div>
            <div className="footer__input-group">
              <input
                className="footer__input font-style--1420"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="footer__btn font-style--1619">Subcribe</button>
            </div>
          </div>
        </div>
        <p className="copy__footer font-style--1823">
          © Copyright 2023. Powered by{" "}
          <a rel="preconnect" href="https://t.me/solyadev">
            Solya
          </a>
        </p>
      </div>
      <img
        src={FooterBg2}
        className="shape-2__footer"
        alt="footer cubic shape"
      />
    </footer>
  );
};

export default Footer;

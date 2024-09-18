import React from "react";
import logo from "../../../assets/icons/footer.png";
import up from "../../../assets/icons/up.png";
import { MdAccessTime } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerMax">
        <div className="footer__box">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="footer__list">
            <NavLink to={"#"} className="footer__item">
              Каталог
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              Гарантия
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              Оплата и доставка
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              Отзывы
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              Акции 2
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              статьи
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              О нас
            </NavLink>
            <NavLink to={"#"} className="footer__item">
              Контакты
            </NavLink>
          </ul>
          <div className="footer__right">
            <div className="footer__logo__bottom">
              <img src={logo} alt="" />
            </div>
            <div className="footer__info">
              <a href="tel:+380 66 417 95 83" className="footer__tel">
                <BsTelephoneFill /> +380 66 417 95 83
              </a>
              <h3 className="footer__zvanok">Обратный звонок</h3>
              <div className="footer__date">
                <MdAccessTime /> ПН-ПТ: 10-19
              </div>
            </div>
            <div className="footer__up">
              <a href="#">
                <img src={up} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__infos">
          All rights reserved © 2021, Uromedservice
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import heroLogo from "../../../assets/icons/logo.png";
import { PiTimerBold } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="header__exclusive">Доставка в любой город Украины</div>
      <div className="header container">
        <div className="header__items">
          <div className="header__left">
            <NavLink to={"/"}>
              <img src={heroLogo} alt="heroLogo" />
            </NavLink>
          </div>
          <div className={`header__middle ${show ? "header__show" : ""}`}>
            <div className="header__middle__top">
              <div className="header__middle__left">
                <div className="header__middle__left__items">
                  <a href="#" className="header__middle__left__items__tel">
                    <FaPhone />
                    +380 66 417 95 83
                  </a>
                </div>
                <p className="header__middle__left__item">Обратный звонок</p>
                <p className="header__middle__left__item">
                  <a href="#">
                    <PiTimerBold />
                    ПН-ПТ: 10-19
                  </a>
                </p>
              </div>
              <div className="header__middle__right">
                <p> • СЕЙЧАС НА САЙТЕ: 23 ПОКУПАТЕЛЯ</p>
                <select name="" id="">
                  <option value="rus">Rus</option>
                  <option value="uzb">Uzb</option>
                </select>
              </div>
            </div>
            <hr />
            <ul className="header__list">
              <NavLink to={"/category"} className="header__item">
                Каталог
              </NavLink>
              <NavLink to={"/warranty"} className="header__item">
                Гарантия
              </NavLink>
              <NavLink to={"/deliver"} className="header__item">
                Оплата и доставка
              </NavLink>
              <NavLink to={"/feedback"} className="header__item">
                Отзывы
              </NavLink>
              <NavLink to={"/article"} className="header__item">
                статьи
              </NavLink>
              <NavLink to={"/about"} className="header__item">
                О нас
              </NavLink>
              <NavLink to={"/contact"} className="header__item">
                Контакты
              </NavLink>
            </ul>
          </div>
          <div className="header__right">
            <RiDeleteBinLine />
          </div>
          <div className="header__menu">
            {show ? (
              <IoCloseOutline onClick={() => setShow(false)} />
            ) : (
              <IoMenu onClick={() => setShow(true)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import mony from "../../assets/icons/mony.png";
import card1 from "../../assets/icons/card1.png";
import card2 from "../../assets/icons/card2.png";
import card3 from "../../assets/icons/card3.png";
import card4 from "../../assets/icons/card4.png";
import item1 from "../../assets/icons/item1.png";
import item2 from "../../assets/icons/item2.png";
import item3 from "../../assets/icons/item3.png";
import brand from "../../assets/images/brand.png";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./deliver.scss";

const Deliver = () => {
  return (
    <div className="deliver">
      <div className="containerMax">
        <div className="deliver__title">Оплата и доставка</div>
        <div className="deliver__box">
          <div className="deliver__box__top">
            <img src={mony} alt="" />
            <h3 className="deliver__top__title">Оплата</h3>
          </div>
          <div className="deliver__items">
            <div className="deliver__item">
              <h3 className="deliver__item__title">
                Карточкой Visa, Mastercard
              </h3>
              <img src={card1} alt="" />
            </div>
            <div className="deliver__item">
              <h3 className="deliver__item__title">Онлайн-оплата LiqPay</h3>
              <img src={card2} alt="" />
            </div>
            <div className="deliver__item">
              <h3 className="deliver__item__title">Наложенный платеж</h3>
              <p className="deliver__desc">
                Оплата товара в отделении почтовой службы при его получении.
              </p>
              <div className="deliver__item__bottom">
                <img src={card3} alt="" />
                <p className="deliver__desc">
                  * почтовым оператором дополнительно взимается комиссия
                </p>
              </div>
            </div>
            <div className="deliver__item">
              <h3 className="deliver__item__title">Наличными</h3>
              <p className="deliver__desc">
                Оплата товара наличными при его получении в нашем магазине в г.
                Днепр
              </p>
              <div className="deliver__item__bottom">
                <img src={card4} alt="" />
                <p className="deliver__desc">
                  Украина, г. Днепр, ул. Челюскина 12
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="deliver__cards">
          <div className="deliver__card">
            <div className="deliver__card__top">
              <h3>Доставка Новой Почтой</h3>
              <img src={item1} alt="" />
            </div>
            <p className="deliver__card__desc">
              • Доставка в отделение: <br /> Сроки доставки 1-3 дня. Стоимость
              доставки - по тарифам оператора. Комиссию за пересылку наложенного
              платежа оплачивает покупатель. Оплату заказа можно осуществить на
              отделение почтового оператора наличными или банковской картой.
              Автоматический возврат не забраного заказа на 5 день. <br />
              <br /> • Адресная доставка: Сроки доставки 1-3 дня. Стоимость
              доставки - по тарифам оператора Комиссию за пересылку наложенного
              платежа оплачивает покупатель. Оплату заказа можно осуществить
              наличными или банковской картой. Автоматический возврат не
              забраного заказа на 5 день.
            </p>
          </div>
          <div className="deliver__card">
            <div className="deliver__card__top">
              <h3>Доставка Укрпочтой</h3>
              <img src={item2} alt="" />
            </div>
            <p className="deliver__card__desc">
              Доставка заказной посылкой с трек-номером на удобное вам почтовое
              отделение. <br /> <br /> Сроки доставки 2-5 дней. <br /> <br />{" "}
              Стоимость доставки - по тарифам оператора. Комиссию за пересылку
              наложенного платежа оплачивает покупатель. <br /> <br /> Оплату
              заказа можно осуществить на отделение почтового оператора
              наличными или банковской картой. <br /> <br />
              Автоматический возврат не забраного заказа на 5 день.
            </p>
          </div>
          <div className="deliver__card">
            <div className="deliver__card__top">
              <h3>Доставка JUSTIN</h3>
              <img src={item3} alt="" />
            </div>
            <p className="deliver__card__desc">
              Доставка на удобное вам отделение почтового оператора. <br />{" "}
              <br /> Сроки доставки 2-5 дней. <br /> <br /> Стоимость доставки -
              по тарифам оператора. Комиссию за пересылку наложенного платежа
              оплачивает покупатель. <br /> <br />
              Оплату заказа можно осуществить на отделение почтового оператора
              наличными или банковской картой. <br /> <br /> Автоматический
              возврат не забраного заказа на 5 день.
            </p>
          </div>
        </div>
        <div className="deliver__comunicat">
          <div className="deliver__left">
            <h3 className="deliver__name">Самовывоз</h3>
            <p className="deliver__comunicat__desc">
              Забрать заказ можно самостоятельно в нашем магазине в г.Днепр без
              оплаты за доставку.
            </p>
            <div className="deliver__comunicat__item">
              <a href="tel:+380 66 417 95 83">
                <FaPhone /> +380 66 417 95 83
              </a>
              <a href="#">
                <MdEmail /> uromed@gmail.com
              </a>
              <a href="#">
                <IoLocationSharp /> Украина, г. Днепр, ул. Челюскина 12
              </a>
            </div>
          </div>
          <div className="deliver__right">
            <img src={brand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;

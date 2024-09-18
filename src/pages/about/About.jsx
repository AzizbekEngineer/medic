import React from "react";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import sertificat from "../../assets/images/sertificat.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="containerMax">
        <div className="about__top">
          <div className="about__circle">О нас</div>
        </div>
        <div className="about__service">
          <div className="about__service__left">
            <h3 className="about__name">Uromedservice</h3>
            <p className="about__desc">
              Компания uromedservice уже более 9 лет профессионально занимается
              импортом и продажей на территории Украины энурезных будильников,
              различных средств ухода и личной гигиены, а так же других
              сопутствующих товаров, в том числе медицинского назначения! <br />{" "}
              <br /> Пройдя свой не малый путь, и досконально изучив всех
              производителей энурезных будильников, плюсов и минусов каждого
              конкретного продукта, мы для себя определили приоритетное
              сотрудничество с такими всемирно известными брендами как Teqin и
              MoDo-king. <br /> <br /> В данный момент, на протяжении уже более
              5 лет, у нас организованы прямые поставки будильников от этих
              производителей, и наша компания является официальным
              представителем Teqin и MoDo-king в Украине! Что позволяет нам
              гарантировать высочайшее качество и самый широкий ассортимент
              продукции этих брендов на территории Украины, профессиональный
              сервис и обслуживание наших клиентов, а так же доступные и
              адекватные цены!
            </p>
          </div>
          <div className="about__service__right">
            <img src={about1} alt="" />
          </div>
        </div>
        <div className="about__items">
          <div className="about__item">
            <img src={about2} alt="" />
          </div>
          <div className="about__item__right">
            <div className="about__item__info">
              <p className="about__item__desc">
                Мы гордимся тем, что наши товары помогли и продолжают помогать
                многим Семьям в решении их деликатных вопросов! Мы постоянно
                учимся чему-то новому и не боимся идти в ногу со временем,
                расширяем наш ассортимент и совершенствуем качество
                обслуживания! <br /> <br /> Осознаём, как важно для Вас найти
                надежный сервис по выбору и покупке энурезных будильников и
                других сопутствующих товаров, и прилагаем все усилия, что бы
                стать для Вас именно таким местом.
              </p>
            </div>
            <div className="about__item__img">
              <img src={about3} alt="" />
            </div>
          </div>
        </div>
        <div className="about__cards">
          <div className="about__card">
            <h3 className="about__card__title">
              Мы всегда заботимся о наших клиентах
            </h3>
          </div>
          <div className="about__card">
            <div className="about__card__icon">
              <img src={icon1} alt="" />
            </div>
            <div className="about__card__info">
              <h3 className="about__card__name">
                Оригинальная и сертифицированная продукция
              </h3>
              <p className="about__card__desc">
                Uromedservice всегда заботится о спокойствие и здоровье своих
                покупателей. Заказанные товары проходят проверку в два этапа, и
                только потом отправляются покупателю
              </p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__card__icon">
              <img src={icon2} alt="" />
            </div>
            <div className="about__card__info">
              <h3 className="about__card__name">Команда специалистов</h3>
              <p className="about__card__desc">
                Мы заботимся как о качестве наших товаров, так и о качестве
                нашего обслуживания и сервиса
              </p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__card__icon">
              <img src={icon3} alt="" />
            </div>
            <div className="about__card__info">
              <h3 className="about__card__name">
                Постоянное расширение каталога
              </h3>
              <p className="about__card__desc">
                Мы заботимся как о качестве наших товаров, так и о качестве
                нашего обслуживания и сервиса
              </p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__card__icon">
              <img src={icon4} alt="" />
            </div>
            <div className="about__card__info">
              <h3 className="about__card__name">
                Помощь в подборе оптимального тавара
              </h3>
              <p className="about__card__desc">
                Для удобства покупателей мы максимально усовершенствовали сайт и
                организовали профессиональную консультацию нашими специалистами
              </p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__card__icon">
              <img src={icon5} alt="" />
            </div>
            <div className="about__card__info">
              <h3 className="about__card__name">
                Доставка в любую точку Украины
              </h3>
              <p className="about__card__desc">
                Доставка товара осуществляется во все населенные пункты Украины
                в течении 1 – 3 дней
              </p>
            </div>
          </div>
        </div>
        <div className="about__sertificat">
          <img src={sertificat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

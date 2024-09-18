import React from "react";
import material1 from "../../assets/images/material1.png";
import material2 from "../../assets/images/material2.png";
import material3 from "../../assets/images/material3.png";
import { MdPlayArrow } from "react-icons/md";
import "./material.scss";

const Material = () => {
  return (
    <div className="material">
      <div className="containerMax">
        <div className="material__items">
          <div className="material__left">
            <h3 className="material__title">ИНТЕРНЕТ-МАГАЗИН UROMED SERVICE</h3>
            <p className="material__desc">
              UROMED SERVICE UroMed Service - это функциональный и современный
              сервис, позволяющий быстро и легко приобрести товары медицинской
              оптики. <br /> У компании 15-ти летний опыт в сфере предоставления
              высококачественных услуг по подбору и продаже оптимальных средств
              для коррекции зрения: <br /> • сеть салонов розничной оптики; •
              собственные мастерские по изготовлению очков; <br /> •
              высококвалифицированные и опытные специалисты;
              <br /> • надежные и проверенные поставщики; <br /> •
              функциональный и современный сервис онлайн продаж.
            </p>
          </div>
          <div className="material__right">
            <div className="material__top">
              <h3 className="material__name">Полезные материалы </h3>
            </div>
            <div className="material__bottom">
              <div className="material__card">
                <div className="material__img">
                  <img src={material1} alt="" />
                </div>
                <div className="material__infos">
                  <h3 className="material__info">
                    8 шагов по борьбе с энурезом. Советы родителям
                  </h3>
                  <p className="material__card__desc">
                    Предлагаем вашему вниманию перевод статьи Министерства
                    здравоохранения Австралии, посвященную проблеме детского и
                    подросткового энуреза..
                  </p>
                  <button className="material__btn">
                    <span>читать </span>
                    <MdPlayArrow />
                  </button>
                </div>
              </div>
              <div className="material__card">
                <div className="material__img">
                  <img src={material2} alt="" />
                </div>
                <div className="material__infos">
                  <h3 className="material__info">
                    Энурезный будильник. Как это работает
                  </h3>
                  <p className="material__card__desc">
                    Энурезная сигнализация- это устройство, которое пробуждает
                    ребенка, который мочится в постель. Мочевой будильник
                    состоит из закрепленного на белье..
                  </p>
                  <button className="material__btn">
                    <span>читать </span>
                    <MdPlayArrow />
                  </button>
                </div>
              </div>
              <div className="material__card">
                <div className="material__img">
                  <img src={material3} alt="" />
                </div>
                <div className="material__infos">
                  <h3 className="material__info">
                    Энурезный будильник. Как выбрать лучший вариант
                  </h3>
                  <p className="material__card__desc">
                    Как выбрать энурезный будильник, на что следует обращать
                    внимание, какому прибору отдать предпочтение, чтобы мочевой
                    будильник был эффективным средством..
                  </p>
                  <button className="material__btn">
                    <span>читать </span>
                    <MdPlayArrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="material__see">
              смотреть все статьи <MdPlayArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;

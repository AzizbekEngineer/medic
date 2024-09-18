import React from "react";
import telegram from "../../assets/icons/telegram.png";
import viber from "../../assets/icons/viber.png";
import "./konsultatsiya.scss";

const Konsultatsiya = () => {
  return (
    <div className="consul">
      <div className="containerMax">
        <div className="consul__box">
          <h3 className="consul__title">
            Консультация специалиста по телефону
          </h3>
          <form action="" className="consul__form">
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваш телефон*" />
            <button className="consul__btn">позвоните мне</button>
          </form>
          <h3 className="consul__desc">
            задайте вопрос в удобном для Вас мессенджере:
          </h3>
          <div className="consul__icons">
            <div className="consul__icon">
              <img src={telegram} alt="telegram" />
            </div>
            <div className="consul__icon">
              <img src={viber} alt="telegram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konsultatsiya;

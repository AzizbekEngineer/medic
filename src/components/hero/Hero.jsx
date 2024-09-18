import React from "react";
import hero from "../../assets/images/hero.png";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="containerMax hero__box">
        <div className="hero__left">
          <h3 className="hero__title">Энурузный будильник</h3>
          <h4 className="hero__info">- эффективное средство при энурезе</h4>
        </div>
        <div className="hero__right">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

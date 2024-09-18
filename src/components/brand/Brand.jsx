import React from "react";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import "./brand.scss";

const Brand = () => {
  const brandImages = [brand1, brand2, brand3, brand4, brand5];
  const brandImg = brandImages.map((el, inx) => (
    <div className="brand__item" key={inx}>
      <img src={el} alt="" />
    </div>
  ));
  return (
    <div className="brand">
      <div className="containerMax">
        <div className="brand__items ">{brandImg}</div>
      </div>
    </div>
  );
};

export default Brand;

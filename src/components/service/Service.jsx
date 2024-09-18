import React from "react";
import { serviceData } from "../../static";
import "./service.scss";

const Service = () => {
  console.log(serviceData);
  const serviceItem = serviceData.map((el) => (
    <div className="service__item" key={el.id}>
      <div className="service__img">
        <img src={el.img} alt="" />
      </div>
      <h3 className="service__title">{el.title}</h3>
    </div>
  ));

  return (
    <div className="service">
      <div className="containerMax">
        <div className=" service__items">{serviceItem}</div>
      </div>
    </div>
  );
};

export default Service;

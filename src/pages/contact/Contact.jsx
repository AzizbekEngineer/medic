import React from "react";
import contact from "../../assets/icons/contact.png";
import brand from "../../assets/images/brand.png";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./contact.scss";
import Konsultatsiya from "../../components/konsultatsiya/Konsultatsiya";

const Contact = () => {
  return (
    <div className="contact">
      <div className="containerMax">
        <div className="contact__top">
          <h3 className="contact__title">Контакты</h3>
          <div className="contact__box">
            <div className="contact__box__img">
              <img src={contact} alt="" />
            </div>
            <h3 className="contact__covid">
              В связи с распространением коронавирусной инфекции COVID-19
              магазин переведен на удаленную работу.{" "}
              <span>Все заказы принимаются online и по телефону!</span>
            </h3>
          </div>
        </div>
        <div className="contact__items">
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
      <Konsultatsiya />
      <div className="containerMax">
        <div className="contact__cards">
          <div className="contact__maps">
            <iframe
              className="contact__map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23986.05423356637!2d69.2057574!3d41.281515649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726032153025!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact__brand">
            <img src={brand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

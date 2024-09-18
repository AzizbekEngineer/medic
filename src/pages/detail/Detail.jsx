import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import car from "../../assets/icons/car.png";
import garant from "../../assets/icons/garant.png";
import paypal from "../../assets/icons/paypal.png";
import "./detail.scss";
import ProductData from "../../components/productData/ProductData";
import Konsultatsiya from "../../components/konsultatsiya/Konsultatsiya";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const [index, setIndex] = useState(0);
  const product = data?.payload;
  console.log(product);

  return (
    <div className="detail">
      <div className="containerMax">
        <div className="detail__box">
          <div className="detail__top">
            <div className="detail__left">
              <div className="detail__images">
                {product?.urls?.map((el) => (
                  <img src={el} alt="" />
                ))}
              </div>
              <div className="detail__img">
                <button>
                  <FaChevronLeft />
                </button>
                <img src={product?.urls?.[index]} alt="" />
                <button>
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="detail__right">
              <h3 className="detail__title">{product?.title}</h3>
              <div className="detail__status">
                <div className="detail__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="detail__info">23 отзыва</h3>
              </div>
              <h3 className="detail__price">${product?.price}</h3>
              <h3 className="detail__amount">Колличество:</h3>
              <div className="detail__count">
                <div className="detail__counter">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
                <button className="detail__custom">купить</button>
              </div>
              <div className="detail__moneys">
                <div className="detail__money">
                  <img src={garant} alt="" />
                  <p>Гарантия качества</p>
                </div>
                <div className="detail__money">
                  <img src={car} alt="" />
                  <p>Оперативная доставка</p>
                </div>
                <div className="detail__money">
                  <img src={paypal} alt="" />
                  <p>Все способы оплаты</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="detail__subtitle">Похожие товары</h3>
      <ProductData />
      <Konsultatsiya />
    </div>
  );
};

export default Detail;

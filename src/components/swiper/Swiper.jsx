import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LuArrowUpSquare } from "react-icons/lu";
import "./swiper.scss";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSec() {
  return (
    <>
      <div className="swiper">
        <div className="containerMax">
          <div className="swiper__box">
            <h3 className="swiper__title">Отзывы наших клиентов</h3>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                750: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              navigation={true}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide className="swiper__card">
                <h3 className="swiper__name">Татьяна Самойленко</h3>
                <span className="swiper__time">06.03.2021</span>
                <div className="swiper__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="swiper__desc">
                  Спасибо вам большое за такое устройство,мы уже спим без
                  клеёнки,но пока ещё с будильником,дочка ещё не готова его
                  снимать говорит что для подстраховки,но я рада что рискнула и
                  заказала будильник у нас он прозвенел..
                </p>
                <button className="swiper__btn">
                  <span>развернуть</span> <LuArrowUpSquare />
                </button>
              </SwiperSlide>
              <SwiperSlide className="swiper__card">
                <h3 className="swiper__name">Татьяна Самойленко</h3>
                <span className="swiper__time">06.03.2021</span>
                <div className="swiper__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="swiper__desc">
                  Спасибо вам большое за такое устройство,мы уже спим без
                  клеёнки,но пока ещё с будильником,дочка ещё не готова его
                  снимать говорит что для подстраховки,но я рада что рискнула и
                  заказала будильник у нас он прозвенел..
                </p>
                <button className="swiper__btn">
                  <span>развернуть</span> <LuArrowUpSquare />
                </button>
              </SwiperSlide>
              <SwiperSlide className="swiper__card">
                <h3 className="swiper__name">Татьяна Самойленко</h3>
                <span className="swiper__time">06.03.2021</span>
                <div className="swiper__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="swiper__desc">
                  Спасибо вам большое за такое устройство,мы уже спим без
                  клеёнки,но пока ещё с будильником,дочка ещё не готова его
                  снимать говорит что для подстраховки,но я рада что рискнула и
                  заказала будильник у нас он прозвенел..
                </p>
                <button className="swiper__btn">
                  <span>развернуть</span> <LuArrowUpSquare />
                </button>
              </SwiperSlide>
              <SwiperSlide className="swiper__card">
                <h3 className="swiper__name">Татьяна Самойленко</h3>
                <span className="swiper__time">06.03.2021</span>
                <div className="swiper__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="swiper__desc">
                  Спасибо вам большое за такое устройство,мы уже спим без
                  клеёнки,но пока ещё с будильником,дочка ещё не готова его
                  снимать говорит что для подстраховки,но я рада что рискнула и
                  заказала будильник у нас он прозвенел..
                </p>
                <button className="swiper__btn">
                  <span>развернуть</span> <LuArrowUpSquare />
                </button>
              </SwiperSlide>
              <SwiperSlide className="swiper__card">
                <h3 className="swiper__name">Татьяна Самойленко</h3>
                <span className="swiper__time">06.03.2021</span>
                <div className="swiper__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="swiper__desc">
                  Спасибо вам большое за такое устройство,мы уже спим без
                  клеёнки,но пока ещё с будильником,дочка ещё не готова его
                  снимать говорит что для подстраховки,но я рада что рискнула и
                  заказала будильник у нас он прозвенел..
                </p>
                <button className="swiper__btn">
                  <span>развернуть</span> <LuArrowUpSquare />
                </button>
              </SwiperSlide>
              <SwiperSlide className="swiper__card">
                <h3 className="swiper__name">Татьяна Самойленко</h3>
                <span className="swiper__time">06.03.2021</span>
                <div className="swiper__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="swiper__desc">
                  Спасибо вам большое за такое устройство,мы уже спим без
                  клеёнки,но пока ещё с будильником,дочка ещё не готова его
                  снимать говорит что для подстраховки,но я рада что рискнула и
                  заказала будильник у нас он прозвенел..
                </p>
                <button className="swiper__btn">
                  <span>развернуть</span> <LuArrowUpSquare />
                </button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

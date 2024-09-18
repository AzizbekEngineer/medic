import React from "react";
import Hero from "../../components/hero/Hero";
import Brand from "../../components/brand/Brand";
import Person from "../../components/person/Person";
import Service from "../../components/service/Service";
import Konsultatsiya from "../../components/konsultatsiya/Konsultatsiya";
import AccordionUsage from "../../components/accordion/Accordion";
import SwiperSec from "../../components/swiper/Swiper";
import Material from "../../components/material/Material";
import ProductData from "../../components/productData/ProductData";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Person />
      <Service />
      <ProductData />
      <Konsultatsiya />
      <AccordionUsage />
      <SwiperSec />
      <Material />
    </div>
  );
};

export default Home;

import React from "react";
import ProductData from "../../components/productData/ProductData";
import material1 from "../../assets/images/material1.png";
import material2 from "../../assets/images/material2.png";
import material3 from "../../assets/images/material3.png";
import material4 from "../../assets/images/material4.png";
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <div className="containerMax">
        <h3 className="category__title">Энурезные будильники</h3>
        <div className="category__sort">
          <h3>Сортировать:</h3>
          <select name="" id="">
            <option value="">Category1</option>
            <option value="">Category2</option>
            <option value="">Category3</option>
            <option value="">Category4</option>
            <option value="">Category5</option>
          </select>
        </div>
      </div>
      <ProductData />
      <div className="containerMax">
        <div className="category__items">
          <h3 className="category__item__title">Статьи по теме</h3>
          <div className="category__cards">
            <div className="category__card">
              <div className="category__card__left">
                <img src={material1} alt="" />
              </div>
              <div className="category__card__right">
                <h4>8 шагов по борьбе с энурезом. Советы родителям</h4>
                <p>
                  Предлагаем вашему вниманию перевод статьи Министерства
                  здравоохранения Австралии, посвященную проблеме детского и
                  подросткового энуреза..
                </p>
                <button>читать </button>
              </div>
            </div>
            <div className="category__card">
              <div className="category__card__left">
                <img src={material2} alt="" />
              </div>
              <div className="category__card__right">
                <h4>Энурезный будильник. Как выбрать лучший вариант</h4>
                <p>
                  Как выбрать энурезный будильник, на что следует обращать
                  внимание, какому прибору отдать предпочтение, чтобы мочевой
                  будильник был эффективным средством..
                </p>
                <button>читать </button>
              </div>
            </div>
            <div className="category__card">
              <div className="category__card__left">
                <img src={material3} alt="" />
              </div>
              <div className="category__card__right">
                <h4>Энурезный будильник. Как это работает</h4>
                <p>
                  Энурезная сигнализация- это устройство, которое пробуждает
                  ребенка, который мочится в постель. Мочевой будильник состоит
                  из закрепленного на белье..
                </p>
                <button>читать </button>
              </div>
            </div>
            <div className="category__card">
              <div className="category__card__left">
                <img src={material4} alt="" />
              </div>
              <div className="category__card__right">
                <h4>7 родительских ошибок при энурезе</h4>
                <p>
                  Как выбрать энурезный будильник, на что следует обращать
                  внимание, какому прибору отдать предпочтение, чтобы мочевой
                  будильник был эффективным средством..
                </p>
                <button>читать </button>
              </div>
            </div>
          </div>
          <div className="category__btn">смотреть все статьи </div>
        </div>
      </div>
      <div className="containerMax">
        <div className="category__info__title">Блок для SEO текста</div>
        <p className="category__info__desc">
          Для комфортного использования техники целесообразно купить защитные
          очки для работы за компьютером. Сделать это рекомендуется людям,
          проводящим за монитором много часов, вне зависимости от остроты
          зрения. Очки для компьютера повышают четкость изображения, убирают
          блики, нейтрализуют эффект мерцания монитора. Линзы с диоптриями
          обеспечивают необходимую коррекцию.
          <br />
          Интернет-магазин «Крот шоп» предлагает разнообразную оптическую
          продукцию.Зная состояние своего зрения, подобрать необходимую модель
          несложно.
        </p>
        <h3 className="category__name">Это временный текст</h3>
        <p className="category__desc">
          Использование неподходящих линз при постоянном взаимодействии с
          монитором может усугубить проблемы со здоровьем глаз. Выбирать
          специальные очки для работы за компьютером стоит после консультации с
          офтальмологом.В продаже имеются разнообразные модели таких очков:
          <br />с покрытием, поглощающим электромагнитные волны; <br />с
          антирефлексным слоем, эффективно снижающим степень отражения. <br />
          На всю продукцию предоставляются сертификаты качества.
        </p>
        <h3 className="category__name">Пример подзаголовка</h3>
        <p className="category__desc">
          Одним из плюсов заказа компьютерных очков на сайте интернет-магазина
          Крот.Шоп является удобная и бережная доставка. Мы доставляем наши
          товары по всей России, как в крупные города, такие как: Москва,
          Санкт-Петербург, Новосибирск, Екатеринбург, Нижний Новгород, Казань,
          так и в любой город, где есть пункт выдачи одной из наших транспортных
          компаний или Почты России. Заказав у нас очки для компьютера Вы можете
          быть уверены, что мы тщательно упакуем вашу покупку и в кратчайшие
          сроки передадим ее транспортной компании. Быстрая и бережная доставка
          – важная составляющая часть нашей работы.
        </p>
      </div>
    </div>
  );
};

export default Category;

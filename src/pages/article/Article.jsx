import React from "react";
import material1 from "../../assets/images/material1.png";
import material2 from "../../assets/images/material2.png";
import material3 from "../../assets/images/material3.png";
import material4 from "../../assets/images/material4.png";
import "./article.scss";
import Konsultatsiya from "../../components/konsultatsiya/Konsultatsiya";

const Article = () => {
  const ArticleData = [
    {
      id: 1,
      title: "8 шагов по борьбе с энурезом. Советы родителям",
      desc: "Предлагаем вашему вниманию перевод статьи Министерства здравоохранения Австралии, посвященную проблеме детского и подросткового энуреза. В ней доступным языком объясняется суть проблемы и методы эффективного ее решения. Очень классная статья.",
      img: material1,
    },
    {
      id: 2,
      title: "Энурезный будильник.Как это работает",
      desc: "Энурезная сигнализация- это устройство, которое пробуждает ребенка, который мочится в постель. Мочевой будильник состоит из закрепленного на белье датчика, связанного с блоком сигнализации, который размещается на руке ребенка.",
      img: material2,
    },
    {
      id: 3,
      title: "Энурезный будильник. Как выбрать",
      desc: "Как выбрать энурезный будильник, на что следует обращать внимание, какому прибору отдать предпочтение, чтобы мочевой будильник был эффективным средством по борьбе с энурезом, а не дорогой бесполезной игрушкой.",
      img: material3,
    },
    {
      id: 4,
      title: "8 шагов по борьбе с энурезом. Советы родителям",
      desc: "Предлагаем вашему вниманию перевод статьи Министерства здравоохранения Австралии, посвященную проблеме детского и подросткового энуреза. В ней доступным языком объясняется суть проблемы и методы эффективного ее решения. Очень классная статья.",
      img: material4,
    },
  ];

  const articleItem = ArticleData.map((el) => (
    <div className="article__card" key={el.id}>
      <div className="article__img">
        <img src={el.img} alt="" />
      </div>
      <div className="article__info">
        <h3>{el.title}</h3>
        <p>{el.desc}</p>
        <div className="article__card__bottom">
          <p>04.11.2020</p>
          <button>читать </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="article">
      <div className="containerMax">
        <h3 className="article__title">Статьи</h3>
        <div className="article__cards">{articleItem}</div>
        <div className="article__pagination">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <Konsultatsiya />
    </div>
  );
};

export default Article;

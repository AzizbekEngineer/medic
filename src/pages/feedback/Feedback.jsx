import React from "react";
import { FaStar } from "react-icons/fa";
import "./feedback.scss";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="containerMax">
        <div className="feedback__top">
          <h3 className="feedback__title">Отзывы</h3>
          <button className="feedback__btn">написать отзыв</button>
        </div>
        <div className="feedback__box">
          <div className="feedback__cards">
            <div className="feedback__card">
              <div className="feedback__card__top">
                <div className="feedback__left">
                  <h3>Татьяна Самойленко </h3>
                  <span>06.09.2020</span>
                </div>
                <div className="feedback__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="feedback__desc">
                Спасибо вам большое за такое устройство,мы уже спим без
                клеёнки,но пока ещё с будильником,дочка ещё не готова его
                снимать говорит что для подстраховки,но я рада что рискнула и
                заказала будильник у нас он прозвенел 3 раза и всё, теперь спим
                всю ночь,а раньше каждую ночь вставали менять постель,а бывало и
                два раза,результат на лицо, надеюсь что больше мы к этой
                проблеме не вернёмся, ещё раз спасибо.
              </p>
            </div>
            <div className="feedback__card">
              <div className="feedback__card__top">
                <div className="feedback__left">
                  <h3>Татьяна Самойленко </h3>
                  <span>06.09.2020</span>
                </div>
                <div className="feedback__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="feedback__desc">
                Спасибо вам большое за такое устройство,мы уже спим без
                клеёнки,но пока ещё с будильником,дочка ещё не готова его
                снимать говорит что для подстраховки,но я рада что рискнула и
                заказала будильник у нас он прозвенел 3 раза и всё, теперь спим
                всю ночь,а раньше каждую ночь вставали менять постель,а бывало и
                два раза,результат на лицо, надеюсь что больше мы к этой
                проблеме не вернёмся, ещё раз спасибо.
              </p>
            </div>
            <div className="feedback__card">
              <div className="feedback__card__top">
                <div className="feedback__left">
                  <h3>Татьяна Самойленко </h3>
                  <span>06.09.2020</span>
                </div>
                <div className="feedback__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="feedback__desc">
                Спасибо вам большое за такое устройство,мы уже спим без
                клеёнки,но пока ещё с будильником,дочка ещё не готова его
                снимать говорит что для подстраховки,но я рада что рискнула и
                заказала будильник у нас он прозвенел 3 раза и всё, теперь спим
                всю ночь,а раньше каждую ночь вставали менять постель,а бывало и
                два раза,результат на лицо, надеюсь что больше мы к этой
                проблеме не вернёмся, ещё раз спасибо.
              </p>
            </div>
            <div className="feedback__card">
              <div className="feedback__card__top">
                <div className="feedback__left">
                  <h3>Татьяна Самойленко </h3>
                  <span>06.09.2020</span>
                </div>
                <div className="feedback__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="feedback__desc">
                Спасибо вам большое за такое устройство,мы уже спим без
                клеёнки,но пока ещё с будильником,дочка ещё не готова его
                снимать говорит что для подстраховки,но я рада что рискнула и
                заказала будильник у нас он прозвенел 3 раза и всё, теперь спим
                всю ночь,а раньше каждую ночь вставали менять постель,а бывало и
                два раза,результат на лицо, надеюсь что больше мы к этой
                проблеме не вернёмся, ещё раз спасибо.
              </p>
            </div>
            <div className="feedback__card">
              <div className="feedback__card__top">
                <div className="feedback__left">
                  <h3>Татьяна Самойленко </h3>
                  <span>06.09.2020</span>
                </div>
                <div className="feedback__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="feedback__desc">
                Спасибо вам большое за такое устройство,мы уже спим без
                клеёнки,но пока ещё с будильником,дочка ещё не готова его
                снимать говорит что для подстраховки,но я рада что рискнула и
                заказала будильник у нас он прозвенел 3 раза и всё, теперь спим
                всю ночь,а раньше каждую ночь вставали менять постель,а бывало и
                два раза,результат на лицо, надеюсь что больше мы к этой
                проблеме не вернёмся, ещё раз спасибо.
              </p>
            </div>
          </div>
          <div className="feedback__pagination">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

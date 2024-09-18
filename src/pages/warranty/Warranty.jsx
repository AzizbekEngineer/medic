import React from "react";
import warranty from "../../assets/images/warranty.png";
import success from "../../assets/icons/success.png";
import error from "../../assets/icons/error.png";
import "./warranty.scss";
import Konsultatsiya from "../../components/konsultatsiya/Konsultatsiya";

const Warranty = () => {
  return (
    <div className="warranty">
      <div className="containerMax">
        <h3 className="warranty__sec__title">Гаратния</h3>
        <div className="warranty__box">
          <div className="warranty__left">
            <h3 className="warranty__box--title">
              ГАРАНТИЙНЫЙ СРОК ЭКСПЛУАТАЦИИ
            </h3>
            <p className="warranty__desc">
              В течение гарантийного срока эксплуатации, потребитель имеет право
              на бесплатное техническое обслуживание товара, а в случае
              обнаружения недостатков (отклонение от требований нормативных
              документов) - на бесплатный ремонт или замену товара или возврат
              его стоимости в соответствии с требованиями Закона Украины «О
              защите прав потребителей» и Порядка гарантийного ремонта
              (обслуживания) или гарантийной замены технически сложных бытовых
              товаров, утвержденного постановлением Кабинета Министров Украины
              от 11 апреля 2002 N 506. <br /> <br /> В случае если в течение
              гарантийного срока товар эксплуатировался с нарушением правил или
              потребитель не выполнял рекомендаций предприятия, выполняющего
              работы по гарантийному обслуживанию товара, ремонт производится за
              счет потребителя. <br /> <br /> ✅ Срок службы (годности) товара 5
              лет. Производитель (поставщик) гарантирует возможность
              использования товара по назначению в течение срока службы (при
              условии проведения в случае необходимости послегарантийного
              технического обслуживания или ремонта за счет потребителя). <br />
              <br /> ❌ Срок службы (годности) товара прекращается в случае:
              <br /> - внесение в конструкцию товара изменений и осуществления
              доработок, а также использования узлов, деталей, комплектующих
              изделий, не предусмотренных нормативными документами; <br /> -
              использование не по назначению; <br /> - повреждение потребителем;
              <br /> - нарушение потребителем правил эксплуатации товара.
            </p>
          </div>
          <div className="warranty__box__img">
            <img src={warranty} alt="" />
          </div>
        </div>
        <h3 className="warranty__title">Условия возврата</h3>
        <div className="warranty__service">
          <div className="warranty__service__left">
            <div className="warranty__name">
              <img src={success} alt="" />
              <h3 className="warranty__service__title">
                Товар подлежит возврату:
              </h3>
            </div>
            <p className="warranty__desc">
              Товар подлежит возврату в течение 14 дней со дня покупки при
              наличии товарного чека согласно ст. 9 Закона Украины «О защите
              прав потребителей». <br /> <br /> При покупке товара внимательно
              проверяйте содержимое Вашего заказа. Вы можете отказаться от
              покупки товара или его части непосредственно в момент покупки,
              если товар не соответствует заказанному. <br /> <br /> Если Вы
              решили вернуть товар по любой причине, он должен быть передан Вами
              только в оригинальной целостной упаковке, которая не подвергалась
              механическим повреждениям. Отправка пересылки осуществляется за
              счет Отправителя. <br /> <br /> Продукция не должна быть
              использована покупателем и должна быть не просрочена. Все услуги
              доставки по возврату товара оплачивает клиент. <br /> <br /> Вы
              можете вернуть товар, если он находится в первоначальном виде без
              повреждений (царапин, сколов), со всеми комплектующими,
              вкладышами, инструкциями и наклейками (в первоначальном виде) и
              если товар вообще не использовался.
            </p>
          </div>
          <div className="warranty__service__right">
            <div className="warranty__name">
              <img src={error} alt="" />
              <h3 className="warranty__service__title">
                Товар НЕ подлежит возврату:
              </h3>
            </div>
            <p className="warranty__desc">
              Замена и возврат товара не осуществляется, если он уже был в
              использовании покупателем, если он имеет сколы, царапины и прочее
              повреждения. <br /> <br /> Замена и возврат товара не
              осуществляется, если отсутствует оригинальная целостная упаковка,
              которая не подвергалась механическим повреждениям, либо
              отсутствуют любые комплектующие, вкладыши, инструкции и наклейки
              (в первоначальном виде). <br /> <br /> Замена и возврат товара не
              осуществляется, если Вы ошибочно заказали товар не с теми
              характеристиками, или с экспериментальной целью. Ответственность
              за правильный подбор характеристик и параметров товара полностью
              возлагается на покупателя. <br /> <br /> Все претензии касательно
              целостности и комплектации заказа не принимаются, если осмотр не
              выполнен непосредственно при получении товара.
            </p>
          </div>
        </div>
      </div>
      <Konsultatsiya />
    </div>
  );
};

export default Warranty;

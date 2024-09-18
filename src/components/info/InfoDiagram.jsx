import React from "react";
import "./InfoDiagram.scss";

const InfoDiagram = () => {
  return (
    <div className="containerMax">
      <div className="info-diagram">
        <div className="center-circle">
          <h1>Когда необходимо использовать энурезный будильник</h1>
        </div>
        <div className="points">
          <div className="point point-1">
            <p>
              Ваш ребенок старше 6 лет и он часто оставляет постель мокрой после
              ночного сна
            </p>
          </div>
          <div className="point point-2">
            <p>
              Вашего ребенка беспокоит, что он мочится в кровать (даже если он
              младше 6 лет)
            </p>
          </div>
          <div className="point point-3">
            <p>
              Ваш ребенок снова начал мочиться в кровать после нескольких сухих
              недель
            </p>
          </div>
          <div className="point point-4">
            <p>
              Вы наказываете или замечаете, что хотите наказать своего ребенка
              за ночное недержание мочи
            </p>
          </div>
          <div className="point point-5">
            <p>
              Ваш ребенок может намочить белье даже во время дневного
              бодрствования
            </p>
          </div>
          <div className="point point-6">
            <p>
              Ваш ребенок может намочить белье даже во время дневного
              бодрствования
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDiagram;

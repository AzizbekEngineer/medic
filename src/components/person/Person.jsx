import React from "react";
import video from "../../assets/images/video.png";
import "./person.scss";

const Person = () => {
  return (
    <div className="person">
      <div className="containerMax person__items">
        <div className="person__left">
          <h3 className="person__title">Mechavoy budilnik</h3>
          <p className="person__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            laboriosam delectus commodi hic dicta, facere eos tenetur non illo
            accusantium, dolorem aperiam nemo! Eius, sunt ratione ipsam
            aspernatur, corrupti numquam neque nesciunt omnis veniam, eos
            provident temporibus ex repudiandae cumque vel molestias eligendi
            unde accusamus! <br /> <br /> Quis, nisi distinctio iste laboriosam
            voluptatum est dolores non eligendi? Non, delectus ea omnis
            similique ipsa culpa veritatis perspiciatis quam sit placeat earum
            obcaecati nostrum ratione eos quae totam ad consequuntur repudiandae
            recusandae sunt aut laborum minima deserunt ipsam? <br /> <br />{" "}
            Dolores praesentium laboriosam quasi labore, quibusdam, doloremque
            porro illum itaque exercitationem ex, quod magni! Nobis tenetur
            quasi voluptates atque vel autem neque, ipsam repudiandae id
            quaerat? Porro cumque consequuntur mollitia! Ipsum eaque perferendis
            vel ducimus veniam.
          </p>
        </div>
        <div className="person__right">
          <h3 className="person__info">
            Обзор нашего энурезного будильника MoDo-king MA-108 Доктором
            Комаровским
          </h3>
          <div className="peron__img">
            <img src={video} width={"100%"} alt="" />
          </div>
          <button className="person__btn">часто задаваемые вопросы </button>
        </div>
      </div>
    </div>
  );
};

export default Person;

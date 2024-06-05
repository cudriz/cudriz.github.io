import React from "react";
import style from "./Album.module.css";

const Album = () => {
  return (
    <div className={style.album}>
      <h2 className={style.titulo}>
        MOMENTOS MEMORABLES DEL FREESTYLE ARGENTINO
      </h2>
      <div className={style.imageContainer}>
        <img
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2014,w_2685/c_fill,w_800,h_572/q_auto,f_auto/redbullcom/2021/9/29/wvijqgtxzj3rsytfhqjf/tatavsmecha"
          alt="Imagen 1"
          className={style.image}
        />
        <img
          src="https://mundofreestyle.com/wp-content/uploads/2019/03/Do3PVIhX4AEiw8g.jpg-large-e1551644800972.jpg"
          className={style.image}
        />
        <img
          src="https://elestilolibre.com/wp-content/uploads/2020/06/Captura-7.jpg"
          className={style.image}
        />
        <img
          src="https://i.ytimg.com/vi/3yktjtDZVc4/maxresdefault.jpg"
          className={style.image}
        />
        <img
          src="https://media.diariopopular.com.ar/p/c523fa77397badb9e39b35a6dc05e0ad/adjuntos/143/imagenes/008/049/0008049927/1200x675/smart/imagepng.png"
          alt="Imagen 5"
          className={style.image}
        />
      </div>
    </div>
  );
};

export default Album;

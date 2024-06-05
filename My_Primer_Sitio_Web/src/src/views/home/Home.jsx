import React from "react";
import style from "./Home.module.css";
import Album from "../../components/album/Album";
import Historia from "../../components/historia/Historia";

const Home = () => {
  return (
    <div className={style.contenedor}>
      <Album />
      <Historia />
    </div>
  );
};

export default Home;

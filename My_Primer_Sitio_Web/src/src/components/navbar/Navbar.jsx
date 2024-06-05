import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.containerLogo}>
        <img
          className={style.logo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWafU2mVSiw68qM8Tp5MzVofCcMJobaQM5g&s"
          alt="logo"
        />
      </div>
      <ul className={style.nav_links}>
        <span className={style.logoText}>
          EL FREESTYLE ES ARTE PARA EL QUE REALMENTE LO APRECIA.
        </span>
        <li className={style.nav_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.nav_item}>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

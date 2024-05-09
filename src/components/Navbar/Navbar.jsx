import React, { useState } from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar_container}>
          <div className={style.navbar_brand}>
            <h2>Covid ID</h2>
          </div>
          <ul className={style.navbar_link}>
            <a>Global</a>
            <a>Indonesia</a>
            <a>Provinsi</a>
            <a>About</a>
          </ul>
        </div>
      </div>
      <div className={style.navbar_mobile}>
        <h4>Covid ID</h4>
        <div
          onClick={() => setActive(!active)}
          className={
            active ? `${style.hamburger} ${style.active}` : style.hamburger
          }
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={active ? `${style.menu} ${style.active}` : style.menu}>
        <a>Global</a>
        <a>Indonesia</a>
        <a>Provinsi</a>
        <a>About</a>
      </div>
    </>
  );
};

export default Navbar;

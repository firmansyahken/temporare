import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    
  return (
    <>
      <div className={style.footer}>
        <div className={style.footer_container}>
          <div className={style.footer_author}>
            <h3>Covid ID</h3>
            <p>Developed by aufaroot18</p>
          </div>
          <div className={style.footer_link}>
            <a>Global</a>
            <a>Indonesia</a>
            <a>Provinsi</a>
            <a>About</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

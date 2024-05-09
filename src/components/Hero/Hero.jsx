import React from "react";
import style from "./Hero.module.css";
import Button from "../Button/Button";
import HeroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <>
      <div className={style.hero}>
        <div className={style.hero_content}>
          <div className={style.content_head}>
            <h1>Covid ID</h1>
            <p>Monitoring Perkembangan Covid</p>
          </div>
          <div className={style.content_body}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <Button title="Vaccine" />
          </div>
        </div>
        <div className={style.hero_image}>
          <img src={HeroImage} alt="hero_image" />
        </div>
      </div>
    </>
  );
};

export default Hero;

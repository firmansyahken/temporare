import React from "react";
import style from "./FormCovid.module.css";
import Button from "../Button/Button";
import FormImage from "../../assets/form.svg";

const FormCovid = () => {
  return (
    <>
      <div className={style.form}>
        <div className={style.form_container}>
          <div className={style.form_image}>
            <img src={FormImage} alt="form_illustration" />
          </div>
          <div className={style.form_content}>
            <h1>Form Covid</h1>
            <div className={style.form_input}>
              <label>Provinsi</label>
              <input type="text" />
            </div>
            <div className={style.form_input}>
              <label>Status</label>
              <input type="text" />
            </div>
            <div className={style.form_input}>
              <label>Jumlah</label>
              <input type="number" />
            </div>
            <div className={style.form_input}>
              <Button title="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCovid;

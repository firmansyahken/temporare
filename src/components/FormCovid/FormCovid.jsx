import React, { useContext, useState } from "react";
import style from "./FormCovid.module.css";
import Button from "../Button/Button";
import FormImage from "../../assets/form.svg";
import data from "../../utils/constants/provinces";
import FormContext from "../../utils/context/FormContext";

const FormCovid = () => {
    const { updateData } = useContext(FormContext);
    const [formData, setFormData] = useState({
        provinsi: "0", status: "kasus", total: "0"
    })

    const handleInput = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateData(formData);
        e.target.reset();
        setFormData({ provinsi: "0", status: "kasus", total: "0"})
    }

    const statuses = [
      {
        name: "Positif",
        key: "kasus"
      },
      {
        name: "Sembuh",
        key: "sembuh"
      },
      {
        name: "Dirawat",
        key: "dirawat"
      },
      {
        name: "Meninggal",
        key: "meninggal"
      }
    ];

  return (
    <>
      <div className={style.form}>
        <div className={style.form_container}>
          <div className={style.form_image}>
            <img src={FormImage} alt="form_illustration" />
          </div>
          <form onSubmit={handleSubmit} method="post" className={style.form_content}>
            <h1>Form Covid</h1>
            <div className={style.form_input}>
              <label>Provinsi</label>
              <select name="provinsi" onChange={handleInput}>
                {data.provinces.map((province, index) => (
                  <option key={index} value={index}>{province.kota}</option>
                ))}
              </select>
            </div>
            <div className={style.form_input}>
              <label>Status</label>
              <select name="status" onChange={handleInput}>
                {statuses.map((status, index) => (
                  <option key={index} value={status.key}>{status.name}</option>
                ))}
              </select>
            </div>
            <div className={style.form_input}>
              <label>Jumlah</label>
              <input onChange={handleInput} name="total" type="number" />
            </div>
            <div className={style.form_input}>
              <Button title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormCovid;

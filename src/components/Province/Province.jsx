import React, { useContext } from "react";
import style from "./Province.module.css";
import data from "../../utils/constants/provinces";
import FormContext from "../../utils/context/FormContext";

const Province = () => {
  const {provinces} = useContext(FormContext);

  return (
    <>
      <div className={style.province}>
        <div className={style.province_head}>
          <h1>Provinsi</h1>
          <p>Data Covid Berdasarkan Provinsi</p>
        </div>
        <div className={style.province_table}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {provinces.map((province, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{province.kota}</td>
                  <td>{province.kasus}</td>
                  <td>{province.sembuh}</td>
                  <td>{province.dirawat}</td>
                  <td>{province.meninggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Province;

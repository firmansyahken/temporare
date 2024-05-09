import React from "react";
import style from "./Indonesia.module.css";
import data from "../../utils/constants/indonesia";

const Indonesia = () => {
  return (
    <>
      <div className={style.indonesia}>
        <div className={style.indonesia_container}>
          <div className={style.indonesia_head}>
            <h1>Indonesia</h1>
            <p>Data Covid Berdasarkan Indonesia</p>
          </div>
          <div className={style.indonesia_data}>
            {data.indonesia.map((indonesia, index) => (
              <div key={index} className={style.card}>
                <h3>{indonesia.status}</h3>
                <h1>{indonesia.total}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Indonesia;

import React from "react";
import style from "./style.module.css";

export default function Parallax() {
  return (
    <div>
      <div className={style.parallax}>
        <div className={style.caption}>
          <span className={style.border}>
            Dirección: Av. Pres. Raúl Alfonsín 1035
            <br />
            <br />
            Teléfono de Emergencia: 4241-2211
          </span>
        </div>
      </div>
    </div>
  );
}

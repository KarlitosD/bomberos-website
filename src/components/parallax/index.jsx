import React from "react";
import style from "./style.module.css";

export default function Parallax() {
  return (
    <div>
      <div className={style.parallax}>
        <div className={style.caption}>
          <span className={style.border}>
            Direccion: Av. Pres. Raúl Alfonsín 1035
            <br />
            <br />
            Telefono de emergencia: 4241-2211
          </span>
        </div>
      </div>
    </div>
  );
}

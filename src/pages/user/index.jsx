import React from "react";
import style from "./style.module.css";

export function User() {
  return (
    <>
      <div className={style.contenedorNicoPuto}>
        <div className={style.credencialNicoPuto}>
          <div className={style.borderTopNicoPuto}>
            <h1>SOCIO</h1>
            <h1>
              del cuerpo activo de la sociedad de Bomberos Voluntarios de Lanús
            </h1>
          </div>
          <div className={style.centroNicoPuto}>
            <div className={style.fotoNicoPuto} />
            <div className={style.borderRightNicoPuto}>
              <p className={style.certNicoPuto}>
                Certifico que el titular de la presente Señor/a
              </p>
              <p>Nombre:</p>
              <p>Apellido:</p>
              <p>DNI:</p>
              <p>Numero de socio:</p>
              <p className={style.cert1NicoPuto}>es SOCIO</p>
            </div>
          </div>
          <p className={style.firmNicoPuto}>Jefe_de_cuerpo Presidente</p>
          <div className={style.borderBottomNicoPuto} />
        </div>
      </div>
    </>
  );
}

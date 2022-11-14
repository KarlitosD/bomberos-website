import React from "react";
import style from "./style.module.css";
import { useEffect, useState, useCallback, useRef } from "react";
import { getAssociate } from "@/services/associates";
import { useAtom } from "jotai";
import { associatesAtom } from "../../atoms/associates";
import { useAuth } from "../../hooks/useAuth";
import { toJpeg } from "html-to-image";

export function User() {
  const { user } = useAuth();
  const [associate, setAssociate] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    fetchAssociate();
  }, []);

  const onButtonClick = () => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "carnet-socio.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log("uwu, tuvimos um pequeuño ewowsito 👉👈" + err);
      });
  };

  async function fetchAssociate() {
    const data = await getAssociate(user?.id);
    setAssociate(data);
  }

  return (
    <>
      <div className={style.container}>
        <div ref={ref} className={style.credential}>
          <div className={style.borderT}>
            <h1>SOCIO</h1>
            <h1>
              del cuerpo activo de la sociedad de Bomberos Voluntarios de Lanús
            </h1>
          </div>
          <div className={style.center}>
            <div className={style.photo} />
            <div className={style.rightSide}>
              <p className={style.certi}>
                Certifico que el titular de la presente Señor/a
              </p>
              <p>Nombre: {associate?.name}</p>
              <p>Apellido: {associate?.surname}</p>
              <p>DNI: {associate?.dni}</p>
              <p>Numero de socio: {associate?.associateNumber}</p>
              <p className={style.isAssociate}>es SOCIO</p>
            </div>
          </div>
          <p className={style.signature}>Jefe_de_cuerpo Presidente</p>
          <div className={style.borderB} />
        </div>
      </div>
      <button onClick={onButtonClick} className={style.downloadBtn}>DESCARGAR</button>
    </>
  );
}

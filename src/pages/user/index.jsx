import { useRef } from "react";
import { json, redirect, useLoaderData } from "react-router-dom";
import { toJpeg } from "html-to-image";
import { getAssociate } from "@/services/associates";
import { supabase } from "@/supabase";
// import { useAuth } from "@/hooks/useAuth";
import style from "./style.module.css";

export const loader = async () => {
  const user = supabase.auth.user();
  // if(!user) return redirect("/login")
  if (!user) return null;
  const [associate] = await getAssociate(user?.id);
  // if (!associate?.role) return redirect("/profile");
  return json(associate);
};

export function User() {
  const associate = useLoaderData();
  const ref = useRef(null);

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
        console.log("uwu, tuwimos um peweuño ewowsito 👉👈" + err);
      });
  };
  return (
    <>
      <div className={style.container}>
        <div>
          <div ref={ref} className={style.credential}>
            <div className={style.borderT}>
              <h1 className={style.title}>
                SOCIO
                <br />
                del cuerpo activo de la sociedad de Bomberos Voluntarios de
                Lanús
              </h1>
            </div>
            <div>
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
                  <div className={style.isAssociateContainer}>
                    <p className={style.isAssociate}>es SOCIO</p>
                  </div>
                </div>
              </div>
              <div className={style.signaturesContainer}>
                <p className={style.signature}>Jefe de Cuerpo</p>
                <p className={style.signature}>Presidente</p>
              </div>
            </div>
            <div className={style.borderB} />
          </div>
          <button onClick={onButtonClick} className={style.BtnDNLD}>
            DESCARGAR
          </button>
        </div>
      </div>
    </>
  );
}

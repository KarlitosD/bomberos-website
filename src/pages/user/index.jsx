import { useRef, useState } from "react";
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
  const [image, setImage] = useState(null);
  const [associateImage, setAssociateImage] = useState(
    associate?.imageUrl || ""
  );

  const onBtnDNLDClick = () => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const { data, error } = await supabase.storage
        .from("associate-image")
        .upload(`${Date.now()}_${image.name}`, image);

      if (error) {
        console.log(error);
      }

      if (associate.imageUrl) {
        const { data, error } = await supabase.storage
          .from("associate-image")
          .remove([`${associate.imageUrl.substring(16)}`]);
        console.log(data)
        if (error) {
          console.log(error);
        }
      }

      const { data:miniData, error:miniError } = await supabase
        .from("associates")
        .update({
          imageUrl: data.Key,
        })
        .match({ dni: associate.dni });

      if (miniError) {
        console.log(miniError);
      }
      if (miniData) {
        setAssociateImage(data.Key);
        console.log("Imagen actualizada");
      }
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.credentialContainer}>
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
                  <div className={style.photo}>
                    <img
                      src={`https://seappncbmvautcaltduu.supabase.co/storage/v1/object/public/${associateImage}`}
                      width={150}
                    />
                  </div>
                  <div className={style.rightSide}>
                    <p className={style.certi}>
                      Certifico que el titular de la presente Señor/a
                    </p>
                    <div className={style.dataContainer}>
                      <p className={style.data}>
                        <b>Nombre/s:</b> {associate?.name}
                      </p>
                      <p>
                        <b>Apellido/s:</b> {associate?.surname}
                      </p>
                      <p>
                        <b>DNI:</b> {associate?.dni}
                      </p>
                      <p>
                        <b>Número de socio:</b> {associate?.associateNumber}
                      </p>
                    </div>
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
            <button onClick={onBtnDNLDClick} className={style.btnDNLD}>
              DESCARGAR
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={style.updatePicture}>
          <input
            type="file"
            accept="image/jpeg image/png"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type={"submit"} className={style.btnEdit}>
            Actualizar Foto
          </button>
        </form>
      </div>
    </>
  );
}

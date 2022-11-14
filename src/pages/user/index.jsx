import React from "react";
import style from "./style.module.css";
import getAssociates from "@/services/associates";
import { toPng } from "html-to-image";

export function User() {
  const [associates, setAssociates] = useAtom(associatesAtom);

  useEffect(() => {
    if (associates.length === 0) {
      fetchAssociates();
    }
  }, []);

  async function fetchAssociates() {
    const data = await getAssociates();
    setAssociates(data);
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.credential}>
          <div className={style.borderT}>
            <h1>SOCIO</h1>
            <h1>
              del cuerpo activo de la sociedad de Bomberos Voluntarios de Lanús
            </h1>
          </div>
          <div className={style.center}>
            <div className={style.photo} />
            <div className={style.borderR}>
              <p className={style.certi}>
                Certifico que el titular de la presente Señor/a
              </p>
              <p>Nombre:</p>
              <p>Apellido:</p>
              <p>DNI:</p>
              <p>Numero de socio:</p>
              <p className={style.isAssociate}>es SOCIO</p>
            </div>
          </div>
          <p className={style.signature}>Jefe_de_cuerpo Presidente</p>
          <div className={style.borderB} />
        </div>
      </div>
    </>
  );
}

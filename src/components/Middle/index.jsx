import { Link } from "react-router-dom";
import Parallax from "../../Parallax";
import styles from "./style.module.css";

export function Middle() {
  return (
    <>
      <div className={styles.contenedorSCD}>
        <Link to="/informacion/socios" className={styles.anima}>
          <div className={styles.Soci}>
            <p className={styles.title}>SOCIOS</p>
          </div>
        </Link>
        <Link to="/informacion/aspirantes" className={styles.anima}>
          <div className={styles.Cade}>
            <p className={styles.title}>ASPIRANTES</p>
          </div>
        </Link>
        <Link to="/donaciones" className={styles.anima}>
          <div className={styles.Dona}>
            <p className={styles.title}>DONACIONES</p>
          </div>
        </Link>
      </div>
      <Parallax />
      <div className={styles.iframes}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13121.066695941188!2d-58.3811!3d-34.6984532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a2c44eccfcb5756!2sBOMBEROS%20VOLUNTARIOS%20DE%20LAN%C3%9AS!5e0!3m2!1ses-419!2sar!4v1659825336950!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.feed}></div>
      </div>
    </>
  );
}

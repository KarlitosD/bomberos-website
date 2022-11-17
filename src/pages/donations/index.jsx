import React from "react";
import styles from "./style.module.css";
import qr from "@/assets/img/qr.png"
import merc from "@/assets/img/merc.png"

const Card = ({ title, description }) => {
  return (
    <div className="question">
      <div className="barra1">
        <h2>{title}</h2>
      </div>
      <div className="barra2">
        {description}
      </div>
    </div>
  );
};

export function Donations() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <img src={qr} className={styles.avatar} />
        <h1 className={styles.title}>¡Vos tambien podes aportar!</h1>
        <br />
        <p className={styles.text}>CVU:0000003100076208932278</p>
        <p className={styles.text}>Alias: bomberos.lanus.mp</p>
        <img src={merc} className={styles.avatar1} />
      </div>
    </div>
  );
}

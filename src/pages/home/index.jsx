import React from "react";
import { Carousel } from "@/components/Carousel";
import { Middle } from "@/components/Middle";
import styles from "./style.module.css";
import logoUrl from "@/assets/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareInstagram, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

export function Home() {
  return (
    <>
      <section className={styles.body}>
        <Carousel className={styles.carousel} autoplay={true} />
      </section>

      <section className={styles.mid}>
        <Middle />
      </section>

      <footer className={styles.footer}>
        <div className={styles.group1}>
          <div className={styles.box}>
            <figure>
              <div>
                <img src={logoUrl} className={styles.avatar} />
              </div>
            </figure>
          </div>
          <div className={styles.box}>
            <h2>SOBRE NOSOTROS</h2>
            <p className={styles.info}>Fecha de fundación: 20 / 09 / 1913<br/>Av. Pres. Raúl Alfonsín 1035<br/>Lanús - CP: (1824)<br/>Buenos Aires - Argentina<br/><br/>11 5570-0703<br/>bomberosvoluntariosdelanus1913@gmail.com</p>
          </div>
          <div className={styles.box}>
            <h2>SEGUINOS</h2>
            <div className={styles.social}>
              <a href="https://www.instagram.com/bomberosvoluntariosdelanus/?hl=es" className="icon"><FontAwesomeIcon icon={faSquareInstagram}></FontAwesomeIcon></a>
              <a href="https://es-la.facebook.com/bvlanusoficial/" className="icon"><FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon></a>
            </div>
          </div>
        </div>
        <div className={styles.group2}>
          <small>&copy; <b>Bomberos Voluntarios de Lanus</b> - Todos los Derechos Reservados.</small>
        </div>
      </footer>
    </>
  );
}

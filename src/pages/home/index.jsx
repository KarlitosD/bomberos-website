import React from "react";
import { Carousel } from "@/components/Carousel";
import { Middle } from "@/components/Middle";
import styles from "./style.module.css";

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
      
      <section className={styles.footerNicoPuto}>
        <p>
          Todos los derechos reservados a la{" "}
          <b>Sociedad Bomberos Voluntarios de Lanus</b>
        </p>
      </section>
    </>
  );
}

import React from "react";
import "./style.css";
import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import { Middle } from "@/components/Middle";

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

export function Home() {
  return (
    <>
      <Header />
      <section className="cuerpo">
        <Carousel className="carousel" autoplay={true} />
      </section>
      <a href="/informacion/socios"><span>SOBRE SOCIOS</span></a>
      <a href="/informacion/aspirantes"><span>SOBRE ASPIRANTES</span></a>
      <section className="mid">
        <Middle />
      </section>
      <section className="c-f">
        <p>
          Todos los derechos reservados a la{" "}
          <b>Sociedad Bomberos Voluntarios de Lanus</b>
        </p>
      </section>
    </>
  );
}

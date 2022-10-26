import React from "react";
import { Link } from "wouter"

import { Carousel } from "@/components/Carousel";
import { Middle } from "@/components/Middle";
import "./style.css";

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

export function Home() {
  return (
    <>
      
      <section className="cuerpo">
        <Carousel className="carousel" autoplay={true} />
      </section>
      
      <section className="mid">
        <div className="links">
          <Link to="/informacion/socios">SOBRE SOCIOS</Link>
          <Link to="/informacion/aspirantes">SOBRE ASPIRANTES</Link>
        </div>
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

import React from "react";
import { useState } from "react";
import { getImgUrl } from "../utils/getImgUrl";

export function Header() {
  const [images] = useState(["logo.png"]);
  return (
    <>
      <div className="blankSpace">
      </div>
         <header>
            <span className="Nav">
              <h2>
                  <a href="/">Inicio</a>
                </h2>
            </span>
            <span className="Nav">
                <h2>
                  <a href="/form">Formulario</a>
                </h2>
            </span>
            <div>
              <a href="/">
                <img className="logo" src={getImgUrl("logo.png")}/>
              </a>
            </div>
            <span className="Nav"> 
              <h2>
                  <a href="/mp">Donaciones</a>
                </h2>
            </span>
            <span className="Nav"> 
              <h2>
                <a href="/info">Quienes somos</a>
              </h2>
            </span>
            <div className="Menu">
                <ul>
                  <li>
                    <img className="icono" src={getImgUrl("Menu.png")}></img>
                    <ul>
                      <li>Perfil</li>
                      <li>Configuracion</li>
                      <li></li>
                    </ul>
                  </li>
                </ul>
            </div>
          </header>
    </>
  );
}

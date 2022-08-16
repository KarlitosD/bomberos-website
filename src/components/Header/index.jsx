import React from "react";
import { useState } from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import "./index.css"
import {Link} from "wouter"


export function Header() {
  const [images] = useState(["logo.png"]);
  return (
    <>
      <div className="blankSpace"></div>
      <header>
        
          <span className="Nav">
            <h2>
            <Link href="/">Inicio</Link>
            </h2>
          </span>
          <span className="Nav">
            <h2>
            <Link href="/form">Formulario</Link>
            </h2>
          </span>
        
        <div>
        <Link href="/">
            <img className="logo" src={getImgUrl("logo.png")} />
          </Link>
        </div>
       
          <span className="Nav">
            <h2>
            <Link href="/mp">Donaciones</Link>
            </h2>
          </span>
          <span className="Nav">
            <h2>
            <Link href="/info">Quienes somos</Link>
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

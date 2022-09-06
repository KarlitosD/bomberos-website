import React from "react";
import { useState } from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import "./index.css"
import { Link } from "wouter"


export function Header() {
  return (
    <>
      <div className="blankSpace"></div>
      <header>
        <a href="/">
          <img className="logo" src={getImgUrl("logo.png")} />
        </a>
        <a className="headerLink" href="/"><span>Inicio</span></a>
        <a className="headerLink" href="/form"><span>Formulario</span></a>
        <a className="headerLink" href="/admin"><span>Administración</span></a>
        <a className="headerLink" href="/mp"><span>Donaciones</span></a>
      </header>
    </>
  );
}

/*        <span className="Nav">
          <h2>
            <Link href="/">Inicio</Link>
          </h2>
        </span>
        <span className="Nav">
          <h2>
            <Link href="/form">Formulario</Link>
          </h2>
        </span>
        <span className="Nav">
          <h2>
            <Link href="/mp">Donaciones</Link>
          </h2>
        </span>
        <span className="Nav">
          <h2>
            <Link href="/info">Quienes somos</Link>
          </h2>
        </span>*/
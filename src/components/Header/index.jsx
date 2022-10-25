import React from "react";
import { useState } from "react";
import logoUrl from "@/assets/img/logo.png"
import "./index.css"
import { Link } from "wouter"


export function Header() {
  return (
    <>
      <div className="blankSpace"></div>
      <header>
        <a href="/">
          <img className="logo" src={logoUrl} />
        </a>
        <a className="headerLink" href="/"><span>Inicio</span></a>
        <a className="headerLink" href="/form"><span>Asociarse</span></a>
        <a className="headerLink" href="/admin"><span>Administración</span></a>
        <a className="headerLink" href="/donations"><span>Donaciones</span></a>
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
import React from "react";
import { Link } from "wouter";
import logoUrl from "@/assets/img/logo.png";
import "./index.css";

export function Header() {
  return (
    <>
      <div className="blankSpace"></div>
      <header>
        <Link to="/">
          <a>
            <img className="logo" src={logoUrl} />
          </a>
        </Link>
        <Link to="/">
          <a className="headerLink">
            <span>Inicio</span>
          </a>
        </Link>
        <Link to="/formulario/socios">
          <a className="headerLink">
            <span>Asociarse</span>
          </a>
        </Link>
        <Link to="/admin">
          <a className="headerLink">
            <span>Administración</span>
          </a>
        </Link>
        <Link to="/donaciones">
          <a className="headerLink">
            <span>Donaciones</span>
          </a>
        </Link>
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

import React, {useState} from "react";
import { Link } from "wouter";
import logoUrl from "@/assets/img/logo.png";
import "./index.css";

export function Header() {

  const [burguerClass, setBurguerClass] = useState("burguer-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () =>{
    if(!isMenuClicked){
      setBurguerClass("burguer-bar clicked")
      setMenuClass("menu visible")
    }else{
      setBurguerClass("burguer-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

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
        {/* <div style={{width:"200px", height:"0"}}>
          <nav>
            <div className="burguer-menu" onClick={updateMenu}>
              <div className={burguerClass}></div>
              <div className={burguerClass}></div>
              <div className={burguerClass}></div>
            </div>
          </nav>
          <div className={menu_class}>
            
          </div>
        </div>   */}
      </header>
    </>
  );
}

/*        */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "@/assets/img/logo.png";
import style from "./index.module.css";

export function Header() {
  const [burguerClass, setBurguerClass] = useState("burguer-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurguerClass("burguer-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurguerClass("burguer-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={style.blankSpace}></div>
      <header>
        <Link to="/">
          <img className={style.logo} src={logoUrl} />
        </Link>
        <Link to="/formulario/socios" className={style.headerLink}>
          Asociarse
        </Link>
      </header>
    </>
  );
}

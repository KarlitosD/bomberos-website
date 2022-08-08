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
        <div>
          <img className="logo" src={getImgUrl("logo.png")}/>
        </div>
      </header>
    </>
  );
}

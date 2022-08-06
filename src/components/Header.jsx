import React from "react";
import { useState } from "react";

export function Header() {
  const [images] = useState(["gg.jpg"]);
  return (
    <>
      <div className="blankSpace">
      </div>
      <header>
        <div className="logo" images={images}>
          <p>LOGO</p>
        </div>
      </header>
    </>
  );
}

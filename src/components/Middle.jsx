import React from "react";
import { getImgUrl } from "../utils/getImgUrl";
import Parallax from "./parallax";

export function Middle() {
  return (
    <>
      <Parallax/>
      <div className="iframes">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13121.066695941188!2d-58.3811!3d-34.6984532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a2c44eccfcb5756!2sBOMBEROS%20VOLUNTARIOS%20DE%20LAN%C3%9AS!5e0!3m2!1ses-419!2sar!4v1659825336950!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
        <div className="elfsight-app-4de3859e-5d51-4a6b-aa31-d6d1b9d95bdd"></div>
      </div>
    </>
  );
}

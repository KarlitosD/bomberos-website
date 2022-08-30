import React from "react";
import { getImgUrl } from "../utils/getImgUrl";

export function Middle() {
  return (
    <>
      <div className="containerR123">
        <div className="r1">
          <img className="imgMiddle" src={getImgUrl("a1.jpg")} />
        </div>
        <div className="r2">
          <img className="imgMiddle" src={getImgUrl("a2.jpg")} />
        </div>
        <div className="r3">
          <img className="imgMiddle" src={getImgUrl("a3.jpg")} />
        </div>
      </div>

      {/* <div className="social">
        <li><a href="#" className="facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#" className="instagram"><i className="fa-brands fa-instagram"></i></a></li>
      </div> */}
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
    </>
  );
}

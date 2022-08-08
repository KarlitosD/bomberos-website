import React from 'react';
import { useState } from 'react'
import { Header } from '../components/Header';
import { Carousel } from "../components/Carousel";
import { Middle } from  "../components/Middle";

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
})

function Home() {
  const [images, setImage] = useState(['c1.jpg','c2.jpg','c3.jpg'])
  return (
    <>
    <Header/>
    <section className="cuerpo">
     <Carousel className="carousel" images={images} autoplay={true}/>
    </section>
    <section className="mid">
      <div className='frase'>
       <hr />
         <p>Desde hace 105 años al servicio de la comunidad</p>
       <hr />
      </div>
      <Middle/>
    </section>
    <section className="c-f">
        <p>
          <br/>
        ©️ de1999-2022 Pelados, Inc. Todos los derechos reservados <a className="acuerdos" href="#">Privacidad</a> <a className="acuerdos" href="#">Acuerdos Legales</a>
        <br/>
        <br/>
        Pte de Pelados. Ltd. ("3PL") ha solicitado una licencia en virtud de la Ley de servicios
        de pago de Singapur ("Ley de PS") con las autoridades monetarias de Singapur. Durante este 
        período legal, la 3PL opera bajo una exención de retención de licencia y tiene permitido continuar 
        dando servicios de pago específicos.
        </p>
      </section>
    </>
  )
}

export default Home
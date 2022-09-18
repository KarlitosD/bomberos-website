import React from 'react';
import { useState } from 'react'
import { Header } from '../components/Header';
import { Carousel } from "../components/Carousel";
import { Middle } from "../components/Middle";

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
})

function Home() {
  const [images, setImage] = useState(['c1.jpg', 'c2.jpg', 'c3.jpg'])
  return (
    <>
      <Header />
      <section className="cuerpo">
        <Carousel className="carousel" images={images} autoplay={true} />
      </section>
      <section className="mid">
        <Middle />
      </section>
      <section className="c-f">
      </section>
    </>
  )
}

export default Home
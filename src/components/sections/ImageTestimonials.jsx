// import { useState, useEffect } from "react";
import Card from "../notes/Card";
import Testimonial0 from "../../assets/images/imageTestimonials/evidence0.jpeg";
import Testimonial from "../../assets/images/imageTestimonials/evidence.jpeg";
import Testimonial2 from "../../assets/images/imageTestimonials/evidence2.jpeg";
import Testimonial3 from "../../assets/images/imageTestimonials/evidence3.jpeg";
import Testimonial4 from "../../assets/images/imageTestimonials/evidence4.jpeg";
import Testimonial5 from "../../assets/images/imageTestimonials/evidence5.jpeg";
import Testimonial6 from "../../assets/images/imageTestimonials/evidence6.jpeg";
import Testimonial7 from "../../assets/images/imageTestimonials/evidence7.jpeg";
import Testimonial8 from "../../assets/images/imageTestimonials/evidence8.jpeg";
import Testimonial9 from "../../assets/images/imageTestimonials/evidence9.jpeg";
import Testimonial10 from "../../assets/images/imageTestimonials/evidence10.jpeg";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const images = [
  Testimonial0,
  Testimonial,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
  Testimonial7,
  Testimonial8,
  Testimonial9,
  Testimonial10,
];

const carruselImg = [...images, ...images];

export default function Carrusel() {
  return (
    <section className="container mx-auto px-5 my-10 max-w-7xl">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase my-10">
        ¿Si estas personas pudieron,{" "}
        <span className="text-degradient">por qué tú no</span>?
      </h2>

      <div className="splide-custom">
        <Splide
          options={{
            type: "loop",
            drag: "free", // Permite un arrastre más fluido
            snap: true, // Pero que se ajuste al slide más cercano
            perPage: 4,
            gap: "1rem",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: false, // Más limpio sin puntos
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: {
                perPage: 1
              }, 
            },
          }}
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <Card src={src} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

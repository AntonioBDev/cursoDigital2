// import { useState, useEffect } from "react";
import Card from "../notes/Card";
import Testimonial from "../../assets/images/imageTestimonials/evidence.jpeg"
import Testimonial2 from "../../assets/images/imageTestimonials/evidence2.jpeg"
import Testimonial3 from "../../assets/images/imageTestimonials/evidence3.jpeg"
import Testimonial4 from "../../assets/images/imageTestimonials/evidence4.jpeg"
import Testimonial5 from "../../assets/images/imageTestimonials/evidence5.jpeg"
import Testimonial6 from "../../assets/images/imageTestimonials/evidence6.jpeg"
import Testimonial7 from "../../assets/images/imageTestimonials/evidence7.jpeg"
import Testimonial8 from "../../assets/images/imageTestimonials/evidence8.jpeg"
import React from "react";

const images = [
  Testimonial,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
  Testimonial7,
  Testimonial8,
];

const carruselImg = [...images, ...images];

export default function carrusel() {
  return (
    <section className="pt-5 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[90%] -z-10
    bg-[radial-gradient(circle,_rgba(147,51,234,0.2)_0%,_transparent_70%)]"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase md:m-5">
          Seguramente ya viste algo parecido… la pregunta es, <span className="text-degradient ">¿Cuando empiezas tú?</span>
        </h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {carruselImg.map((src, i) => (
            <Card src={src} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

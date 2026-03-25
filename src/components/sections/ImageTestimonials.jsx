// import { useState, useEffect } from "react";
import Card from "../notes/Card";
import React from "react";

const images = [
  "./evidence.jpeg",
  "./evidence2.jpeg",
  "./evidence3.jpeg",
  "./evidence4.jpeg",
  "./evidence5.jpeg",
  "./evidence6.jpeg",
  "./evidence7.jpeg",
  "./evidence8.jpeg",

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

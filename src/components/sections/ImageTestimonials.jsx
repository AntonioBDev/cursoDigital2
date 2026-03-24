// import { useState, useEffect } from "react";
import Card from "../notes/Card";
import React from "react";

const images = [
  "./evidence5.jpeg",
  "./evidence.jpeg",
  "./evidence3.jpeg",
  "./evidence2.jpeg",
  "./evidence4.jpeg",
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
        {/* <h2 className="my-6 text-lg md:text-xl text-slate-400 pt-4 uppercase">
          ¡Más de $500,000 pesos mexicanos invertidos!
        </h2> */}
        <h2 className="mt-2 mb-10    text-3xl md:text-4xl font-extrabold text-center">
          Estas capturas son de nuestras <span className="text-degradient ">campañas reales</span>. Más de $500,000 pesos
          invertidos en anuncios probando y perfeccionando este modelo.
        </h2>
         {/* <p className="text-lg md:text-xl text-slate-400 pt-4">
          No es un curso de “motivación”. Es un sistema que llevamos más de un
          año utilizando para generar ventas reales en internet.
        </p> */}
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

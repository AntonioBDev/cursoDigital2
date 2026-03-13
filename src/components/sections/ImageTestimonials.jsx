// import { useState, useEffect } from "react";
import Card from "../notes/Card";
import React from "react";

const images = [
  "./tprueba1.png",
  "./tprueba2.png",
  "./tprueba3.png",
  "./tprueba2.png",
  "./tprueba1.png",
  "./tprueba3.png",
];

const carruselImg = [...images, ...images];

export default function carrusel() {
  return (
    <section className="py-10 my-12 text-center">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-4xl mx-auto  mb-10">
        Lo que dicen nuestros estudiantes
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

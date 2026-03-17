import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Tarjeta from "../notes/Tarjet";

// Importar estilos de Splide
import "@splidejs/react-splide/css";
import { video } from "motion/react-client";

const videoUrls = [
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

export default function Carrusel() {
  return (
    <section className="container mx-auto px-5 my-10 max-w-7xl">
      <h2 className=" text-2xl md:text-3xl font-extrabold text-center uppercase">
        ¿Si estas personas pudieron, <span className="text-degradient italic">por qué tú no</span> ?
      </h2>

      <div className="">
        <Splide
          options={{
            type: "loop",         // Infinito
            perPage: 4,           // 4 videos en pantallas grandes
            gap: "1rem",          // Espacio entre tarjetas
            autoplay: false,       // Se mueve solo
            interval: 4000,       // Cada 4 segundos
            pauseOnHover: true,   // Se detiene si pones el mouse encima
            arrows: true,         // Activa tus flechas
            pagination: false,    // Quita los puntos de abajo para que sea más limpio
            breakpoints: {
              1024: { perPage: 3 }, // 3 en tablet
              768: { perPage: 2 },  // 2 en móviles grandes
              480: { perPage: 1 },  // 1 en móviles pequeños
            },
          }}
        >
          {videoUrls.map((src, index) => (
            <SplideSlide key={index}>
              <Tarjeta src={src} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
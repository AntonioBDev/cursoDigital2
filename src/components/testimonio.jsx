import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Tarjeta from "./tarjeta";

// Importar estilos de Splide
import "@splidejs/react-splide/css";

const videoUrls = [
  "/b104.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "/b99.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "/b102.mp4",
];

export default function Carrusel() {
  return (
    <section className="container mx-auto px-6 py-10 my-12 max-w-7xl">
      <h2 className="mt-10 mb-10    text-3xl md:text-4xl font-extrabold text-center ">
        Lo que dicen nuestros estudiantes mientras escalan sus negocios
      </h2>

      <div className="px-4">
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
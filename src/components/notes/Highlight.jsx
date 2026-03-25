import React from "react";

export default function anuncio() {
  return (
 <section className="py-6">
      <div className="bg-imagen lg:text-left flex flex-col justify-end items-start p-10 md:p-30">
        <h3 className="uppercase text-3xl md:text-5xl leading-tight font-extrabold">
          ¿Cuándo fue la última vez que viste a personas enseñando a hacer esto?
        </h3>
        <p className="text-lg md:text-xl text-degradient pt-6 font-extrabold">
          Quizás nunca, porque esto no se encuentra en internet
        </p>
      </div>
    </section>
  );
}

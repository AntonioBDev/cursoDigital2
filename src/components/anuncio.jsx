import React from "react";

export default function anuncio() {
  return (
    <div className="py-6">
        <div className="bg-imagen text-center lg:text-left flex flex-col justify-center items-center p-10 md:p-30">
          <p className="uppercase text-3xl md:text-5xl leading-tight">
            ¿Cuándo fue la última vez que viste a personas enseñando a hacer esto?
          </p>
          <p className="text-lg md:text-xl text-slate-400 pt-6">
           Quizás nunca, porqué esto no se encuentra en internet
          </p>
        </div>
    </div>
  );
}

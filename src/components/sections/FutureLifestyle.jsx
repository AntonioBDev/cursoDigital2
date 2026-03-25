import React from "react";

export default function anuncio() {
  return (
    <div className="container mx-auto pt-5 relative">

      <div className="grid lg:grid-cols-2 gap-10 items-center md:p-10 my-10">
        <div className="flex items-center justify-center w-full">
          <img
            src="/ML.jpeg"
            alt="Resultado positivo"
            className="w-[90%] max-w-md h-auto object-contain rounded-2xl"
          />
        </div>

        <div className="p-4 text-center lg:text-left">
          <h2 className="uppercase text-2xl md:text-4xl leading-tight">
            ¡Recuerda con <span className="text-degradient font-bold">Umbral</span>,
            solo estás a un paso de <span className="subrayado-marker font-bold">cambiar tu vida
            </span>
            !
          </h2>
          <p className="text-lg md:text-xl text-slate-400 pt-6 font-bold">
            Deja de intercambiar horas por dinero y empieza a construir activos que te acerquen a tu libertad.
          </p>
        </div>
      </div>
    </div>
  );
}

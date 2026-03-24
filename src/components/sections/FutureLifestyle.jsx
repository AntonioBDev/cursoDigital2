import React from "react";

export default function anuncio() {
  return (
    <div className="container mx-auto pt-5 relative">

      <div className="grid lg:grid-cols-2 gap-10 items-center md:p-10 my-10">
        <div className="flex items-center justify-center w-full">
          <img
            src="/mercadoLibre.jpeg"
            alt="Resultado positivo"
            className="w-[90%] max-w-md h-auto object-contain rounded-2xl"
          />
        </div>

        <div className="p-4 text-center lg:text-left">
          <p className="uppercase text-3xl md:text-5xl leading-tight">
            ¡Recuerda con
            <span className="text-degradient font-bold"> OnlineUmbral</span>,
            solo estás a una Aplicación Escalable de
            <span className="subrayado-marker font-bold">
              cambiar tu vida
            </span>
            !
          </p>
          <p className="text-lg md:text-xl text-slate-400 pt-6 font-bold">
            Deja de vender tu tiempo y empieza a programar tu libertad. Aprende
            a desplegar activos digitales que funcionan en piloto automático las
            24 horas del día.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function anuncio() {
  return (
    <div className="container mx-auto pt-5 relative">
       <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[90%] -z-10
    bg-[radial-gradient(circle,_rgba(147,51,234,0.2)_0%,_transparent_70%)]"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center md:p-10 my-10">
        <div className="flex items-center justify-center w-full">
          <img
            src="/sinfondo2.png"
            alt="Resultado positivo"
            className="w-full max-w-md h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
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

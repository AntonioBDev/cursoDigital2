import React from "react";

export default function anuncio() {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center md:p-10 my-20">
        <div className="flex items-center justify-center w-full">
          <img
            src="/sinfondo2.png"
            alt="Resultado positivo"
            // Usamos max-h para que no sea gigante, pero que sea flexible
            className="w-full max-w-md h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          />
        </div>

        <div className="p-4 text-center lg:text-left">
          <p className="uppercase text-3xl md:text-5xl leading-tight">
            ¡Recuerda con{" "}
            <span className="text-purple-500 font-bold">AURA</span>, solo estás
            a un Activo extranjero viral de{" "}
            <span className="font-extrabold underline decoration-purple-500 underline-offset-8">
              cambiar tu vida
            </span>
            !
          </p>
          <p className="text-lg md:text-xl text-slate-400 pt-6">
            Deja de perseguir clientes y empieza a atraerlos. Con nuestra
            metodología, configurarás activos que trabajan por ti las 24 horas
            del día.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function anuncio() {
  return (
    <div className="grid md:grid-cols-2 pt-12 gap-4">
      <div className="mt-auto h-48 md:h-84 w-full overflow-hidden flex items-end">
        <img
          src="/sinfondo2.png"
          alt="Resultado negativo"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <p className="mt-10 mb-5  uppercase text-3xl md:text-4xl  text-center ">
          ¡Recuerda con AURA, solo estás a un Activo extranjero viral de{" "}
          <span className="font-extrabold underline">cambiar tu vida</span>!
        </p>
        <p className="text-lg md:text-xl text-slate-400 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          veritatis nobis ab molestias dolorem aut deserunt alias temporibus
          quibusdam totam autem fuga aspernatur facilis dicta, pariatur omnis!
          Aperiam, ipsum. Aliquam.
        </p>
      </div>
    </div>
  );
}

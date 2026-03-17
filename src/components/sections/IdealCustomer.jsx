import React from "react";

export default function idealCustomer() {
  return (
    <main className="container mx-auto pt-5 text-center">
      <div className="">
      <h2 className="mt-2 mb-10    text-3xl md:text-4xl font-extrabold text-center uppercase">
        ¿Para qué grupo de <span className="text-degradient">personas </span> está dirigido <span className="subrayado-marker font-bold ">Umbral </span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">

        {/* Cart */}
        <div className="bg-slate-900 p-4 border  rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]">
          <div className="flex gap-4 items-center text-left border-b-2 py-4 bg-borde border-transparent">
            <i className="fa-solid fa-money-bill-1 text-green-600 text-4xl"></i>
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Profesionales
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
           Personas que quieran <span className="text-slate-100 font-extrabold">posicionarse en redes sociales</span> desde cero, <span className="text-slate-100 font-extrabold">aprendiendo a crear campañas</span> con 0 experiencia y usar estas habilidades para vender cualquier producto o servicio.
          </p>
        </div>

        <div className="bg-slate-900 p-4 border rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]">
          <div className="flex gap-4 items-center text-left border-b-2 py-4 bg-borde border-transparent">
            <i className="fa-solid fa-circle-dollar-to-slot text-yellow-600 text-4xl"></i>
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Quieres hacer mas dinero
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            veritatis nobis ab molestias dolorem aut deserunt alias temporibus
            quibusdam totam autem fuga aspernatur facilis dicta, pariatur omnis!
            Aperiam, ipsum. Aliquam.
          </p>
        </div>

        <div className="bg-slate-900 p-4 border rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]">
          <div className="flex gap-4 items-center text-left border-b py-4 bg-borde border-transparent">
            <i className="fa-solid fa-users-rectangle text-purple-600 text-4xl"></i>
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Afiliados
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            veritatis nobis ab molestias dolorem aut deserunt alias temporibus
            quibusdam totam autem fuga aspernatur facilis dicta, pariatur omnis!
            Aperiam, ipsum. Aliquam.
          </p>
        </div>
      </div>
      </div>
    </main>
  );
}

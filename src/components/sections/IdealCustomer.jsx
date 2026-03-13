import React from "react";

export default function idealCustomer() {
  return (
    <main className="container mx-auto px-6">
      <div className="py-10 my-12 text-center">
      <h2 className="mt-10 mb-10    text-3xl md:text-4xl font-extrabold text-center ">
        ¿Para quien es esto?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 p-4 border-2 border-slate-700 rounded-2xl drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
          <div className="flex gap-4 items-center text-left border-b-2 py-4">
            <i className="fa-solid fa-money-bill-1 text-purple-500 text-4xl"></i>
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Profesionales
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-400 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            veritatis nobis ab molestias dolorem aut deserunt alias temporibus
            quibusdam totam autem fuga aspernatur facilis dicta, pariatur omnis!
            Aperiam, ipsum. Aliquam.
          </p>
        </div>

        <div className="bg-slate-900 p-4 border-2 border-slate-700 rounded-2xl drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
          <div className="flex gap-4 items-center text-left border-b-2 py-4">
            <i className="fa-solid fa-circle-dollar-to-slot text-purple-500 text-4xl"></i>
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Quieres hacer mas dinero
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-400 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            veritatis nobis ab molestias dolorem aut deserunt alias temporibus
            quibusdam totam autem fuga aspernatur facilis dicta, pariatur omnis!
            Aperiam, ipsum. Aliquam.
          </p>
        </div>

        <div className="bg-slate-900 p-4 border-2 border-slate-700 rounded-2xl drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
          <div className="flex gap-4 items-center text-left border-b-2 py-4">
            <i className="fa-solid fa-users-rectangle text-purple-500 text-4xl"></i>
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Afiliados
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-400 pt-4">
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

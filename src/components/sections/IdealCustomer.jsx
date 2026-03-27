import React from "react";
import { motion } from "framer-motion";

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function idealCustomer() {
  return (
    <main className="container mx-auto px-5 my-10 max-w-7xl">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase my-5 mx-3">
        ¿Para qué grupo de <span className="text-degradient">personas </span>{" "}
        está dirigido{" "}
        <span className="subrayado-marker font-bold ">Umbral </span>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Cart */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          className="bg-slate-900 p-4 border  rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <div className="flex gap-4 items-center text-left border-b-2 py-4 bg-borde border-transparent">
            <img src="/icono-profesional.png" alt="" className="w-10 ml-2" />
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Profesionales
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
            Personas que quieran{" "}
            <span className="text-slate-100 font-extrabold">
              posicionarse en redes sociales
            </span>{" "}
            desde cero,{" "}
            <span className="text-slate-100 font-extrabold">
              aprendiendo a crear campañas
            </span>{" "}
            con 0 experiencia y usar estas habilidades para vender cualquier
            producto o servicio.
          </p>
        </motion.div>

        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          className="bg-slate-900 p-4 border rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <div className="flex gap-4 items-center text-left border-b-2 py-4 bg-borde border-transparent">
            <img src="/icono-dinero.png" alt="" className="w-8 ml-2" />
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Quieres hacer mas dinero
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
            Gente que está buscando crear algo que realmente les{" "}
            <span className="text-slate-100 font-extrabold">
              genere más ingresos{" "}
            </span>{" "}
            que lo que hacen hoy.
          </p>
        </motion.div>

        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          className="bg-slate-900 p-4 border rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <div className="flex gap-4 items-center text-left border-b py-4 bg-borde border-transparent">
            <img src="/icono-afiliado.png" alt="" className="w-10 ml-2" />
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Afiliados
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
            No es por asustar, pero este modelo ya va de salida en varios
            mercados. Por eso, en lugar de depender de terceros, es mejor{" "}
            <span className="text-slate-100 font-extrabold">
              construir algo propio…
            </span>{" "}
            con productos de bajo costo, pero{" "}
            <span className="text-slate-100 font-extrabold">
              vendiendo en volumen
            </span>
            , como ya lo están haciendo muchos.
          </p>
        </motion.div>

        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          className="bg-slate-900 p-4 border  rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
        >
          <div className="flex gap-4 items-center text-left border-b-2 py-4 bg-borde border-transparent">
            <img src="/icono-principiante.png" alt="" className="w-15 ml-2" />
            <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
              Estás empezando
            </h3>
          </div>
          <p className="text-lg md:text-xl text-slate-300 pt-4">
            Gente{" "}
            <span className="text-slate-100 font-extrabold">
              sin conocimientos digitales,
            </span>{" "}
            pero con disciplina para crear algo que les dé{" "}
            <span className="text-slate-100 font-extrabold">más libertad</span>{" "}
            y menos dependencia de un jefe.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

import React from "react";

export default function PathChoice() {
  return (
    <section className="container mx-auto px-5 my-10 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase my-5 mx-3">
          Ahora tienes <span className="text-degradient">dos caminos...</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opción A*/}
          <div className="px-8 pt-8 bg-purple-900/20  border-purple-500 rounded-3xl relative h-full flex flex-col justify-between  border   group">
            <div className="pb-6 z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-4">
                <span className="text-degradient-red-white">Opción 1:</span> Seguir
                intentando generar ingresos sin un sistema claro…
              </h3>
              <ul className="space-y-3 text-slate-400 text-lg md:text-xl">
                <li>
                  ❌ Publicar contenido sin estrategia, probar cosas al azar y
                  esperar resultados que nunca llegan.
                </li>
              </ul>
            </div>
            <div className="relative mt-auto w-full flex items-end justify-center overflow-hidden">
              <img
                src="./sinGanancias.png"
                alt="Resultado negativo"
                className="w-full max-w-[90%] h-auto object-contain  transition-transform duration-500 "
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-20 rounded-b-3xl"></div>
          </div>

          {/* Opción B: Tomar el curso */}
          <div className="px-8 pt-8 bg-purple-900/20  border-purple-500 rounded-3xl relative h-full flex flex-col justify-between  border   group overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMENDADO
            </div>
            <div className="pb-6 z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-4">
                <span className="text-degradient-green-white">Opción 2:</span> Aprende a generar ventas online con métodos que miles de personas ya están usando hoy.
              </h3>
              <ul className="space-y-3 text-slate-400 text-lg md:text-xl">
                <li>
                   <i className="fas fa-check text-green-500 text-xl"></i> Un sistema simple donde los anuncios atraen personas
                  interesadas y las conversaciones se convierten en ventas.
                </li>
              </ul>
            </div>
            <div className="relative mt-auto w-full flex items-end justify-center overflow-hidden">
              <img
                src="./Ganancias.png"
                alt="Resultado positivo"
                className="w-full max-w-[90%] h-auto object-contain  transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-20 rounded-b-3xl"></div>
          </div>
      </div>
    </section>
  );
}

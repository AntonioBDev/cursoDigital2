import React from "react";

export default function pathChoice() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="mt-10 mb-10 text-3xl md:text-4xl font-extrabold text-center uppercase">
          Ahora tienes <span className="text-degradient">dos caminos...</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opción A: Seguir igual */}
          <div className="px-8 pt-8 bg-purple-900/20  border-purple-500 rounded-3xl relative h-full flex flex-col justify-between  border   group">
            <div className="pb-6 z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-4">
                <span className="text-red-500">Opción 1:</span> Seguir
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
                className="w-full max-w-[90%] h-auto object-contain translate-y-[30%] transition-transform duration-500 group-hover:translate-y-[5%] group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-20 rounded-b-3xl"></div>
          </div>

          {/* Opción B: Tomar el curso */}
          <div className="px-8 pt-8 bg-purple-900/20  border-purple-500 rounded-3xl relative h-full flex flex-col justify-between  border   group">
            <div className="absolute top-0 right-0 bg-purple-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMENDADO
            </div>
            <div className="pb-6 z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-4">
                <span className="text-green-500">Opción 2:</span> Aprender a
                generar ventas online utilizando infoproductos, anuncios en
                Facebook y WhatsApp Business.
              </h3>
              <ul className="space-y-3 text-slate-400 text-lg md:text-xl">
                <li>
                  ✅ Un sistema simple donde los anuncios atraen personas
                  interesadas y las conversaciones se convierten en ventas.
                </li>
              </ul>
            </div>
            <div className="relative mt-auto w-full flex items-end justify-center overflow-hidden">
              <img
                src="./Ganancias.png"
                alt="Resultado positivo"
                className="w-full max-w-[90%] h-auto object-contain translate-y-[30%] transition-transform duration-500 group-hover:translate-y-[5%] group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-20 rounded-b-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function pathChoice() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Ahora tienes <span className="text-purple-500">dos caminos</span>...
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opción A: Seguir igual */}
          <div className="pt-8 px-8 bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden h-full flex flex-col justify-between">
            <div className="pb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-4">
                <span className="text-red-500">Opción 1:</span> No hacer nada
              </h3>
              <ul className="space-y-3 text-slate-400 text-lg md:text-xl">
                <li>❌ Seguir perdiendo dinero en anuncios que no venden.</li>
                <li>
                  ❌ Continuar con la frustración de no entender el Business
                  Manager.
                </li>
                <li>❌ Ver cómo tu competencia se queda con tus clientes.</li>
              </ul>
            </div>
            <div className="mt-auto h-48 md:h-84 w-full overflow-hidden flex items-end">
              <img
                src="/sinfondos.png"
                alt="Resultado negativo"
                className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Opción B: Tomar el curso */}
          <div className="px-8 pt-8 bg-purple-900/20 border-2 border-purple-500 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-purple-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMENDADO
            </div>
            <div className="pb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-4">
                <span className="text-green-500">Opción 1:</span> Entrar al
                Masterclass
              </h3>
              <ul className="space-y-3 text-slate-200">
                <li>✅ Dominar la segmentación avanzada en Facebook Ads.</li>
                <li>
                  ✅ Crear un sistema de ventas que funcione en automático.
                </li>
                <li>
                  ✅ Escalar tus ingresos y recuperar tu libertad de tiempo.
                </li>
              </ul>
            </div>
            <div className="mt-auto h-48 md:h-84 w-full overflow-hidden flex items-end">
              <img
                src="/sinfondo2.png"
                alt="Resultado positivo"
                className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

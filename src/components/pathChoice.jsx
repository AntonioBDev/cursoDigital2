import React from 'react'

export default function pathChoice() {
  return (
  <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Ahora tienes <span className="text-purple-500">dos caminos</span>...
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opción A: Seguir igual */}
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl bg-imagen">
            <h3 className="text-xl font-bold mb-4 ">Opción 1: No hacer nada</h3>
            <ul className="space-y-3 text-slate-400">
              <li>❌ Seguir perdiendo dinero en anuncios que no venden.</li>
              <li>❌ Continuar con la frustración de no entender el Business Manager.</li>
              <li>❌ Ver cómo tu competencia se queda con tus clientes.</li>
            </ul>
          </div>

          {/* Opción B: Tomar el curso */}
          <div className="p-8 bg-purple-900/20 border-2 border-purple-500 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-500 text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Opción 2: Entrar al Masterclass</h3>
            <ul className="space-y-3 text-slate-200">
              <li>✅ Dominar la segmentación avanzada en Facebook Ads.</li>
              <li>✅ Crear un sistema de ventas que funcione en automático.</li>
              <li>✅ Escalar tus ingresos y recuperar tu libertad de tiempo.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

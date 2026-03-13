import React from 'react'

export default function header() {
  return (
     <header className="container mx-auto px-0">
        <section className="py-0 px-6 text-center mt-24">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-4xl mx-auto">
            Domina <span className="text-purple-600"> Facebook Ads </span> y
            escala tus ventas sin quemar tu presupuesto en publicidad.
          </h1>
          <p className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400">
            Aprende el método exacto para crear campañas de alto impacto,
            segmentar a tu cliente ideal y convertir clics en clientes
            recurrentes, aunque nunca hayas abierto el Administrador de
            Anuncios.
          </p>

          <div className="relative mt-20 mb-10">
            <span
              className="flecha-animada text-purple-600
            "
            >
              ⬇
            </span>
          </div>
        </section>
      </header>
  )
}

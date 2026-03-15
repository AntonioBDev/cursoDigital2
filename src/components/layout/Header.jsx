import React from "react";

export default function header() {
  return (
    <header className="container mx-auto px-0">
      <section className="py-0 px-6 text-center mt-24">
        <p className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400">
          ¡FINALMENTE! El método para quienes quieren empezar a generar ingresos
          por internet.
        </p>

        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-4xl mx-auto">
          Presentación gratuita donde te explico cómo comenzar a generar ventas
          online utilizando{" "}
          <span className="text-purple-600">
            {" "}
            infoproductos, Facebook Ads y WhatsApp Business.
          </span>
        </h1>
        <p className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400">
          No necesitas experiencia previa. Cualquier persona puede comenzar
          desde cero siguiendo el método paso a paso.
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
  );
}

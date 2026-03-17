import React from "react";

export default function header() {
  return (
    <header className="container mx-auto p-5">
      <section className="text-center z-10">
        <p className="my-6 text-sm font-bold md:text-xl max-w-3xl mx-auto text-slate-400 ">
           ¡FINALMENTE! El método para quienes quieren empezar a generar ingresos
          por internet.
        </p>

        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-4xl mx-auto">
          Presentación gratuita donde te explico cómo comenzar a generar ventas
          online utilizando{" "}
          <span className="text-degradient">
            {" "}
            infoproductos, Facebook Ads y WhatsApp Business.
          </span>
        </h1>
        <p className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400 font-bold">
          No necesitas experiencia previa. Cualquier persona puede comenzar
          desde cero siguiendo el método paso a paso.
        </p>
      </section>
    </header>
  );
}

import React from "react";

export default function header() {
  return (
    <header className="container mx-auto px-5 my-10 max-w-7xl">
      <section className="text-center z-10">
      <p className="m-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400 font-bold">
          La forma en que otros están generando ingresos con Facebook Ads (y cómo tú también puedes)
        </p>
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-4xl mx-auto">
         Aprende a crear ingresos online con 
          <span className="text-degradient"> infoproductos </span>y lograr tus primeros <span className="text-degradient"> 1,500–3,000 MX en semanas.</span>
        </h1>
        <p className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400 font-bold">
          No necesitas experiencia previa. Cualquier persona puede comenzar
          desde cero siguiendo el método paso a paso.
        </p>
      </section>
    </header>
  );
}

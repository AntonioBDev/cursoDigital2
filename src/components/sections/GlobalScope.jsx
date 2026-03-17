import React from "react";

export default function GlobalScope() {
  return (
    <section className="container mx-auto px-6 relative text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-4xl mx-auto  mb-10 uppercase">
        Un método que puedes aplicar desde cualquier país
      </h2>

      <div className="mt-12 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl mb-6 font-bold">No importa si estás en...</p>

        <div className="flex items-center justify-center w-full">
          <img
            src="/globalScope.jpeg"
            alt="Representación de Países"
            className="w-full max-w-md h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          />
        </div>

        <div className="grid grid-cols-3 gap-4  pt-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">🌐</span>
            <p className="text-lg md:text-xl text-degradient font-extrabold uppercase">Internet</p>
          </div>
          <div className="flex flex-col items-center border-x border-slate-800">
            <span className="text-2xl mb-2">💻</span>
            <p className="text-lg md:text-xl text-degradient font-extrabold uppercase">Laptop</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">📱</span>
            <p className="text-lg md:text-xl text-degradient font-extrabold uppercase">Celular</p>
          </div>
        </div>

        <p className="mt-6 font-bold text-lg md:text-xl">
          ¡Eso es todo lo que necesitas para aplicar este sistema!
        </p>
      </div>

      <div>
        <p className="text-lg md:text-xl text-slate-400 pt-4">
          El Método de los Libros Digitales te enseña cómo vender productos
          digitales utilizando anuncios en Facebook y conversaciones por
          WhatsApp.
        </p>
        <p className="text-lg md:text-xl text-slate-400 pt-4">
          Esto significa que puedes comenzar a vender desde tu país hacia toda
          Latinoamérica o incluso otros mercados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto px-4">
        {/* Tarjeta 1 */}
        <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
          {/* Efecto de resplandor de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-purple-500/20 text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>

            <h3 className=" text-2xl md:text-3xl  font-bold mb-4 ">
              Mercado principal
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg md:text-xl">
              Latinoamérica es uno de los mercados más grandes para{" "}
              <span className="text-degradient font-medium">
                infoproductos en español.
              </span>
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed text-lg md:text-xl">
              Millones de personas compran productos digitales todos los días.
            </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="group relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-purple-500/20 text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold  mb-4 italic">
              Dónde puedes vender
            </h3>

            <div className="flex justify-center items-center flex-wrap gap-2 mb-4">
              {[
                "México",
                "Colombia",
                "Chile",
                "Argentina",
                "Perú",
                "España",
              ].map((pais) => (
                <span
                  key={pais}
                  className="text-lg md:text-xl font-semibold px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                >
                  {pais}
                </span>
              ))}
            </div>

            <p className="text-slate-400 leading-relaxed text-lg md:text-xl">
              Y cualquier país donde hablen español. El idioma es tu única
              frontera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

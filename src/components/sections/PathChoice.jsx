import React from "react";
import profits from "../../assets/images/pathChoice/profits.png";
import noProfits from "../../assets/images/pathChoice/noProfits.png";

const OPTIONS = [
  {
    id: 1,
    title: "Opción 1:",
    subtitle: "Seguir intentando generar ingresos sin un sistema claro…",
    description: "❌ Publicar contenido sin estrategia, probar cosas al azar y esperar resultados que nunca llegan.",
    img: noProfits,
    gradientClass: "text-degradient-red-white",
    recommended: false,
  },
  {
    id: 2,
    title: "Opción 2:",
    subtitle: "Aprende a generar ventas online con métodos que miles de personas ya están usando hoy.",
    description: "Un sistema simple donde los anuncios atraen personas interesadas y las conversaciones se convierten en ventas.",
    img: profits,
    gradientClass: "text-degradient-green-white",
    recommended: true,
    icon: "fas fa-check text-green-500 text-xl"
  }
];

export default function PathChoice() {
  return (
    <section className="container mx-auto px-5 my-5 md:my-10 max-w-7xl">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase mb-10 mx-3">
        Ahora tienes <span className="text-degradient">dos caminos...</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {OPTIONS.map((opt) => (
          <div key={opt.id} className="px-8 pt-8 bg-purple-900/20 border-purple-500 rounded-3xl relative h-full flex flex-col justify-between border group overflow-hidden transition-all duration-300 hover:bg-purple-900/30">
            
            {opt.recommended && (
              <div className="absolute top-0 right-0 bg-purple-500 text-xs font-bold px-3 py-1 rounded-bl-lg z-30">
                RECOMENDADO
              </div>
            )}

            <div className="pb-6 z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 border-b border-purple-500/30 pb-4">
                <span className={opt.gradientClass}>{opt.title}</span> {opt.subtitle}
              </h3>
              <ul className="space-y-3 text-slate-400 text-lg md:text-xl">
                <li className="flex gap-2">
                  {opt.icon && <i className={opt.icon}></i>}
                  <span>{opt.description}</span>
                </li>
              </ul>
            </div>

            <div className="relative mt-auto w-full flex items-end justify-center overflow-hidden">
              <img
                src={opt.img}
                alt={opt.title}
                loading="lazy"
                className="w-full max-w-[90%] h-auto object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Overlay de desvanecimiento inferior */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-20 rounded-b-3xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
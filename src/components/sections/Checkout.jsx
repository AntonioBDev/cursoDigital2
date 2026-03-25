import React from 'react';

const CheckoutSection = () => {
  const benefits = [
    { title: "INTELIGENCIA ARTIFICIAL DE AURA:", value: "2997 USD", isBonus: true },
    { title: "Entrenamiento de venta de Activos Extranjeros Virales", value: "1500 USD", isBonus: true },
    { title: "Vitrina de Activos Extranjeros Virales Validados", value: "790 USD", isBonus: true },
    { title: "Activos extranjeros más vendidos en el mundo", value: "999 USD", isBonus: true },
    { title: "Mentoria 1 a 1 para las 5 primeras personas", value: "4000 USD", isBonus: true },
    { title: "Sesiones de acompañamiento en vivo", value: "497 USD", isBonus: true },
  ];

  return (
    <section className="container mx-auto px-5 my-10 max-w-7xl">
      <div className="rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center bg-slate-200">
        
        {/* 1. Imagen Superior (Mockups) */}
        <div className="w-full bg-gradient-to-b from-slate-900 to-white p-8 flex justify-center">
          <img 
            src="/sinfondos.png" 
            alt="Contenido del curso" 
            className="max-w-2xl w-full h-auto drop-shadow-2xl"
          />
        </div>

        {/* 2. Contenido Principal */}
        <div className="p-8 md:p-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Lista de Beneficios */}
          <div className="space-y-6">
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-slate-800 font-medium text-sm md:text-base leading-tight">
                    <span className="font-bold">{item.title}</span> | Valorado en: 
                    <span className="line-through text-red-500 mx-1">{item.value}</span>
                    <span className="text-green-600 font-bold uppercase tracking-tight"> | Hoy Gratis</span>
                  </p>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-slate-200 text-center lg:text-left">
              <p className="text-slate-600 text-lg">
                Todo esto está valorado por <span className="font-bold underline italic text-slate-900">más de 17 mil dólares</span>
              </p>
            </div>
          </div>

          {/* Columna Derecha: Precio y Botón */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div>
              <p className="text-slate-800 text-xl md:text-2xl italic">
                Hoy te llevarás todo esto <span className="font-bold underline">por solo:</span>
              </p>
              <h2 className="text-7xl md:text-8xl font-black text-slate-900 mt-2 mb-4 tracking-tighter">
                $97 <span className="text-3xl md:text-4xl align-middle">USD</span>
              </h2>
              <p className="text-slate-700 font-medium animate-bounce">
                ↓ Haz clic en el botón de abajo ↓
              </p>
            </div>
            
             <a
            onclick="return false;"
            target='_blank'
            href="https://pay.hotmart.com/N104199019V?checkoutMode=2"
            className="bg-animado text-white px-8 py-5 rounded-full font-bold shadow-md hover:bg-purple-700 w-full max-w-md  text-lg md:text-xl"
          >
             TOCA AQUÍ Y APRENDE A <br/> GENERAR MÁS DE $100 USD AL DÍA
          </a>

            {/* Garantías */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase">
                <span>🛡️ Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase border-x px-6 border-slate-200">
                <span>⭐ Satisfacción Garantizada</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase">
                <span>🔒 Privacidad Protegida</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
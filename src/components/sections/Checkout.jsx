import React from 'react';
import img from '../../assets/images/checkout/announcement.jpeg'

const CheckoutSection = () => {
  const benefits = [
    { title: "MÉTODO DE LOS LIBROS DIGITALES Sistema completo para generar ingresos vendiendo infoproductos ", value: "297 USD", isBonus: true },
    { title: "BIBLIOTECA MASIVA (NOVELAS, SAGAS, HISTORIA, ETC.) Más de 10,000 libros en múltiples categorías comerciales", value: "197 USD", isBonus: true },
    { title: "PACK DESARROLLO PERSONAL + AUDIOBOOKS 3,000 libros + 155 audiolibros", value: "97 USD", isBonus: true },
    { title: "PACKS DE DIFERENTE GENERO (Psicología, Filosofía, Estoicismo, Fitness, Medicina, Infantil y más)", value: "290 USD", isBonus: true },
    { title: "KIT POLÍGLOTA + RECURSOS DE INGLÉS Más de 70 idiomas + 400 recursos para aprendizaje acelerado", value: "197 USD", isBonus: true },
    
    // { title: "AUTOMATIZACIONES + CHATBOTS PARA WHATSAPP Sistema para responder, filtrar y cerrar clientes automáticamente", value: "197 USD", isBonus: true },
    { title: "COMUNIDAD PRIVADA + SOPORTE Acceso a grupo donde se comparte estrategia, dudas y actualizaciones", value: "150 USD", isBonus: true },

  ];

  return (
    <section className="md:container md:mx-auto px-5 md:px-5 md:my-10 md:max-w-7xl" id='checkout'>
      <div className="rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center bg-slate-200">
        
        {/* 1. Imagen Superior (Mockups) */}
        <div className="w-full bg-gradient-to-b from-slate-900 to-white flex justify-center">
          <img 
            src={img}
            alt="Contenido del curso" 
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 2. Contenido Principal */}
        <div className="p-4 md:p-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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
                Todo esto está valorado por <span className="font-bold underline italic text-slate-900">más de $700 USD</span>
              </p>
            </div>
          </div>

          {/* Columna Derecha: Precio y Botón */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div>
              <p className="text-slate-800 text-xl md:text-2xl italic">
                PERO HOY PUEDES ACCEDER  <span className="font-bold underline">por solo:</span>
              </p>
              <h2 className="text-7xl md:text-8xl font-black text-slate-900 mt-2 mb-4 tracking-tighter">
                $25 <span className="text-3xl md:text-4xl align-middle">USD</span>
              </h2>
              <p className="text-slate-700 font-medium animate-bounce">
                ↓ HAZ CLIC ABAJO Y ACCEDE AL MÉTODO ↓
              </p>
            </div>
            
             <a
            onclick="return false;"
            target='_blank'
            href="https://pay.hotmart.com/N104199019V?checkoutMode=2"
            className="bg-animado text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-purple-700 w-full max-w-md  text-sm md:text-[2rem]"
          >
            QUIERO EL MÉTODO
          </a>

            {/* Garantías */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase">
                <i class="fa-solid fa-shield-halved  text-xl"></i>
                <p> Compra <br /> Segura</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase border-x px-6 border-slate-200">
                <i class="fa-solid fa-star  text-xl"></i>
                <p> Satisfacción  <br />Garantizada</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase">
                <i class="fa-solid fa-lock  text-xl"></i>
                <p> Privacidad <br /> Protegida</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
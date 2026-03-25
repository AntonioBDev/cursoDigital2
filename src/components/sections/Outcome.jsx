export default function Resultados() {
  return (
    <div className="container mx-auto pt/5 relative">
       <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[90%] -z-10
    bg-[radial-gradient(circle,_rgba(147,51,234,0.2)_0%,_transparent_70%)]"></div>
      <div className="grid lg:grid-cols-2 gap-2 md:gap-8 px-6 max-w-7xl mx-auto items-center py-10 my-12">
        <div className="flex justify-center items-center overflow-hidden">
          <img
            src="/outCome.jpeg"
            alt="Resultados del curso"
            className="w-full rounded-2xl shadow-lg  h-80 object-contain img--lineGradient"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase my-5 mx-3">
            ¿Cómo se va a ver tu vida luego de unirte a <span className="text-degradient font-bold">umbralonline?</span>
          </h2>
          <ul className="space-y-4  md:text-xl text-slate-300 pt-2 ">
            <li className="flex items-center gap-5 md:gap-5">
              <img src="/icono1.jpeg" alt="" className="w-[15%] md:w-[12%] rounded-full"/>
              <p className="">
               En la primera semana que saques tu anuncio, es altamente <span className="text-white font-bold uppercase">probable que vendas más de 100 dólares</span> - Recuerda: <span className="text-white font-bold">"son productos con alta demanda"</span>
              </p>
            </li>
            <li className="flex items-center gap-5 md:gap-5">
               <img src="/icono2.jpeg" alt="" className="w-[15%] md:w-[12%] rounded-full"/>
              <p>
                Nunca te va a faltar el dinero en tu mesa, ya que aprenderás la habilidad de vender tus productos y vender <span className="text-white font-bold" >tu servicio de marketing a cualquier negocio y cobrar por ello.</span>
              </p>
            </li>
            <li className="flex items-center gap-5 md:gap-5">
               <img src="/icono3.jpeg" alt="" className="w-[15%] md:w-[12%] rounded-full"/>
              <p>
               Podrás vender <span className="text-white font-bold" >tu servicio a todo</span> el mundo e incluso <span className="text-white font-bold" >dar un plus a tu emprendimiento con anuncios ADS.</span> Lo que significa que podrás ganar lo mismo o más <span className="text-white font-bold">de lo que estás ganando hoy en día.</span>(Y lo mejor... Todo de forma <span className="text-white font-bold">remota</span> ).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

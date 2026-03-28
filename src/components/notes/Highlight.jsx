export default function Anuncio() {
  return (
    <section className="py-6">
      {/* QUITAMOS p-10/md:p-30 generales. Ponemos px-8 para los lados y pb-10/md:pb-16 para abajo */}
      <div className="bg-imagen lg:text-left flex flex-col justify-end items-start px-8 pb-10 md:pb-16 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Agregamos text-white para asegurar contraste */}
        <h3 className="uppercase text-3xl md:text-5xl leading-tight font-extrabold text-white max-w-4xl">
          ¿Cuándo fue la última vez que viste a personas enseñando a hacer esto?
        </h3>
        
        {/* Cambiamos text-degradient por text-white/80 para mejor legibilidad sobre la foto */}
        <p className="text-lg md:text-xl text-white/80 pt-6 font-extrabold">
          Quizás nunca, porque esto no se encuentra en internet
        </p>
      </div>
    </section>
  );
}
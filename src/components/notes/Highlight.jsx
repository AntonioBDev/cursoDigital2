export default function Anuncio() {
  return (
    <section className="py-6">
      <div className="bg-imagen overflow-hidden shadow-2xl relative">
        <div className="md:container md:mx-auto md:max-w-7xl lg:text-left flex flex-col justify-end  items-start px-8 md:px-30 pb-10 md:pb-16 h-full w-full absolute">
          <h3 className="uppercase text-3xl md:text-5xl leading-tight font-extrabold text-white max-w-4xl">
            ¿Cuándo fue la última vez que viste a personas enseñando a hacer
            esto?
          </h3>

          <p className="text-lg md:text-xl text-white/80 pt-6 font-extrabold">
            Quizás nunca, porque esto no se encuentra en internet
          </p>
        </div>
      </div>
    </section>
  );
}

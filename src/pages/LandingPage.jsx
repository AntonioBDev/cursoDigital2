import Carousel from "../components/carrusel";
import Aprendizaje from "../components/aprendizaje";
import Resultados from "../components/resultados";
import PagoSeguro from "../components/pagoseguro";

export default function LandingPage() {
  return (
    <section>
      <header className="max-w-6xl mx-auto px-4">
        <nav className="p-5 flex justify-between items-center luz-neon-borde fixed top-0 left-0 w-full bg-black opacity-98 z-10">
          <img src="./public/logo.jpeg" className="h-20" alt="" />

          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-2 rounded-3xl font-bold shadow-md hover:bg-purple-700 transition"
          >
            Unete ahora
          </a>
        </nav>

        <header className=" from-purple-700 via-purple-800 to-purple-900 text-white py-16 px-6 text-center mt-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            Domina Facebook Ads y escala tus ventas sin quemar tu presupuesto en
            publicidad.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            Aprende el método exacto para crear campañas de alto impacto,
            segmentar a tu cliente ideal y convertir clics en clientes
            recurrentes, aunque nunca hayas abierto el Administrador de
            Anuncios.
          </p>

          <div className="relative mt-20 mb-10">
            <span className="flecha-animada">⬇</span>
            <video
              autoplay
              muted
              controls
              poster="https://placehold.co/1280x720/E5E7EB/4B5563?text=Video+del+Curso"
              className="mx-auto w-screen rounded-lg shadow-[0_0_20px_rgba(82,9,154,0.8)]"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              {/* Tu navegador no soporta el formato de video. */}
            </video>
          </div>
          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-2 rounded-3xl font-bold shadow-md hover:bg-purple-700 transition"
          >
            Inscribirme ahora
          </a>
        </header>
      </header>

      {/* Desactivado */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-4xl mx-auto text-center">
          Lo que dicen nuestros estudiantes mientras escalan sus negocios
        </h2>
        <Carousel />
      </section>

      <main className="max-w-6xl mx-auto px-4">
      <h2 className="mt-10 mb:10 uppercase text-3xl md:text-4xl font-extrabold text-center ">
        ¿Para quien es esto?
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className=" rounded-2xl p-4">
          <p className="md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center text-purple-600 font-bold uppercase">
            Emprendedores
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
            Que se sienten frustrados porque sus anuncios no venden.
          </p>
          <div className="w-full flex justify-center items-center">
            <img
              src="./src/assets/emprendedores.svg"
              alt=""
              className="w-60 mt-6"
            />
          </div>
          {/* <i className="fa-solid fa-"></i> */}
        </div>

        <div className=" rounded-2xl p-4">
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center text-purple-600 font-bold uppercase">
            Negocios locales
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
            Que quieren clientes nuevos todos los días.
          </p>
          <div className="w-full flex justify-center items-center">
            <img src="./src/assets/tienda.svg" alt="" className="w-60 mt-6" />
          </div>
        </div>

        <div className=" rounded-2xl p-4">
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center text-purple-600 font-bold uppercase">
            Personas desde cero
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
            Que tienen miedo de tocar el Administrador de Anuncios y romper
            algo.
          </p>
          <div className="w-full flex justify-center items-center">
            <img
              src="./src/assets/principiantes.svg"
              alt=""
              className="w-60 mt-6"
            />
          </div>
        </div>
      </div>
      </main>

      <div className="container mx-auto px-6">
      <Aprendizaje />
    </div>

     <div className="container mx-auto px-6">
       <Resultados/>
     </div>

     <div>
      <PagoSeguro/>
     </div>
    </section>
  );
}

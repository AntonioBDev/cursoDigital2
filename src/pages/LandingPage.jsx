import Carousel from "../components/carrusel";
import IdealCustomer from "../components/idealCustomer";
import BotonPago from "../components/botonpago";
import Aprendizaje from "../components/aprendizaje";
import Resultados from "../components/resultados";
import Testimonio from "../components/testimonio";
import Anuncio from "../components/anuncio";
import PathChoice from "../components/pathChoice";
import PagoSeguro from "../components/pagoseguro";

export default function LandingPage() {
  return (
    <section>
      <nav className="flex justify-center items-center luz-neon-borde  bg-slate-950">
        <img src="/logo.png" className="h-30 m-0 p-0" alt="" />
      </nav>

      <header className="max-w-6xl mx-auto px-4">
        <section className="py-16 px-6 text-center mt-24 ">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            Domina <span className="text-purple-600"> Facebook Ads </span> y
            escala tus ventas sin quemar tu presupuesto en publicidad.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-slate-400">
            Aprende el método exacto para crear campañas de alto impacto,
            segmentar a tu cliente ideal y convertir clics en clientes
            recurrentes, aunque nunca hayas abierto el Administrador de
            Anuncios.
          </p>

          <div className="relative mt-20 mb-10">
            <span className="flecha-animada">⬇</span>
            <video
              autoPlay
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
          <BotonPago />
        </section>
      </header>

      {/* Desactivado */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-4xl mx-auto text-center">
          Lo que dicen nuestros estudiantes mientras escalan sus negocios
        </h2>
        <Carousel />
      </section>

      <div className="container mx-auto px-6">
        <IdealCustomer />
        <Anuncio />
        <Aprendizaje />
        <Resultados />
        <Testimonio />
        <PathChoice />
        <PagoSeguro />
      </div>
    </section>
  );
}

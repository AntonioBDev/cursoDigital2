import Carousel from "../components/carrusel";
import IdealCustomer from "../components/idealCustomer";
import BotonPago from "../components/botonpago";
import Aprendizaje from "../components/aprendizaje";
import Resultados from "../components/resultados";
import Testimonio from "../components/testimonio";
import FutureLife from "../components/futureLifestyle";
import Anuncio from "../components/anuncio";
import PathChoice from "../components/pathChoice";
import PagoSeguro from "../components/pagoseguro";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <section>
      <nav className="flex justify-center items-center luz-neon-borde  bg-slate-950">
        <img src="/logo.png" className="h-30 m-0 p-0" alt="" />
      </nav>

      <header className="container mx-auto px-0">
        <section className="py-0 px-6 text-center mt-24">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-4xl mx-auto">
            Domina <span className="text-purple-600"> Facebook Ads </span> y
            escala tus ventas sin quemar tu presupuesto en publicidad.
          </h1>
          <p className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-slate-400">
            Aprende el método exacto para crear campañas de alto impacto,
            segmentar a tu cliente ideal y convertir clics en clientes
            recurrentes, aunque nunca hayas abierto el Administrador de
            Anuncios.
          </p>

          <div className="relative mt-20 mb-10">
            <span
              className="flecha-animada text-purple-600
            "
            >
              ⬇
            </span>
          </div>
        </section>
      </header>

      <div className="relative mt-10 md:mt-20 mb-10 flex items-center">
        <video
          autoPlay
          loop
          muted
          controls
          playsInline // IMPORTANTE para iOS
          className="w-full md:max-w-5xl mx-auto md:rounded-lg shadow-[0_0_20px_rgba(82,9,154,0.8)]"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-0 flex justify-center">
        <BotonPago />
      </div>

      <Carousel />

      <IdealCustomer />
      <FutureLife />
      <Aprendizaje />
      <Resultados />
      <Testimonio />
      <Anuncio />
      <PathChoice />
      {/* Elimnar  */}
      {/* <PagoSeguro /> */}
      <Footer />
    </section>
  );
}

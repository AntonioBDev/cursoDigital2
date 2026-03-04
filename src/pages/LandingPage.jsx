import Carousel from "../components/carrusel";

export default function LandingPage() {
  return (
    <section>
      <header>
        <nav className="p-5 flex justify-between items-center luz-neon-borde">
          <img src="./public/logo.jpeg" className="h-20" alt="" />

          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-2 rounded-3xl font-bold shadow-md hover:bg-purple-700 transition"
          >
            Inscribirme ahora
          </a>
        </nav>

        <header className=" from-purple-700 via-purple-800 to-purple-900 text-white py-16 px-6 text-center">
          {" "}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
            {" "}
            Domina Facebook Ads y escala tus ventas sin quemar tu presupuesto en
            publicidad.{" "}
          </h1>{" "}
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            {" "}
            Aprende el método exacto para crear campañas de alto impacto,
            segmentar a tu cliente ideal y convertir clics en clientes
            recurrentes, aunque nunca hayas abierto el Administrador de
            Anuncios.{" "}
          </p>{" "}
          <div className="relative mt-20 mb-10">
            <span className="flecha-animada">⬇</span>
            <video
              autoplay
              muted
              controls
              poster="https://placehold.co/1280x720/E5E7EB/4B5563?text=Video+del+Curso"
              className="mx-auto w-80 rounded-lg shadow-[0_0_20px_rgba(82,9,154,0.8)]"
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

      <main>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-4xl mx-auto text-center">Lo que dicen nuestros estudiantes mientras escalan sus negocios</h2>
        <Carousel />
      </main>
    </section>
  );
}

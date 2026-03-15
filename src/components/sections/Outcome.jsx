export default function Resultados() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto items-center py-10 my-12">
        {/* Imagen atractiva */}
        <div className="flex justify-center items-center overflow-hidden">
          <img
            src="/resultados.png"
            alt="Resultados del curso"
            className="w-full rounded-2xl shadow-lg  h-80 object-cover img--lineGradient"
          />
        </div>

        {/* Texto inspirador */}
        <div>
          <h2 className="mt-10 mb-10    text-3xl md:text-4xl font-extrabold text-center ">
            ¿Cómo puede cambiar tu vida cuando aprendes a generar ventas en
            internet?
          </h2>
          <ul className="space-y-4 text-lg md:text-xl text-slate-400 pt-4 ">
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              <p>
                {" "}
                El primer día que pongas en marcha tu sistema de ventas es muy
                probable que comiences a recibir mensajes de personas
                interesadas. Recuerda:{" "}
                <span className="">
                  los anuncios trabajan 24/7 atrayendo clientes potenciales a tu
                  WhatsApp.
                </span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              <p>
                Nunca volverás a depender únicamente de un empleo, porque habrás
                aprendido una habilidad digital que puedes usar para generar
                ingresos desde cualquier lugar.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              <p>
                Podrás vender productos digitales a personas de todo el mundo,
                incluso si hoy estás empezando desde cero. Lo que significa que
                podrás crear una nueva fuente de ingresos utilizando solo tu
                celular y conexión a internet.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

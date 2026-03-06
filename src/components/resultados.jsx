export default function Resultados() {
  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto inspirador */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Resultados que podrás alcanzar
          </h2>
          <ul className="space-y-4 ">
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              Incrementar tus ventas digitales con estrategias probadas.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              Construir una marca personal sólida y reconocida.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              Generar ingresos constantes con negocios online.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-xl mr-3">✔</span>
              Disfrutar de libertad financiera y tiempo para ti.
            </li>
          </ul>
        </div>

        {/* Imagen atractiva */}
        <div className="flex justify-center">
          <img
            src="./src/assets/resultados.jpg"
            alt="Resultados del curso"
            className="rounded-2xl shadow-lg w-50 h-80 object-fill"
          />
        </div>
      </div>
    </section>
  );
}

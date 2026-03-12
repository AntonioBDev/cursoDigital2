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
            ¿Cómo se va a ver tu vida luego de tener tu propio ACTIVO EXTRANJERO VIRAL?
          </h2>
          <ul className="space-y-4 text-lg md:text-xl text-slate-400 pt-4 ">
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

        </div>
      </div>
  );
}

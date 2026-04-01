import { FaBullhorn, FaChartLine, FaUsers, FaLaptopCode } from "react-icons/fa";
import { MdOutlineDataUsage } from "react-icons/md";
import { GiFunnel } from "react-icons/gi";

export default function Aprendizaje() {
  const temas = [
    {
      titulo: "Creativos que generan ventas",
      descripcion:
        "Aprenderás a diseñar imágenes y videos que diferencian tu marca del resto.",
      icono: <FaBullhorn className="text-purple-600 text-4xl mb-3" />,
    },
    {
      titulo: "Facebook ADS",
      descripcion:
        "Aprenderás a crear campañas en Facebook e Instagram y a implementar una estrategia efectiva para aumentar tus ventas.",
      icono: <FaUsers className="text-green-600 text-4xl mb-3" />,
    },
    {
      titulo: "Embudo de Ventas",
      descripcion:
        "Crearás embudos y entenderás cómo convertir cada mensaje en una oportunidad de venta.",
      icono: <GiFunnel className="text-blue-600 text-4xl mb-3" />,
    },
    {
      titulo: "Análisis de métricas",
      descripcion:
        "Dominarás tus métricas y sabrás qué decisiones tomar para mejorar tus resultados.",
      // icono: <MdOutlineDataUsage className="text-red-600 text-4xl mb-3" />,
    },
    {
      titulo: "Posicionamiento de marca",
      descripcion:
        "Te enseñamos a construir una marca que te diferencie y te posicione en el mercado.",
      // icono: <FaChartLine className="text-yellow-600 text-4xl mb-3" />,
    },
    {
      titulo: "Herramientas IA",
      descripcion:
        "Dominarás las nuevas herramientas de IA para maximizar la funcionalidad de tu empresa al máximo",
      // icono: <FaLaptopCode className="text-indigo-600 text-4xl mb-3" />,
    },
  ];

  return (
    <section className="container mx-auto px-5 md:px-10 my-10 max-w-7xl">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase my-5 mx-3">
        Lo que <span className="text-degradient ">aprenderás</span> en el curso
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto text-center mt-20">
        {temas.map((tema, i) => (
          <div
            key={i}
            className="relative p-8 rounded-3xl  border  backdrop-blur-md 
             border-purple-500/50 transition-all duration-500 group overflow-hidden"
          >
            {/* Resplandor interno en hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-5
              ">
                <i className="fas fa-check text-green-500 text-3xl"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-left">
                {tema.titulo}
              </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {tema.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

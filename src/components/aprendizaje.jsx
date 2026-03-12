import { FaBullhorn, FaChartLine, FaUsers, FaLaptopCode } from "react-icons/fa";
import { MdOutlineDataUsage } from "react-icons/md";
import { GiFunnel } from "react-icons/gi";

export default function Aprendizaje() {
  const temas = [
    {
      titulo: "Marketing Digital",
      descripcion: "Dominarás estrategias efectivas para promocionar productos y servicios.",
      icono: <FaBullhorn className="text-purple-600 text-4xl mb-3" />,
    },
    {
      titulo: "Redes Sociales",
      descripcion: "Aprenderás a crear campañas virales en Instagram, Facebook y TikTok.",
      icono: <FaUsers className="text-green-600 text-4xl mb-3" />,
    },
    {
      titulo: "Embudo de Ventas",
      descripcion: "Diseñarás embudos de conversión que convierten seguidores en clientes.",
      icono: <GiFunnel className="text-blue-600 text-4xl mb-3" />,
    },
    {
      titulo: "Análisis de Datos",
      descripcion: "Interpretarás métricas para optimizar tus campañas y aumentar resultados.",
      icono: <MdOutlineDataUsage className="text-red-600 text-4xl mb-3" />,
    },
    {
      titulo: "Marca Personal",
      descripcion: "Construirás una identidad sólida que te diferencie en el mercado.",
      icono: <FaChartLine className="text-yellow-600 text-4xl mb-3" />,
    },
    {
      titulo: "Aprendizaje Digital",
      descripcion: "Usarás herramientas online para seguir aprendiendo y creciendo.",
      icono: <FaLaptopCode className="text-indigo-600 text-4xl mb-3" />,
    },
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="py-10 my-12 text-center">
        <h2 className="mt-10 mb-10    text-3xl md:text-4xl font-extrabold text-center">
          Lo que aprenderás en el curso
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 px-6 max-w-7xl mx-auto items-center">
          {temas.map((tema, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl shadow-md p-4 "
            >
              {tema.icono}
              <h3 className="capitalize text-2xl md:text-3xl font-extrabold">
                {tema.titulo}
              </h3>
              <p className="text-lg md:text-xl text-slate-400 pt-4">{tema.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

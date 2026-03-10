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
    <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Lo que aprenderás en el curso
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {temas.map((tema, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {tema.icono}
              <h3 className="text-lg font-semibold text-gray-50 mb-2">
                {tema.titulo}
              </h3>
              <p className="text-gray-100 text-sm">{tema.descripcion}</p>
            </div>
          ))}
        </div>
    </section>
  );
}

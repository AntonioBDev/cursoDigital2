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
    <section className="container mx-auto px-5 my-10 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center uppercase my-5 mx-3">
          Lo que <span className="text-degradient ">aprenderás</span> en el curso
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto text-center ">
          {temas.map((tema, i) => (
            <div
              key={i}
              // bg-gradient-to-b from-gray-500 to-black 
              className=" p-4 border  rounded-2xl bg-borde border-transparent hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
            >
               {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" /> */}
              {tema.icono}
              <h3 className="capitalize text-2xl md:text-3xl font-bold bg-borde border-transparent border-b-2 py-2">
                {tema.titulo}
              </h3>
              <p className="text-lg md:text-xl text-slate-400 pt-4">{tema.descripcion}</p>
            </div>
          ))}
        </div>
    </section>
  );
}

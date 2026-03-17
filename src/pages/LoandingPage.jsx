import { motion } from "framer-motion"; 

//Estructura 
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
//Seccion de página
import ImageTestimonials from "../components/sections/ImageTestimonials";
import IdealCustomer from "../components/sections/IdealCustomer";
import Learning from "../components/sections/Learning";
import Outcome from "../components/sections/Outcome";
import VideoTestimonials from "../components/sections/VideoTestimonials";
import FutureLife from "../components/sections/FutureLifestyle";
import Highlight from "../components/notes/Highlight";
import PathChoice from "../components/sections/PathChoice";
import Global from "../components/sections/GlobalScope";
//UI / Comunes
import Video from "../components/common/Video";
import Button from "../components/common/Button";


export default function LandingPage() {
  return (
    <section className="m-0 p-0">
      <Navbar/>
      <Header/>
      <Video/>

      {/* Animación del boton */}
      <div className="container mx-auto flex justify-center overflow-hidden">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }} // Empieza fuera a la izquierda (-100% del ancho de pantalla)
          animate={{ x: 0, opacity: 1 }} // Llega a su posición original
          transition={{
            type: "spring", // Efecto de rebote (más natural)
            stiffness: 100,
            damping: 20,
            duration: 0.9,
          }}
        >
          <Button />
        </motion.div>
      </div>

      <VideoTestimonials />
      
      {/* Para quien es */}
      <IdealCustomer />

      {/* Dos opciones */}
      <PathChoice />

      {/* Aprendizaje */}
      <Learning />


      <ImageTestimonials />


      <FutureLife />


      {/* Como puede cambiar tu vida */}
      <Outcome />

      <Global/>

      {/* Anuncio */}
      <Highlight />
      <Footer />
    </section>
  );
}

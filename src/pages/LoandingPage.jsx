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
import Checkout from "../components/sections/Checkout";
import Sticky from "../components/notes/StickyBar";
//UI / Comunes
import Video from "../components/common/Video";
import Button from "../components/common/Button";

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function LandingPage() {
  return (
    <section className="m-0 p-0 relative">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Navbar />
        <Header />
        <Video />
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto flex justify-center overflow-hidden p-5"
      >
        <Button />
      </motion.div>

      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ImageTestimonials />
      </motion.div>

      {/* Dos opciones */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        className="container mx-auto flex justify-center overflow-hidden p-5"
      >
        <PathChoice />
      </motion.div>

      <motion.div
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto flex justify-center overflow-hidden p-5"
      >
        {/* Como puede cambiar tu vida */}
        <Outcome />
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto flex justify-center overflow-hidden p-5"
      >
        {/* Para quien es */}
        <IdealCustomer />
      </motion.div>

      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <VideoTestimonials />
      </motion.div>

      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <FutureLife />
      </motion.div>

      {/* Aprendizaje */}
      <Learning />

      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Global />
      </motion.div>

      {/* Anuncio */}
      <Highlight />

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto flex justify-center overflow-hidden p-5"
      >
        <Checkout />
      </motion.div>

      <Sticky />

    
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
      <Footer />
      </motion.div>
    </section>
  );
}

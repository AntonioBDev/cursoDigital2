import React from "react";
import { motion } from "framer-motion";

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  },
};

const card = ({ src }) => {
  return (
    <motion.div
      variants={zoomIn}
      initial="hidden"
      whileInView="visible"
      className="my-0 mx-2 cursor-pointer flex-shrink-0 w-[200px] sm:w-[250px]"
    >
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={src}
          alt=""
          className="w-full h-109 sm:h-110 object-contain"
        />
      </div>
    </motion.div>
  );
};

export default card;

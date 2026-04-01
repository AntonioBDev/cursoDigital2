import React from "react";

const Card = ({ src }) => {
  return (
      <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-500/20 bg-slate-900 opacity-80">
        <img
          src={src}
          alt="Testimonio"
          loading="lazy"
          className="w-full h-auto aspect-[9/16] object-cover" 
        />
      </div>
  );
};

export default Card;
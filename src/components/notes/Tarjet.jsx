import React from "react";

const Card = ({ src }) => { // Recuerda: Nombre en mayúscula
  
  const handlePlay = (e) => {
    // Buscamos todos los elementos de video en el documento
    const allVideos = document.querySelectorAll('video');
    
    allVideos.forEach((video) => {
      // Si el video no es el que acabamos de activar, lo pausamos
      if (video !== e.target) {
        video.pause();
      }
    });
  };

  return (
    <div className="my-4 mx-2 cursor-pointer flex-shrink-0 w-[220px] sm:w-[250px]">
      <div className="rounded-2xl overflow-hidden shadow-md video-container bg-black aspect-[9/16]">
        <video 
          controls 
          muted 
          onPlay={handlePlay}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
    </div>
  );
};

export default Card;
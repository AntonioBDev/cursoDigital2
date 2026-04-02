import React from "react";
import video from "../../assets/video/presentation.mp4";

export default function Video() {
  return (
    <div className="relative mt-10 md:mt-20 mb-10 px-4 flex justify-center">
      <div className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[400px]">
        {/* Explicación: 
           En móvil usamos max-w-[400px] para que no pegue a los bordes si la pantalla es grande.
           En Desktop (md:) limitamos el ancho a ~350px-400px porque al ser vertical, 
           si le das mucho ancho, la altura se vuelve infinita.
        */}
        <video
          autoPlayn
          loop
          muted
          playsInline // 👈 CRÍTICO: Evita que el video se abra en pantalla completa
          preload="auto" // 👈 AYUDA: Indica al navegador que empiece a descargar ya
          controls
          controlsList="nodownload noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-auto rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(82,9,154,0.5)] border border-purple-500/20"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
    </div>
  );
}

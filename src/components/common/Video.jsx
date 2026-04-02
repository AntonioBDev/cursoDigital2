import React from "react";
import video from "../../assets/video/presentation.mp4";

export default function Video() {
  return (
    <div className="relative mt-10 md:mt-20 mb-10 px-4 flex justify-center">
      <div className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[400px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          controlsList="nodownload"
          controls
          preload="auto" // 👈 AYUDA: Indica al navegador que empiece a descargar ya
          className="w-full h-auto rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(82,9,154,0.5)] border border-purple-500/20"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
    </div>
  );
}

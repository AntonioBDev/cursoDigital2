import React from "react";
import video from "../../assets/video/intro.mp4";

export default function Video() {
  return (
    <div className="relative mt-10 md:mt-20 mb-10 px-4 flex justify-center">
      <div className="w-full max-w-[900px] md:max-w-[1100px] lg:max-w-[400px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          controlsList="nodownload"
          controls
          preload="auto" // 👈 AYUDA: Indica al navegador que empiece a descargar ya
          className="w-full aspect-video h-auto rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(82,9,154,0.3)] border border-purple-500/20 object-cover"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
    </div>
  );
}

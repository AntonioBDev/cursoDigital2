import React from "react";
import video from "../../assets/video/intro.mp4";

export default function Video() {
  return (
    <div className="relative mt-10 md:mt-20 mb-10 px-4 flex justify-center">
      <div className="w-full max-w-[350px] md:max-w-[450px] ">
        <video
          autoPlay
          muted
          loop
          playsInline
          controlsList="nodownload"
          controls
          preload="auto" 
          className="w-full aspect-[9/16] h-auto rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(82,9,154,0.5)] border border-purple-500/20"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos..
        </video>
      </div>
    </div>
  );
}

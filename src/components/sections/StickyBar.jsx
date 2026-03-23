import React from 'react';
import Boton from '../common/Button';

export default function StickyBar() {
  return (
    <div className="fixed bottom-5 left-5 right-5 w-auto z-50 bg-slate-900/95 backdrop-blur-md border rounded-3xl border-purple-500/30 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Información de la Oferta */}
        <div className="text-center md:text-left">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">
            🔥 Oferta por tiempo limitado
          </p>
          <h4 className="text-white text-lg md:text-xl font-bold">
            Inscríbete al curso por solo  $<span className=' line-through text-sm md:text-lg'></span> <span className="text-green-400 text-4xl md:text-5xl">$25</span>
          </h4>
        </div>

        {/* Botón de Inscripción */}
        {/* <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#0462c7bf] to-[#9810fa] text-white font-extrabold rounded-full hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
          ¡INSCRIBIRME AHORA!
        </button> */}
        <Boton/>
      </div>
    </div>
  )
}


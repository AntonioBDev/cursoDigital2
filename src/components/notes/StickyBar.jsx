import React from 'react';
import Boton from '../common/Button';

export default function StickyBar() {
  return (
    <div className="fixed bottom-5 left-5 right-5 w-auto z-50 bg-slate-900/95 backdrop-blur-md border rounded-3xl border-purple-500/30 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Información de la Oferta */}
        <div className="text-center md:text-left">
          <p className="text-white text-lg md:text-xl font-bold flex items-center">
            Inscríbete al curso por solo $<span className=' line-through text-sm md:text-lg mr-2'>109 </span> a <span className="text-green-400 text-3xl md:text-4xl ml-2"> $25</span>
          </p>
        </div>
        <Boton/>
      </div>
    </div>
  )
}


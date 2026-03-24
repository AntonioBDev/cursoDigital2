import React from 'react';
import Boton from '../common/Button';

export default function StickyBar() {
  return (
    <div className="fixed bottom-2 left-2 right-2 w-auto z-50 bg-slate-900/95 backdrop-blur-md border rounded-3xl border-purple-500/30 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <p className="text-white text-xl md:text-2xl font-bold flex items-center">$<span className=' line-through'>69</span> <span className="text-degradient2  text-3xl md:text-5xl ml-2 font-extrabold"> $25</span>
          </p>
        </div>
            <a
            onclick="return false;"
            target='_blank'
            href="https://pay.hotmart.com/N104199019V?checkoutMode=2"
            className=" bg text-white text-xl md:text-2xl py-2 px-4 rounded-3xl font-extrabold shadow-md hover:bg-purple-700 capitalize"
          >
            Accede ahora
          </a>
      </div>
    </div>
  )
}


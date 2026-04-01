import React from 'react'

export default function botonpago() {
  return (
    <div className=''>
         <a
            onclick="return false;"
            href="#checkout"
            className=" bg text-white text-2xl md:text-3xl px-6 py-3 rounded-3xl font-bold shadow-md hover:bg-purple-700 capitalize"
          >
            Accede ahora
          </a>
    </div>
  )
}

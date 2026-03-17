import React from 'react'

export default function botonpago() {
  return (
    <div className='m-8'>
         <a
            onclick="return false;"
            target='_blank'
            href="https://pay.hotmart.com/N104199019V?checkoutMode=2"
            className=" bg text-white text-2xl md:text-3xl px-6 py-3 rounded-3xl font-bold shadow-md hover:bg-purple-700 uppercase"
          >
            Unete ahora
          </a>
    </div>
  )
}

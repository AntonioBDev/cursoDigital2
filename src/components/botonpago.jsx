import React from 'react'

export default function botonpago() {
  return (
    <div>
         <a
            onclick="return false;"
            target='_blank'
            href="https://pay.hotmart.com/N104199019V?checkoutMode=2"
            className=" bg-purple-600 text-white text-2xl md:text-3xl   px-6 py-2 rounded-3xl font-bold shadow-md hover:bg-purple-700 transition uppercase"
          >
            Unete ahora
          </a>
    </div>
  )
}

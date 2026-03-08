import React from 'react'

export default function idealCustomer() {
  return (
   <main className="max-w-6xl mx-auto px-4">
        <h2 className="mt-10 mb:10 uppercase text-3xl md:text-4xl font-extrabold text-center ">
          ¿Para quien es esto?
        </h2>
        <div>
            <div>
                <i></i>
                <h3>Profesionales</h3>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className=" rounded-2xl p-4">
            <p className="md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center text-purple-600 font-bold uppercase">
              Emprendedores
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
              Que se sienten frustrados porque sus anuncios no venden.
            </p>
            <div className="w-full flex justify-center items-center">
              <img
                src="./src/assets/emprendedores.svg"
                alt=""
                className="w-60 mt-6"
              />
            </div>
            {/* <i className="fa-solid fa-"></i> */}
          </div>

          <div className=" rounded-2xl p-4">
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center text-purple-600 font-bold uppercase">
              Negocios locales
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
              Que quieren clientes nuevos todos los días.
            </p>
            <div className="w-full flex justify-center items-center">
              <img src="./src/assets/tienda.svg" alt="" className="w-60 mt-6" />
            </div>
          </div>

          <div className=" rounded-2xl p-4">
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center text-purple-600 font-bold uppercase">
              Personas desde cero
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
              Que tienen miedo de tocar el Administrador de Anuncios y romper
              algo.
            </p>
            <div className="w-full flex justify-center items-center">
              <img
                src="./src/assets/principiantes.svg"
                alt=""
                className="w-60 mt-6"
              />
            </div>
          </div>
        </div>
      </main>
  )
}

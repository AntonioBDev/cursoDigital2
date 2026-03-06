export default function PagoSeguro() {
  return (
    <section className="w-full  py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold  mb-6">
            Método de Pago Seguro
          </h2>
          <p className=" mb-6">
            Tus pagos en Hotmart están protegidos con encriptación avanzada y cumplen
            con los estándares internacionales de seguridad. Puedes comprar con total
            confianza usando tarjeta, PayPal o transferencias.
          </p>
          <ul className="space-y-4 ">
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-3">🔒</span>
              Encriptación SSL para proteger tus datos.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-3">💳</span>
              Pagos con tarjeta de crédito y débito.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-3">🛡️</span>
              Garantía de seguridad en cada compra.
            </li>
          </ul>
        </div>

        {/* Imagen atractiva */}
        <div className="flex justify-center">
          <img
            src="./src/assets/mpago.jpg"
            alt="Pago seguro"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

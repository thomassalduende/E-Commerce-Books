import React from 'react'
import { useCart } from '../../hooks/useCart'
import './Footer.css'
export function Footer() {
  const { cart } = useCart()
  return (
    <footer className={`foot grid grid-cols-1 justify-items-center mt-12 pt-6 pb-6 md:grid-cols-3 md:justify-items-center text-white bg-black relative z-50`}>
      <div className='desarrollo'>
        <h3 >Equipo de desarrollo</h3>
        <p>Bua Enzo -- Fronted</p>
        <p>Blanchet Nazareno -- Backend</p>
        <p>Salduende Thomas -- Backend</p>

      </div>
      <div className='enlaces-utiles'>
        <h3>Enlaces Útiles</h3>
        <p>Sobre nosotros</p>
        <p>Politicas de uso</p>
        <p className='contactate'>Contactate con nosotros</p>
      </div>
      <div className='informacion'>
        <h3>Información de Contacto</h3>
          <p> Email: libros@example.com</p>
          <p> Direccion: sarmiento111</p>
          <p> Teléfono: 11-444444</p>
      </div>

 

     </footer>

  )
}


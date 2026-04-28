import React, { useContext, useEffect, useState } from 'react'
import Buscador from './buscador'
import { Link } from 'react-router-dom'
import CarritoContext from '../context/CarritoContext'

const Header = () => {
  const [piezas, setPiezas] = useState()
  const {carrito , AgregarCarrito} = useContext(CarritoContext);
  
  useEffect(()=>{
    let totalPiezas = carrito.reduce((acumulador, actual) => acumulador + actual.datos.cantidad, 0);
    
    setPiezas(totalPiezas);
  },[carrito]);

  return (
    <header>
        <Link to='/'>
          <picture>
              <img src='./src/imgs/patoLogo.png' alt="Logotipo empresa" />
          </picture>
        </Link>

        <button>☰</button>
        <Link to="/carrito" className='enlace-carrito'>{ carrito.length > 0 && <div className='indicador-carrito'>{piezas}</div>}🛒</Link>
    </header>
  )
}

export default Header

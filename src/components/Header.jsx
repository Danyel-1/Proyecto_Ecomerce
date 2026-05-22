import React, { useContext, useEffect, useState } from 'react'
import Buscador from './buscador'
import { Link } from 'react-router-dom'
import CarritoContext from '../context/CarritoContext'

const Header = () => {
  const [botonHamburger, setBotonHamburger] = useState(false)
  const {carrito , AgregarCarrito, numArticulo} = useContext(CarritoContext);
  const [piezas, setPiezas] = useState(numArticulo);
  
  useEffect(()=>{
    let totalPiezas = carrito.reduce((acumulador, actual) => acumulador + actual.datos.cantidad, 0);
    
    setPiezas(totalPiezas);    
  },[carrito, numArticulo]);

  return (
    <header>
        <Link to='/'>
          <picture>
              <img src='/patoLogo.png' alt="Logotipo empresa" />
          </picture>
        </Link>

        <div className="botones-generales">
          <button>☰</button>
          <nav>
            
          </nav>
          <Link to="/carrito" className='enlace-carrito'>{ carrito.length > 0 && <div className='indicador-carrito'>{piezas}</div>}🛒</Link>
        </div>
    </header>
  )
}

export default Header

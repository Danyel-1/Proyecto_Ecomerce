import React, { useContext, useEffect, useState } from 'react'
import Buscador from './buscador'
import { Link } from 'react-router-dom'
import CarritoContext from '../context/CarritoContext'
import MenuHamburguesa from './MenuHamburguesa'
import UsuarioContext from '../context/UsuariosContext'

const Header = ({MostrarMenu, menu}) => {
  const [botonHamburger, setBotonHamburger] = useState(false)
  const {carrito , AgregarCarrito, numArticulo} = useContext(CarritoContext);
  const {user, datosUsuarioLogueado, handleLogout} = useContext(UsuarioContext);
  const [piezas, setPiezas] = useState(numArticulo);
  
  useEffect(()=>{
    let totalPiezas = carrito.reduce((acumulador, actual) => acumulador + actual.datos.cantidad, 0);
    
    setPiezas(totalPiezas);    
  },[carrito, numArticulo]);  

  console.log(datosUsuarioLogueado);

  return (
    <header>
        <Link to='/'>
          <picture>
              <img src='/patoLogo.png' alt="Logotipo empresa" />
          </picture>
        </Link>

        {user ? `Logueado` : "Sin loguear"}

        {user ? <button onClick={handleLogout}>Logout</button> :
          <div className="botones-generales movil">
          <button onClick={MostrarMenu}>{menu ? `X` : `☰`}</button>

          <Link to="/carrito" className='enlace-carrito'>{ carrito.length > 0 && <div className='indicador-carrito'>{piezas}</div>}🛒</Link> 
        </div>
        }

        <div className="botones-generales desktop">
          <section className='botones-auth'>
            <Link  to="/ingresar-cuenta" className='enlace-auths'>Ingresar Cuenta</Link>
            <Link to="/crear-cuenta" className='enlace-auths'>Registrarse</Link>

            <Link to="/carrito" className='enlace-carrito'>{ carrito.length > 0 && <div className='indicador-carrito'>{piezas}</div>}🛒</Link> 
          </section>
        </div>

    </header>
  )
}

export default Header

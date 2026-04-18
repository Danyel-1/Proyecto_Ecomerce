import React from 'react'
import Buscador from './buscador'
import { Link } from 'react-router-dom'

const Header = ({DetallesInfo}) => {

  return (
    <header>
        <Link to='/'>
          <picture>
              <img src='./src/imgs/patoLogo.png' alt="Logotipo empresa" />
          </picture>
        </Link>

        <Buscador DetallesInfo={DetallesInfo}/>

        <button>☰</button>
        <Link to="/carrito">🛒</Link>
    </header>
  )
}

export default Header

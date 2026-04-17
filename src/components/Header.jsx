import React from 'react'
import Buscador from './buscador'

const Header = ({DetallesInfo}) => {

  return (
    <header>
        <picture>
            <img src='./src/imgs/patoLogo.png' alt="Logotipo empresa" />
        </picture>

        <Buscador DetallesInfo={DetallesInfo}/>

        <button>☰</button>

        <button>🛒</button>
    </header>
  )
}

export default Header

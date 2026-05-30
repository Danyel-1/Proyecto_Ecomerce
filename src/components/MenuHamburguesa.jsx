import React from 'react'
import { Link } from 'react-router-dom'

const MenuHamburguesa = () => { 

  return (
    <nav className='nav-de-auth movil'>
        <div className='bienvenido'>
            <div className='mensaje-bienv'>
                <div className='picture'>
                    <picture > 
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    </picture>
                </div>
                <div className='mensajes'>
                    <h4>Bienvenido</h4>
                    <p>Ingresa a tu cuenta para comprar</p>
                </div>
            </div>

            <section className='botones-auth botones'>
                <Link to="/ingresar-cuenta" className='enlace-auths'>Ingresar Cuenta</Link>
                <Link to="/crear-cuenta" className='enlace-auths'>Registrarse</Link>
            </section>
        </div>

        <button>Inicio 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
        </button>
    </nav>
  )
}

export default MenuHamburguesa

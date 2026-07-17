import React, { useEffect, useState }  from 'react'
import PatoLibre from './pages/PatoLibre'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import CarritoCompras from './pages/CarritoCompras'
import ProductoDescripcion from './pages/ProductoDescripcion';
import Header from './components/Header';
import CarritoContext, { CarritoPovider } from './context/CarritoContext';
import UsuarioContext, {UsuarioProvider} from './context/UsuariosContext';
import CrearCuenta from './pages/CrearCuenta';
import IngresarCuenta from './pages/IngresarCuenta';
import MenuHamburguesa from './components/MenuHamburguesa';
import CuentaUsuario from './pages/CuentaUsuario';
import Compras from './pages/Compras';
import { ProductosProvider } from './context/ProductosContext';
import Notificacion from './components/Notificacion';

function App() {
  const [id, setId] = useState('');
  const [menu , setMenu] = useState(false);
  const [notificacion, setNotificacion] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('#f0e800');

  const handleResize = () =>{
    if (window.innerWidth > 720) {
      setMenu(false);
    }
  }

  const handleNotificacion = (mensaje, fondo) =>{
    setColor(fondo);
    setMessage(mensaje);
    setNotificacion(true);
    
    setTimeout(()=>{
      setNotificacion(false);
    },1500);
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
  })

  const idProducto = (id) =>{
    setId(id);
  }

  const MostrarMenu = () =>{
    setMenu(!menu);
  }

  return (
    <>
      <ProductosProvider>
        <UsuarioProvider>
          <CarritoPovider>
            <HashRouter basename='products'>
              <Header MostrarMenu={MostrarMenu}  menu={menu}/>
              
              { menu && <MenuHamburguesa MostrarMenu={MostrarMenu}/>}

              {notificacion && <Notificacion color={color} message={message}/>}

              <Routes>

                <Route path='/' element={<PatoLibre handleNotificacion={handleNotificacion} idProducto={idProducto}/>}/>

                <Route path='/carrito' element={<CarritoCompras />}/>

                <Route path='/crear-cuenta' element={<CrearCuenta handleNotificacion={handleNotificacion}/>} />
                <Route path='/ingresar-cuenta' element={<IngresarCuenta handleNotificacion={handleNotificacion}/>} />

                <Route path='/cuenta' element={<CuentaUsuario/>}/>
                <Route path='/compras' element={<Compras/>}/>

                <Route path='/detalle-producto/:id' element={<ProductoDescripcion id={id}/>} />
              </Routes>
            </HashRouter>
          </CarritoPovider>
        </UsuarioProvider>
      </ProductosProvider>
    </>
  )
}

export default App

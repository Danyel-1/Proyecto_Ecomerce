import React, { useState }  from 'react'
import PatoLibre from './pages/PatoLibre'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import CarritoCompras from './pages/CarritoCompras'
import ProductoDescripcion from './pages/ProductoDescripcion';
import Header from './components/Header';

function App() {
  const [id, setId] = useState('');
  const [productoCarro, setProductoCarro] = useState([]);

  const idProducto = (id) =>{
    setId(id);
  }
  
  const datosCarrito = (productoAnadido) =>{
    setProductoCarro([...productoCarro,
      {productoAnadido}
    ])
    console.log(productoCarro);
  }


  return (
    <>

      <HashRouter basename='products'>
        
        <Header/>

        <Routes>

          <Route path='/' element={<PatoLibre datosCarrito={datosCarrito} idProducto={idProducto}/>}/>

          <Route path='/carrito' element={<CarritoCompras productoCarro={productoCarro} />}/>

          <Route path='/detalle-producto/:id' element={<ProductoDescripcion id={id}/>} />
        </Routes>


      </HashRouter>
    </>
  )
}

export default App

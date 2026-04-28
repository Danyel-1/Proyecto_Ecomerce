import React, { useState }  from 'react'
import PatoLibre from './pages/PatoLibre'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import CarritoCompras from './pages/CarritoCompras'
import ProductoDescripcion from './pages/ProductoDescripcion';
import Header from './components/Header';
import CarritoContext, { CarritoPovider } from './context/CarritoContext';

function App() {
  const [id, setId] = useState('');

  const idProducto = (id) =>{
    setId(id);
  }


  return (
    <>
      <CarritoPovider>
        <HashRouter basename='products'>
          <Header/>

          <Routes>

            <Route path='/' element={<PatoLibre idProducto={idProducto}/>}/>

            <Route path='/carrito' element={<CarritoCompras />}/>

            <Route path='/detalle-producto/:id' element={<ProductoDescripcion id={id}/>} />
          </Routes>
        </HashRouter>
      </CarritoPovider>
    </>
  )
}

export default App

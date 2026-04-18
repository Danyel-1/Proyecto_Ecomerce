import React, { useState }  from 'react'
import PatoLibre from './pages/PatoLibre'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarritoCompras from './pages/CarritoCompras'
import ProductoDescripcion from './pages/ProductoDescripcion';

function App() {
  const [id, setId] = useState('');

  const idProducto = (id) =>{
    setId(id);
  }

  console.log(id);
  

  return (
    <>
      <BrowserRouter>
        
        <Routes>

          <Route path='/' element={<PatoLibre idProducto={idProducto}/>}/>
          <Route path='/carrito' element={<CarritoCompras />}/>
          <Route path='/detalle-producto/:id' element={<ProductoDescripcion id={id}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

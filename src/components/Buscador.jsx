import React, { useContext } from 'react'
import ProductosContext from '../context/ProductosContext';

const Buscador = () => {
  const {handleBusqueda, setBusqueda, busqueda} = useContext(ProductosContext);

  return (
    <section className='buscador'>
        <button onClick={handleBusqueda}>🔍</button>
        
        <input type="text" name='product' placeholder='Buscar producto' autoComplete='off' onChange={(e)=>setBusqueda(e.target.value)} value={busqueda}/>
    </section>
  ); 
}

export default Buscador;

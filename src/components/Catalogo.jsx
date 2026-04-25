import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import Producto from './Producto';
import { Link } from 'react-router-dom';

const Catalogo = ({ productos, idProducto, datosCarrito}) => {

  return (
    <main>

      <section className='catalogo'>
        {/*productos.length === 0 ? data.length > 0 ? (data.map((el)=> el.images.length > 1 ? <Producto key={el.id} el={el}/> : '')) : <p>Error en la pagina</p> : (productos.map((el)=> <Producto key={el.id} el={el}/>))*/}
        {productos.length > 0 ? productos.map((el)=> <Producto datosCarrito={datosCarrito} idProducto={idProducto} key={el.id} el={el}/>) : <p>Sin datos</p>}
      </section>
    </main>
  )
}

export default Catalogo

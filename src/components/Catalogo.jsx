import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import Producto from './Producto';

const Catalogo = ({resultBuscator}) => {
    const [productos, setProductos] = useState([]);

    const url = `https://api.escuelajs.co/api/v1/products`;
    const {data, error, loading} = useFetch(url);
    
    useEffect(()=>{
      let aux = [];
      const filtrarBusqueda = () =>{
        if (resultBuscator !== '') {
          aux =  data.filter((el) => el.title.includes(resultBuscator))
        }

        setProductos(aux);
      }
      
      filtrarBusqueda();
    },[resultBuscator]);
    
    if(!data) return null;

    

  return (
    <main>

      <section className='catalogo'>
        {productos.length === 0 ? data.length > 0 ? (data.map((el)=> el.images.length > 1 ? <Producto key={el.id} el={el}/> : '')) : <p>Error en la pagina</p> : (productos.map((el)=> <Producto key={el.id} el={el}/>))}
      </section>
    </main>
  )
}

export default Catalogo

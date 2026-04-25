import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Catalogo from '../components/Catalogo'
import { useFetch } from '../hooks/useFetch';

const PatoLibre = ({idProducto, datosCarrito}) => {
    const [resultBuscator, setresultBuscator] = useState('');
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
    <>
        {productos.length === 0 ? data.length > 0 ? <Catalogo datosCarrito={datosCarrito} idProducto={idProducto} productos={data} resultBuscator={resultBuscator}/> : '' : <Catalogo idProducto={idProducto} productos={productos} resultBuscator={resultBuscator}/>}
    </>
  )
}

export default PatoLibre

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Catalogo from '../components/Catalogo'
import { useFetch } from '../hooks/useFetch';

const PatoLibre = ({idProducto}) => {
    const [resultBuscator, setresultBuscator] = useState('');
    const [off, setOff] = useState(0);
    const [limit, setLimit] = useState(8);
    const [numPaginas, setNumPaginas] = useState(0);
    const [productos, setProductos] = useState([]);
    
    const url = `https://api.escuelajs.co/api/v1/products`;
    const {data, error, loading} = useFetch(url);
    
    //console.log(data);
    
    useEffect(()=>{
      let aux = [];

      const paginacion =()=>{
        if (data) {
          aux = data.slice(1, 5);
          setProductos(aux);
        }
      }

      paginacion();
      
    },[data]);

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
        

    //console.log(productos);
    
  return (
    <>
        {productos.length === 0 ? data.length > 0 ? <Catalogo idProducto={idProducto} productos={data} resultBuscator={resultBuscator}/> : '' : <Catalogo idProducto={idProducto} productos={productos} resultBuscator={resultBuscator}/>}

        <nav>
          <button onClick={()=>{ setOff(off + 1)}}>Adelante</button>
          <button>atras</button>
        </nav>
    </>
  )
}

export default PatoLibre

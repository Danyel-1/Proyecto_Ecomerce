import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Catalogo from '../components/Catalogo'
import { useFetch } from '../hooks/useFetch';
import Paginacion from '../components/Paginacion';
import MenuHamburguesa from '../components/MenuHamburguesa';

const PatoLibre = ({idProducto, menu}) => {
    const [resultBuscator, setResultBuscator] = useState('');
    const [off, setOff] = useState(0);
    const [limit, setLimit] = useState(8);
    const [numPaginas, setNumPaginas] = useState();
    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    
    const url = `https://api.escuelajs.co/api/v1/products`;
    const {data, error, loading} = useFetch(url);
    
    //console.log(data);
    
    
    useEffect(()=>{ 
      let aux = [];
      
      const paginacion =()=>{
        if (data) {
          setNumPaginas(Math.ceil(data.length / 8))
          aux = data.slice(off, limit);
          setProductos(aux);
        }
      }
      
      paginacion();
      
    },[data, off, limit]);

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

    const pagina = (num) =>{
      setLimit(num * 8);
      setOff((num * 8) - 8);
      setPaginaActual(num);
    }
    
    const MostrarMenu = () =>{

    }

    if(!data) return null;
       

  return (
    <>
        { menu && <MenuHamburguesa/>}

        {productos.length === 0 ? data.length > 0 ? <Catalogo idProducto={idProducto} productos={data} resultBuscator={resultBuscator}/> : '' : <Catalogo idProducto={idProducto} productos={productos} resultBuscator={resultBuscator}/>}

        <Paginacion paginaActual={paginaActual} numPages={numPaginas} pagina={pagina} />
    </>
  )
}

export default PatoLibre

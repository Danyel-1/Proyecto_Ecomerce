import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const ProductosContext = createContext();

const ProductosProvider = ({children}) =>{
  const [busqueda, setBusqueda] = useState('');
  const [off, setOff] = useState(0);
  const [limit, setLimit] = useState(8);
  const [numPaginas, setNumPaginas] = useState();
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosData, setProductosData] = useState([]);
  
  const url = `https://api.escuelajs.co/api/v1/products`;
  const {datos, error, loading} = useFetch(url);
  
  /*
  */
  useEffect(()=>{ 
    let aux = [];
    
    const paginacion =()=>{
      if (datos && productos.length === 0) {
        setNumPaginas(Math.ceil(datos.length / 8))
        aux = datos.slice(off, limit);
        setProductosData(aux);
      }
    }
      
    paginacion();
      
  },[datos, limit, off, busqueda]);
    
  const pagina = (num) =>{
    setLimit(num * 8);
    setOff((num * 8) - 8);
    setPaginaActual(num);
  }
     
  if(!datos) return null;       

  const handleBusqueda = ()=>{
    setProductos( datos.filter((el) => el.title.toLowerCase().includes(busqueda.toLowerCase())));
    setProductosData([])
  }

  const data = {productos, handleBusqueda, busqueda, setBusqueda, datos, numPaginas, paginaActual, pagina, productosData};

  return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export {ProductosProvider};
export default ProductosContext;
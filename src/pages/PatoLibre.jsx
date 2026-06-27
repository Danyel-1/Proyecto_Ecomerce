import React, { useContext } from 'react'
import Header from '../components/Header'
import Catalogo from '../components/Catalogo'
import Paginacion from '../components/Paginacion';
import MenuHamburguesa from '../components/MenuHamburguesa';
import UsuarioContext from '../context/UsuariosContext';
import ProductosContext from '../context/ProductosContext';

const PatoLibre = ({idProducto}) => {   

  const {productos, pagina, numPaginas, paginaActual, productosData} = useContext(ProductosContext);

  return ( 
    <> 
      {/*productos.length === 0 ? productosData.length > 0 ? <Catalogo idProducto={idProducto} productos={productosData} resultBuscator={resultBuscator}/> : '' : <Catalogo idProducto={idProducto} productos={productos} resultBuscator={resultBuscator}/>*/}

      {productosData.length > 0 ? 
      <Catalogo idProducto={idProducto} productos={productosData}/> 
      : 
      <Catalogo idProducto={idProducto} productos={productos}/>
      }

      {productosData && <Paginacion paginaActual={paginaActual} numPages={numPaginas} pagina={pagina} />}
    </>
  )
}

export default PatoLibre

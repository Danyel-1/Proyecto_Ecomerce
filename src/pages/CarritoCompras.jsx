import React, { useContext, useEffect, useState } from 'react'
import CarritoContext from '../context/CarritoContext'
import ProductoEnCarro from '../components/ProductoEnCarro';

const CarritoCompras = () => {
  const {carrito, AgregarCarrito, ActualizarCantidad, EliminarProducto, ActualizarIndicador} = useContext(CarritoContext);

  const [costoTotal, setCostoTotal] = useState(0);

  useEffect(()=>{
    let total = carrito.reduce((acumulador, actual) => acumulador + (actual.datos.precio * actual.datos.cantidad), 0);
    
    setCostoTotal(total);
  },[carrito]);

  const ActualizarPrecio = () =>{
    let total = carrito.reduce((acumulador, actual) => acumulador + (actual.datos.precio * actual.datos.cantidad), 0);
    
    setCostoTotal(total);
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
      <table>
        <tbody>
          {carrito.length > 0 ? carrito.map((el)=> <ProductoEnCarro 
            ActualizarIndicador={ActualizarIndicador} EliminarProducto={EliminarProducto} 
            ActualizarPrecio={ActualizarPrecio} 
            ActualizarCantidad={ActualizarCantidad} 
            key={el.datos.id} 
            el={el.datos}
          /> 
        ) : (
          <tr>
            <td className='carro-vacio'><img src="/carritovacio.png" alt="Carrito vacio" /></td>
          </tr>
        ) }
        </tbody>
      </table>

      <section className='pre-compra'>
        <h2>Order Summary</h2>
        <p>Total: {costoTotal}</p>
        <button>Checkout</button>
      </section>
    </div>
  )
}

export default CarritoCompras

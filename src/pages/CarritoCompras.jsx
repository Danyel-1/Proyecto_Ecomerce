import React, { useContext, useEffect, useState } from 'react'
import CarritoContext from '../context/CarritoContext'
import ProductoEnCarro from '../components/ProductoEnCarro';

const CarritoCompras = () => {
  const {carrito, AgregarCarrito, ActualizarCantidad} = useContext(CarritoContext);

  const [costoTotal, setCostoTotal] = useState(0);

  useEffect(()=>{
    let total = carrito.reduce((acumulador, actual) => acumulador + actual.datos.precio, 0);
    
    setCostoTotal(total);
  },[])

  return (
    <div>
      <h1>Carrito de compras</h1>
      <table>
        <tbody>
          {carrito.length > 0 ? carrito.map((el)=> <ProductoEnCarro ActualizarCantidad={ActualizarCantidad} key={el.datos.id} el={el.datos}/> 
        ) : (
          <tr>
            <td>No tienes productos en carro</td>
          </tr>
        ) }
        </tbody>
      </table>

      <section>
        <h3>Order Summary</h3>
        <p>Total: {costoTotal}</p>
      </section>
    </div>
  )
}

export default CarritoCompras

import React, { useState } from 'react'

const ProductoEnCarro = ({el, ActualizarCantidad, ActualizarPrecio, EliminarProducto, ActualizarIndicador}) => {
    const {tl, img, precio, cantidad, id} = el;
    const [cantProd, setCantProd] = useState(cantidad);

  const suma = () =>{
    setCantProd(cantProd + 1);
    ActualizarCantidad(id, 's');
    ActualizarPrecio();
    ActualizarIndicador();
  };

  const resta = () =>{
    if (cantidad === 1) {
      setCantProd(cantProd - 0);
      ActualizarCantidad(id,  'n' );
    }else{
      ActualizarCantidad(id,  'r' );
      setCantProd(cantProd - 1);
    }
    ActualizarPrecio();
    ActualizarIndicador();
  };

  const Eliminar = () =>{
    EliminarProducto(id);
  }

  return (
    <tr>
        <td><img src={img} alt={tl} /></td>

        <td>
            <p><strong>Producto:</strong> {tl}</p>
            <p><strong>Precio:</strong> ${precio}.00</p>
            <p><strong>ID:</strong> {id}</p>
        </td>

        <td><button onClick={resta}>-</button><p>{cantProd}</p><button onClick={suma}>+</button></td>
    
        <td><button onClick={Eliminar}>🗑</button></td>
    </tr>
  )
}

export default ProductoEnCarro

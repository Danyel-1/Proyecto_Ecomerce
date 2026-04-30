import React, { useState } from 'react'

const ProductoEnCarro = ({el, ActualizarCantidad}) => {
    const {tl, img, precio, cantidad, id} = el;
    const [cantProd, setCantProd] = useState(cantidad);

    const suma = () =>{
      setCantProd(cantProd + 1)
        ActualizarCantidad(id, cantProd);
      console.log(cantidad);
      
    };

  const resta = () =>{};

  return (
    <tr>
        <td><img src={img} alt={tl} /></td>

        <td>
            <p><strong>Producto:</strong> {tl}</p>
            <p><strong>Precio:</strong> ${precio}.00</p>
            <p><strong>ID:</strong> {id}</p>
        </td>

        <td><button>-</button><p>{cantProd}</p><button onClick={suma}>+</button></td>
    
        <td><button>🗑</button></td>
    </tr>
  )
}

export default ProductoEnCarro

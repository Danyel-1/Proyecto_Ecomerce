import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Producto = ({el, idProducto}) => {
  const { images, price, slug, title, id} = el
  let navigate = useNavigate();

  const Carrito = () =>{
    alert("carrito");
  }

  const handleClick   = ()=>{
    idProducto(id);
    navigate(`/detalle-producto/${id}`)
  }

  return (
      <article className='producto'>
        <img src={images[0]} alt={slug} />

        <div className='description'>  
          <h3 >{title}</h3>
          <p>Price: ${price}.00</p>
        </div>

        <section className="botones">
          <button onClick={handleClick}>More details</button>
          <button onClick={Carrito}>ADD TO CAR</button>
        </section>
      </article>
  )
}

export default Producto

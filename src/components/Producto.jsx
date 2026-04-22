import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Producto = ({el, idProducto}) => {
  const { images, price, slug, title, id} = el
  let navigate = useNavigate();

  const handleClick   = ()=>{
    idProducto(id);
    navigate(`/detalle-producto/${id}`)
  }

  return (
      <article onClick={handleClick} className='producto'>
        <img src={images[0]} alt={slug} />

        <div className='description'>  
          <h3>{title}</h3>
          <p>Price: ${price}.00</p>
        </div>
          <button>ADD TO CAR</button>
      </article>
  )
}

export default Producto

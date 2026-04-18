import React from 'react'
import { Link } from 'react-router-dom';

const Producto = ({el, idProducto}) => {
  const { images, price, slug, title, id} = el

  const handleClick   = ()=>{
    idProducto(id);
  }

  return (
    <Link to='/detalle-producto/:id'>
      <article onClick={handleClick} className='producto'>
        <img src={images[0]} alt={slug} />

        <div className='description'>  
          <h3>{title}</h3>
          <p>Price: ${price}.00</p>
        </div>
          <button>ADD TO CAR</button>
      </article>
    </Link>
  )
}

export default Producto

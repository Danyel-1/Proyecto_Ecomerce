import React from 'react'

const Producto = ({el}) => {
  const { images, price, slug, title} = el

  return (
    <article className='producto'>
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

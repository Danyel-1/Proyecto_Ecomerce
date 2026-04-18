import React, { useEffect, useState } from 'react'

const ProductoDescripcion = ({id}) => {
  const [datosProduct, setDatosProduct] = useState();

  useEffect(()=>{
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(respuesta => respuesta.json())
    .then(data => {
      setDatosProduct(data);
    })
  },[])

  const { images, price, slug, title} = datosProduct;

  return (
    <div>
      <h1>{title}</h1>
      <img src={images} alt={slug} />
      <h2>{price}</h2>
    </div>
  )
}

export default ProductoDescripcion

import React, { useEffect, useState } from 'react'



const ProductoDescripcion = ({id}) => {
  const idProd = id;
  const [datosProduct, setDatosProduct] = useState({});

  useEffect(()=>{
    fetch(`https://api.escuelajs.co/api/v1/products/${idProd}`)
    .then(respuesta => respuesta.json())
    .then(data => {
      let aux = {
        category: data.category.name,
        description: data.description,
        images: data.images[0],
        price: data.price,
        slug: data.slug,
        title: data.title,
      }

      setDatosProduct(aux)
    })
  },[])
  console.log(id);
  
  console.log(datosProduct);


  return (
    <div>
      {datosProduct.category ?  <img src={datosProduct.images} alt="" /> :<p>pl</p>  }
    </div>
  )
}

export default ProductoDescripcion

import React, { useEffect, useState } from 'react'
import NotFound from './NotFound';
import { useNavigate } from 'react-router-dom';



const ProductoDescripcion = ({id}) => {
  const idProd = id;
  const [datosProduct, setDatosProduct] = useState({});
  const navigate = useNavigate();

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
  const {category, description, images, price, slug, title} = datosProduct;

  const handleReturn = ()=>{
    navigate(-1)
  }

  return (
    <>
      {datosProduct.category ? 
      <article className='product-desc'>
        <img src={images} alt={slug} />
        <h3>{title}</h3>
        <p><strong> Price:</strong> ${price}.00</p>
        <p><strong>Category:</strong> {category}</p>
        <strong>Description:</strong>
        <p>{description}</p>

        <section className='botones'>
          <button onClick={handleReturn}>↩</button>
          <button>Agregar al carrito</button>
        </section>
      </article>  
      :
      <NotFound/>  }
    </>
  )
}

export default ProductoDescripcion

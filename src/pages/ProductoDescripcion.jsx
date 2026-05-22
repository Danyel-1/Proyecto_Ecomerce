import React, { useContext, useEffect, useState } from 'react'
import NotFound from './NotFound';
import { useNavigate } from 'react-router-dom';
import CarritoContext from '../context/CarritoContext';



const ProductoDescripcion = ({id}) => {
  const idProd = id;
  const [datosProduct, setDatosProduct] = useState({});
  const {carrito, AgregarCarrito} = useContext(CarritoContext);
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
  },[]);

  const {category, description, images, price, slug, title} = datosProduct;

  const handleReturn = ()=>{
    navigate(-1)
  }

  const Carrito = () =>{
    AgregarCarrito({
      id: id,
      img:images[0],
      tl:title,
      precio:price,
      cantidad: 1,
    })
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
          <button onClick={Carrito}>Agregar al carrito</button>
        </section>
      </article>  
      :
      <NotFound/>  }
    </>
  )
}

export default ProductoDescripcion

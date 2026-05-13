import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CarritoContext from '../context/CarritoContext';

const Producto = ({el, idProducto}) => {
  const { images, price, slug, title, id} = el;
  const {carrito, AgregarCarrito} = useContext(CarritoContext);
  let navigate = useNavigate();

  const Carrito = () =>{
    AgregarCarrito({
      id: id,
      img:images[0],
      tl:title,
      precio:price,
      cantidad: 1,
    })
    console.log(carrito);
  }

  const handleClick = ()=>{
    idProducto(id);
    navigate(`/detalle-producto/${id}`);
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

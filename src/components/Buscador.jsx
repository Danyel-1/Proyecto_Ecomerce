import React, { useState } from 'react'

const productoBuscar = ``;

const Buscador = ({DetallesInfo}) => {
    const [producto, setProducto] = useState(productoBuscar);

    const handleChange = (e) =>{
        setProducto(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        DetallesInfo(producto);
    }


  return (
    <section className='buscador'>
        <button onClick={handleSubmit}>🔍</button>
        <input type="text" name='product' placeholder='Buscar producto' autoComplete='off' onChange={handleChange} value={producto}/>
    </section>
  );
}

export default Buscador;

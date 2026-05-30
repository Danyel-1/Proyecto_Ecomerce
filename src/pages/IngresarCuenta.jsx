import React from 'react'

const IngresarCuenta = () => {

    const mandarDatos = ()=>{
        const response = await fetch("https://api.escuelajs.co/api/v1/users/");

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await
    }

  return (
    <section className='formulario-ingreso'>
      <h1>Ingresa tu correo electronico y una contrasena</h1>

      <form action="/">
        <label htmlFor="email">Correo Electronico</label>
        <br />
        <input type="email" name='email' placeholder='correo@correo.com' required/>
        <br />
        <label htmlFor="password">Contrasena</label>
        <br />
        <input type="password" name='password' placeholder='******' required/>
      </form>

    <div className='botones'>
        <button>Continuar</button>
    </div>
    </section>
  )
}

export default IngresarCuenta

import React, { useEffect, useState } from 'react'

const CrearCuenta = () => {
  const [botonSubmit, setBotonSubmit] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const [nombre, setNombre] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const validarDatos=()=>{
    const nomRegex = /^[a-zA-Z\s]{8}/;
    const emailRegex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

    if ((nombre.length >= 0) && (nomRegex.test(nombre))){
      setBotonSubmit(true);
      setErrorNombre('correcto')
    }else{
      setErrorNombre("El nombre debe tener minimo 8 caracteres");
      setBotonSubmit(false);
    }
  
    if ((email.length >= 0) && (emailRegex.test(email))){
      setErrorEmail("Correcto");
      setBotonSubmit(true);
    }else{
      setErrorEmail("Escriba su Email en un formato valido");
      setBotonSubmit(false);
    }
  }

  async function mandarDatos(e) {
    e.preventDefault();

    try {
      const responce = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          name: nombre,
          email: email,
          password: password,
          avatar: "https://picsum.photos/800"
        })
      });

      if (!responce.ok) {
        throw new Error(`Responce status: ${responce.status}`)
      }

    } catch (error) {
      setMensajeError(`Response estatus: ${error.message}`)
    }

    console.log("Correcto");
      
  }

  return (
    <section className='formulario-ingreso'>
      <h1>Ingresa un correo electronico y una contrasena</h1>

      <form onChange={validarDatos} onSubmit={mandarDatos}>
        <label htmlFor="nombre">Nombre</label>
        <br />
        <input 
        id='nombre' 
        type="text" 
        name='nombre' 
        placeholder='Nombre' 
        onChange={(e) => setNombre(e.target.value)}
        required/>
        {errorNombre}
        <br />

        <label htmlFor="email">Correo Electronico</label>
        <br />
        <input 
        id='email' 
        type="email" 
        name='email' 
        placeholder='correo@correo.com'
        onChange={(e) => setEmail(e.target.value)}
        required/>
        {errorEmail}
        <br />

        <label htmlFor="password">Contrasena</label>
        <br />
        <input 
        id='password' 
        type="password" 
        name='password' 
        placeholder='******'
        onChange={(e) => setPassword(e.target.value)}
        required/>
        {errorPassword}

        <div className='botones'>
          <button  type='submit' disabled={!botonSubmit}>Continuar</button>
        </div>
      </form>

    </section>
  )
}

export default CrearCuenta

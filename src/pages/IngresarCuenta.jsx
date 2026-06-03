import React, { useState } from 'react'

const IngresarCuenta = () => {
  const [inputs, setInputs] = useState({});
  const [nombreValidado, setNombreValidado] = useState(false);
  const [emailValidado, setEmailValidado] = useState(false);
  const [mensajeNombre, setMendajeNombre] = useState("");
  const [mensajeEmail, setMendajeEmail] = useState("");

  
  const handleChange = (e) =>{
    const name = e.target.name,
    value = e.target.value;  
    
    if(name === "nombre"){
      const nomRegex = /^[a-zA-Z\s]{8}/;
      
      if ((value.length >= 0) && (nomRegex.test(value))) {
        setNombreValidado(true);
        setMendajeNombre("Espacio completado ✅");

      }else{
        setNombreValidado(false);
        setMendajeNombre("El espacio en 'nombre' es necesario");
      }
    }

    setInputs(values => ({...values, [name] : value}))
  }

    const mandarDatos = () => {

        fetch("https://api.escuelajs.co/api/v1/users/", {
          method: "POST",
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({
            name: inputs.nombre,
            email: inputs.email,
            password: inputs.password,
            avatar: "https://picsum.photos/800"
          })
        })
        .then(response =>{
          if (!response.ok) throw new Error(`Response status: ${response.status}`);
          return response.json();
        })
        .catch(error => console.error(error)
        );       
    }

  return (
    <section className='formulario-ingreso'>
      <h1>Ingresa un correo electronico y una contrasena</h1>

      <form >
        <label htmlFor="nombre">Nombre</label>
        <br />
        <input 
        id='nombre' 
        type="text" 
        name='nombre' 
        placeholder='Nombre' 
        value={inputs.nombre}
        onChange={handleChange}
        required/>
        {mensajeNombre}
        <br />
        <label htmlFor="email">Correo Electronico</label>
        <br />
        <input 
        id='email' 
        type="email" 
        name='email' 
        placeholder='correo@correo.com' 
        value={inputs.email}
        onChange={handleChange}
        required/>
        <br />

        <label htmlFor="password">Contrasena</label>
        <br />
        <input 
        id='password' 
        type="password" 
        name='password' 
        placeholder='******'
        value={inputs.password}
        onChange={handleChange}
         required/>
      </form>

    <div className='botones'>
        <button onClick={mandarDatos}>Continuar</button>
    </div>
    </section>
  )
}

export default IngresarCuenta

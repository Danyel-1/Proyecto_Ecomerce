import React, { useContext, useEffect } from 'react'
import UsuarioContext from '../context/UsuariosContext';
import { useNavigate } from 'react-router-dom';

const IngresarCuenta = () => {
  const {setEmail, botonSubmit, errorEmail, errorPassword, setPassword, mensajeError, user,loguearUsusario, validarDatos} = useContext(UsuarioContext);

  const navigate = useNavigate();

  const handleNavigate =()=>{
    if (!user) {
      console.log(mensajeError);
    }
  }

  return (
    <section className='formulario-ingreso'>
      <h1>Loguea tu cuenta</h1>

      <form onChange={validarDatos} onSubmit={loguearUsusario}>
        
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
          <button  type='submit' onClick={handleNavigate} disabled={!botonSubmit}>Continuar</button>
        </div>
      </form>

      {mensajeError}
    </section>
  )
}

export default IngresarCuenta

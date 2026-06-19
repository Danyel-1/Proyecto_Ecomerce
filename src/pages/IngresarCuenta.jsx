import React, { useContext } from 'react'
import UsuarioContext from '../context/UsuariosContext';

const IngresarCuenta = () => {
  const {setEmail, botonSubmit, errorEmail, errorPassword, setPassword, mensajeError, loguearUsusario, validarDatos} = useContext(UsuarioContext);

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
          <button  type='submit' disabled={!botonSubmit}>Continuar</button>
        </div>
      </form>

      {mensajeError}
    </section>
  )
}

export default IngresarCuenta

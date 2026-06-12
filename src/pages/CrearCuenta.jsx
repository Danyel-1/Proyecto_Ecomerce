import React, { useContext} from 'react'
import UsuarioContext from '../context/UsuariosContext'

const CrearCuenta = () => {
  const {botonSubmit, mensajeError, setNombre, errorNombre, setEmail, errorEmail, setPassword, errorPassword, validarDatos, mandarDatos} = useContext(UsuarioContext);

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

      <div>{mensajeError}</div>

    </section>
  )
}

export default CrearCuenta

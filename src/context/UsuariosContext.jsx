import { createContext, useState } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({children})=>{
    const [botonSubmit, setBotonSubmit] = useState(false);
    const [mensajeError, setMensajeError] = useState('');
    const [nombre, setNombre] = useState('');
    const [errorNombre, setErrorNombre] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [user , setUser]= useState();

    const validarDatos=()=>{
        const nomRegex = /^[a-zA-Z\s]{8}/;
        const emailRegex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

        console.log(email);
        console.log(password);
        
        
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
    }
 
    const loguearUsusario = async (e) => {
        e.preventDefault();

        try {
        const responce = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
            email: email,
            password: password,
            })
        });

        const data = await responce.json();

        setUser(data);

        localStorage.setItem('user', data);  
        
        console.log(user);
        
        if (!responce.ok) {
            throw new Error(`Responce status: ${responce.status}`)
        }

        } catch (error) {
        setMensajeError(`Response estatus: ${error.message}`)
        }
    }

    const data = {botonSubmit, mensajeError, nombre, setNombre, errorNombre, email, setEmail, errorEmail, password, setPassword, errorPassword, validarDatos, mandarDatos, loguearUsusario}

    return <UsuarioContext.Provider value={data}>{children}</UsuarioContext.Provider>
}

export {UsuarioProvider};
export default UsuarioContext;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [datosUsuarioLogueado, setDatosUsuarioLogueado] = useState();
    
    useEffect(()=>{
        const usuarioLogueado =  JSON.parse(window.localStorage.getItem('user'));
        
        if (usuarioLogueado) {
            const usuarioEncontrado = usuarioLogueado;
            setUser(usuarioEncontrado);
        }
        
    },[]);
    
    useEffect(()=>{
        const datosUsuarioLogueado = async ()=>{

        if (user) {
            const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile",{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.access_token}`,
            },
            }) 

            const result = await response.json();
            
            setDatosUsuarioLogueado(result);
            
            if (!response.ok) {
                throw new Error(`Response status : ${response.status}`)
            }

        }
    }
        datosUsuarioLogueado();
    },[user]);
    
    

    const validarDatos=()=>{
        const nomRegex = /^[a-zA-Z\s]{8}/;
        const emailRegex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
                
        if ((nombre.length > 0) && (nomRegex.test(nombre))){
            setBotonSubmit(true);
            setErrorNombre('correcto');
        }else{
            setErrorNombre("El nombre debe tener minimo 8 caracteres");
            setBotonSubmit(false);
        }
    
        if ((email.length > 0) && (emailRegex.test(email))){
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
                        
            if (!responce.ok) {
                setMensajeError(`Responce status: ${responce.status}`);
                throw new Error(`Responce status: ${responce.status}`);
            }
            
            const data = await responce.json();

            setUser(data);
            
            window.localStorage.setItem('user', JSON.stringify(data));   

        } catch (error) {
            setMensajeError(`Response estatus: ${error.message}`)
        }
    }

    const handleLogout = () => {        
        setUser();
        setPassword('');
        window.localStorage.removeItem('user');
    };

    const data = {botonSubmit, mensajeError, nombre, setNombre, errorNombre, email, setEmail, errorEmail, password, setPassword, errorPassword, validarDatos, mandarDatos, loguearUsusario, setUser, user, datosUsuarioLogueado, handleLogout}

    return <UsuarioContext.Provider value={data}>{children}</UsuarioContext.Provider>
}

export {UsuarioProvider};
export default UsuarioContext;

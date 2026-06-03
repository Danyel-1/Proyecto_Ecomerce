import { useEffect, useState } from "react"

export const useValidate = (dato, tipo) =>{
    const [validate, setValidate ] = useState(false);
    const [mensaje, setMesaje] = useState("");

    useEffect(()=>{
        const nomRegex = /^[a-zA-Z\s]{8}/;
        const emailRegex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

        const Validador = ()=>{
            switch (tipo) {
                case "nombre":
                    if ((dato.length >= 0) && (nomRegex.test(dato))) {
                        setValidate(true);
                    }else{
                        setValidate(false);
                        setMesaje("El campo NO tiene que esta vacio y con un formato valido")
                    }
                    break;

                case "email":
                    if ((dato.length >= 0) && (emailRegex.test(dato))) {
                        setValidate(true);
                    }else{
                        setValidate(false);
                        setMesaje("El campo NO tiene que esta vacio y con un formato valido")
                    }
                    break;
            
                default:
                    break;
            }
        }

        Validador();

    }, [dato, tipo])

    return {validate, mensaje};
}
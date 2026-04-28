import { createContext, useState } from "react";

const CarritoContext = createContext();
//const CarritoTotal = [];

const CarritoPovider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);
    
    const AgregarCarrito = (datos) => {
        setCarrito([...carrito,
            {datos}
        ])
    }
    
    const data = {carrito, AgregarCarrito};

   return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoPovider};
export default CarritoContext;
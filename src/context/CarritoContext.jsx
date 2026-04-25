import { createContext, useState } from "react";

const CarritoContext = createContext();

const CarritoTotal = {};

const CarritoPovider = ({children}) =>{
    const [carrito, setCarrito] = useState(CarritoTotal);

   const data = {carrito};

   const AgregarCarrito = () => {
    setCarrito({...carrito,
        children
    })
   }

   return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoPovider};
export default CarritoContext;
import { createContext, useState } from "react";

const CarritoContext = createContext();
//const CarritoTotal = [];

const CarritoPovider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const ActualizarCantidad = (datos, cant) =>{
        const productoActualizar = carrito.find((el)=> el.datos.id === datos);

        productoActualizar.datos.cantidad = cant;

        console.log(productoActualizar);
    }

    const AgregarCarrito = (datos) => {
        const productoExiste = carrito.find((el)=> el.datos.id === datos.id);

        if (productoExiste) {
            productoExiste.datos.cantidad += 1;
        }else{
            setCarrito([...carrito,
                {datos}
            ])
            
        }
    }
    
    const data = {carrito, AgregarCarrito, ActualizarCantidad};

   return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoPovider};
export default CarritoContext;
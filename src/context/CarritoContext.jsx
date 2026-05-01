import { createContext, useState } from "react";

const CarritoContext = createContext();
//const CarritoTotal = [];

const CarritoPovider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const ActualizarCantidad = (datos, char) =>{
        const productoActualizar = carrito.find((el)=> el.datos.id === datos);

        if (char === 'n') {
            productoActualizar.datos.cantidad = 1;
        }
        else if (char === 'r') {
            productoActualizar.datos.cantidad -= 1;
        }else{
            productoActualizar.datos.cantidad += 1;
        }
    }

    const EliminarProducto = (datos)=>{
        let confirmar = confirm(`Eliminar producto con el id: ${datos}?`);

        if (confirmar) {
            let aux = carrito.filter((el)=> el.datos.id != datos)
    
            setCarrito(aux);
        }
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
    
    const data = {carrito, AgregarCarrito, ActualizarCantidad, EliminarProducto};

   return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoPovider};
export default CarritoContext;
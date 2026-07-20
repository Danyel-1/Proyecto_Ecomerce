import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarritoContext = createContext();

const CarritoPovider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);
    const [numArticulo, setNumArticulo] = useState(0);

    useEffect(()=>{
        const carritoEnUso =  JSON.parse(window.localStorage.getItem('carrito'));
        
        if (carritoEnUso) {
            const carritoEncontrado = carritoEnUso;
            setCarrito(carritoEncontrado);
        }
    },[])

    const GuardarCarrito = ()=>{
        window.localStorage.setItem('carrito', JSON.stringify(carrito));
    }

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
            let aux = carrito.filter((el)=> el.datos.id != datos);
            setCarrito(aux);
        }
    }

    const AgregarCarrito = async (datos) => {
        const productoExiste = carrito.find((el)=> el.datos.id === datos.id);

        if (productoExiste) {
            productoExiste.datos.cantidad += 1;
        }else{
            setCarrito([...carrito,
                {datos}
            ])
        }
    }

    const ActualizarIndicador = ()=>{
        let totalPiezas = carrito.reduce((acumulador, actual) => acumulador + actual.datos.cantidad, 0);
        
        setNumArticulo(totalPiezas); 
    }

    const RealizarCompra = () =>{
        setCarrito([]);
        window.localStorage.removeItem('carrito');
    }
    
    const data = {carrito,numArticulo, ActualizarIndicador,AgregarCarrito, ActualizarCantidad, GuardarCarrito,EliminarProducto, RealizarCompra};

   return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoPovider};
export default CarritoContext;
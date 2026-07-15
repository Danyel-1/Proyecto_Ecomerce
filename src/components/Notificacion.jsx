import React from 'react'

const Notificacion = ({message, color}) => {

    const estilo ={
        background: `linear-gradient(to bottom right, ${color}, #3f87a6)`,
        position:"fixed",
        right: "3%",
        color: "#ffffff",
    }

   return (
    <div style={estilo}>
        <p>{message}</p>
    </div>
    )
}

export default Notificacion

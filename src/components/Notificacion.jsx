import React from 'react'

const Notificacion = ({message, color}) => {

    const estilo ={
        background: `linear-gradient(to bottom right, ${color}, #3f87a6)`,
        position:"fixed",
        right: "3%",
        color: "#ffffff",
        borderRadius: "10px"
    }

    const parrafo ={
        fontWeight: "600",
        margin: "10px"
    }

   return (
    <div style={estilo}>
        <p style={parrafo}>{message}</p>
    </div>
    )
}

export default Notificacion

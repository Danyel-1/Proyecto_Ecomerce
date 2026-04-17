import React, { useState } from 'react'
import Header from '../components/Header'
import Catalogo from '../components/Catalogo'

const PatoLibre = () => {
    const [resultBuscator, setresultBuscator] = useState('');

    const DetallesInfo = (product) =>{
        setresultBuscator(product);
    } 

  return (
    <>
        <Header DetallesInfo={DetallesInfo}/>
        <Catalogo resultBuscator={resultBuscator}/>
    </>
  )
}

export default PatoLibre

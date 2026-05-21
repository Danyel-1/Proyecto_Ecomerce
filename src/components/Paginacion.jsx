import React, { useEffect, useState } from 'react'

const Paginacion = ({numPages, pagina, paginaActual}) => {
    const [pages, setPages] = useState([]);
    
    useEffect(()=>{
        let aux  = [];
        const pintarPags = ()=>{
            for (let i = 1; i < numPages + 1; i++) {
                aux.push(i);
            }

            setPages(aux);
        }
        
        pintarPags();
        
    },[numPages]);
    
    const handleClick =(e, num) =>{
        e.preventDefault();
        pagina(num);
    }

  return (
        <nav>
            <ul className='lista-paginas'>
                {pages.map((num)=>(
                        <li key={num}  onClick={(e) => handleClick(e, num)} className={paginaActual === num ? 'active' : ''}>
                            <a href='!#'>
                                {num}
                            </a>
                        </li>
                ))}
            </ul>
        </nav>
  )
}

export default Paginacion

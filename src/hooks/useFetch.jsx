import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] =useState();

    useEffect(()=>{ 
        const fetchData = async ()=>{
            setLoading(true);

            try {
                const resp = await fetch(url);

                if (!resp.ok) {
                    let error = new Error("Error en la peticion Fetch");
                    error.status = resp.status || "00";
                    error.statusText = resp.statusText || "Ocurrio un error";
                    throw error;
                }

                const json = await resp.json();

                setDatos(json);
                setError(null);
            } catch (error) {
                setDatos(null);
                setError(error);
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[url])

  return {datos, error, loading}
}

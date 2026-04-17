import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
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

                setData(json);
                setError(null);
            } catch (error) {
                setData(null);
                setError(error);
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[url])

  return {data, error, loading}
}

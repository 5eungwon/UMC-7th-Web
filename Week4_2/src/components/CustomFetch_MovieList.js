import axios from "axios";
import { useEffect, useState } from "react"


const CustomFetch_MovieList = (url)=>{
    const [movie,setmovie] = useState([]);

    useEffect(()=>{
        const getmovie = async() =>{
            const movies = await axios.get(`${url}`,{
                headers:{
                    Authorization : `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
                }
            })
            setmovie(movies.data.results)
        }
        getmovie()

    },[])

    return {movie};
    
}

export default CustomFetch_MovieList;
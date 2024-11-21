import axios from "axios";
import { useEffect, useState } from "react"


const CustomFetch_MovieList = (url)=>{
    const [movie,setmovie] = useState([]);
    const [loading,setloading] = useState(true);
    const [err,seterr] = useState(false);

    useEffect(()=>{
        axios.get(`${url}`,{
            headers :{
                Authorization : `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
        })
        .then((res)=>{
            setmovie(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
            seterr(err)
        })
        .finally(()=>{
            setloading(false);
        })
    },[])

    return {movie,loading,err};
    
}

export default CustomFetch_MovieList;
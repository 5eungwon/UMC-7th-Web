import { useEffect, useState } from "react"


const CustomFetch_MovieDetails = (id)=>{

    const [movie,setmovie] = useState()
    const [loading,setloading] = useState(true)
    const [err,seterr] = useState(false)

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_MOVIE_URL}/${id}?language=ko-KR`,{
            headers:{
                Authorization : `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                accept: 'application/json',
            }
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error("error!!!")
            }
            return res.json();
        })
        .then((data)=>{
            console.log(data)
            setmovie(data)
        })
        .catch((err)=>{
            seterr(true)
            console.error(`${err}`)
        })
        .finally(()=>{
            setloading(false)
        })


    },[id])
    return {movie,loading,err}

}


export default CustomFetch_MovieDetails
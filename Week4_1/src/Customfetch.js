import { useState,useEffect } from "react";


const Customfetch =(URL)=>{

    const [movie,setmovie] = useState([])    
    const [loading,setloading] = useState(true)    
    const [err,seterr] = useState(false)    
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_MOVIE_API}/movie/${URL}?language=ko-KR&page=1`,{
          method:'GET',
          headers:{
            'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,//
            'accept': 'application/json'
          }
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error('error!')
            }
          return res.json();
        })
        .then((data)=>{
          setmovie(data.results)
        })
        .catch((error)=>{
            seterr(error)
            console.log("error!!")
        })
        .finally(()=>{
            setloading(false)
        })
    
      
      },[])

      return {movie,loading,err};
}

export default Customfetch
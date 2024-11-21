import { useEffect, useState } from "react"


const CustomFetch_MovieCredit = (id)=>{

    const [credit,setcredit] = useState()
    const [loading2,setloading] = useState(true)
    const [err2,seterr] = useState(false)

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_MOVIE_URL}/${id}/credits?language=ko-KR`,{
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
            setcredit(data)
        })
        .catch((err)=>{
            seterr(true)
            console.error(`${err}`)
        })
        .finally(()=>{
            setloading(false)
        })


    },[id])
    return {credit,loading2,err2}

}


export default CustomFetch_MovieCredit
import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function MovieList({url,code}){
    console.log(url)
    const [movie,setmovie] = useState([])

    useEffect(()=>{
        const getmovies = async () =>{
            const movies = await axios.get(url,
                {headers : {
                    Authorization : code
                }}
            )
             
            console.log(movies?.data?.results)
            setmovie(movies?.data?.results)
        }
        getmovies()
    },[])
    return <HomepageContent>
    {movie.map((v,i)=>{
       return <div>
       <div style={{height:"85%" , display:"flex", justifyContent:"center",alignItems:"center"}}>
       <img src={`https://image.tmdb.org/t/p/w200${v?.poster_path}`} style={{width:"95%",height:"95%" ,borderRadius:"4%"}}></img>
       </div>
       <div style={{height:"15%" ,color:"white",fontSize:"small",fontWeight:"bold"}}>{v?.title}<br/>{v?.release_date}</div>
  </div>
    })}
    </HomepageContent>
}

export default MovieList

const HomepageContent = styled.div`
overflow:hidden;
scrollbar-width:0;
width:100%;
height:100%;
display:grid;
grid-template-columns :repeat(8,1fr);
`
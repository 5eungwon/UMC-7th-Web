import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomFetch_MovieList from "./CustomFetch_MovieList";

function Homepage({url}){
    
    const {movie} = CustomFetch_MovieList(url)

    
    return <HomepageContent>
    {movie.map((v,i)=>{
        return <div key={i}>
             <div style={{height:"85%" , display:"flex", justifyContent:"center",alignItems:"center"}}>
             <Link to={`/movies/details/${v.id}`}>
             <img src={`https://image.tmdb.org/t/p/w200${v?.poster_path}`} style={{width:"95%",height:"95%" ,borderRadius:"4%"}}></img>
             </Link>
             </div>
             <div style={{height:"15%" ,color:"white",fontSize:"small"}}>{v?.title}<br/>{v?.release_date}</div>
        </div>
    })}
    </HomepageContent>
}

export default Homepage

const HomepageContent = styled.div`
overflow:auto;
width:100%;
height:100%;
display:grid;
grid-template-columns :repeat(8,1fr);
`
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import "./Customfetch.js"
import Customfetch from "./Customfetch.js"


function App() {
  const popularURL = "upcoming";

  const {movie,loading,err} = Customfetch(popularURL);
  console.log(err);
  console.log(loading)

  return (
    <>
     <Container>
      {movie.map((v,i)=>{
        return <img src={`${import.meta.env.VITE_MOVIE_IMG}/w200/${v?.poster_path}`} alt="" style={{width:"150px",height:"150px"}} key={i}/>
      })}
     </Container>
    </>
  )
}

export default App

const Container = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:repeat(8,1fr);
overflow :auto;
`



import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const Search = ()=>{
    const [searchname , setsearchname] = useState("")
    const [movies , setmovies] = useState([]);
    console.log(movies)
    const changename = (e)=>{
        setsearchname(e.target.value)
    }
    const clicked = ()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchname}&include_adult=false&language=ko-KR&page=1`,{
            headers:{
                Authorization : `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
        })
        .then((datas)=>{
            console.log(datas)
            setmovies(datas.data.results)
        })
        .catch(()=>{
            console.error("에러")
        })
    }




    return <>
        <Container>
            <Searchcontainer>
                    <Input placeholder="검색어를 입력하세요." onChange={changename}/>
                    <Button onClick={()=>{clicked()}}>검색</Button>
            </Searchcontainer>
           {movies.length === 0 ?(<div style={{color:"white",display:"center",textAlign:"center",fontSize:"large"}}>결과 없음</div>):(
                 <Moviecontainer>
                 {movies.map((v,i)=>{
                         return <MovieCard key={i}>
                              <div style={{height:"80%" ,width:"100%"}}>
                              <Link to={`/movies/details/${v.id}`} style={{display:"block" ,width:"100%",height:"100%", display:"flex", justifyContent:"center",alignItems:"center"}}>
                              <img src={`https://image.tmdb.org/t/p/original${v?.poster_path}`} style={{width:"90%",height:"90%" ,borderRadius:"4%"}}></img>
                              </Link>
                              </div>
                              <div style={{height:"10%" ,color:"white",fontSize:"small",overflow:"hidden",textOverflow:"ellisips"}}>{v?.title}</div>
                              <div style={{height:"10%" ,color:"white",fontSize:"small",overflow:"hidden"}}>{v?.release_date}</div>
                         </MovieCard>
                     })}
             </Moviecontainer>
           )}
        </Container>
    </>
}

export default Search

const Container = styled.div`
width: 100%;
height:100%;

`
const Searchcontainer = styled.div`
width:100%;
height:20%;
display : flex;
align-items:center;
justify-content : center;
`
const Moviecontainer = styled.div`
width:100%;
height:80%;
display:grid;
grid-template-columns :repeat(8,1fr);
overflow:auto;
`

const Input = styled.input`
width:70%;
height:30%;
border:solid 2px grey;
`
const Button = styled.button`
width:6%;
height:40%;
`
const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px; /* 전체 카드 높이 */
`
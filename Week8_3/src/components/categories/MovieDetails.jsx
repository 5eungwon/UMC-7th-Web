import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import styled from "styled-components";
import axios from "axios";
import CustomFetch_MovieDetails from "../CustomFetch_MovieDetails";
import CustomFetch_MovieCredit from "../CustomFetch_MovieCredit";
import Crewprofile from "./Crewprofile";


const MovieDetails=()=>{
    const {id} = useParams();

    const {movie,loading,err} = CustomFetch_MovieDetails(id);
    const {credit,loading2,err2} = CustomFetch_MovieCredit(id);
    
    return <Container>
        <Backgroundimg src={`${import.meta.env.VITE_IMAGE_URL}/w1280/${movie?.backdrop_path}`}/>
        <TextBox>
            <p style={{fontSize:"30px"}}>{movie?.title}</p>
            <p style={{fontSize:"small"}}>평점: {movie?.vote_average}</p>
            <p style={{fontSize:"small"}}>{movie?.release_date}</p>
            <p style={{fontSize:"small"}}>{movie?.runtime}분</p>
            <h3>{movie?.tagline}</h3>
            <p style={{fontSize:"13px"}}>{movie?.overview}</p>
        </TextBox>
        <Middlebox>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;감독/출연</Middlebox>
        <Detailbox>
            {credit?.cast.map((v,i)=>{
                return <Crewprofile key={i} value={v}></Crewprofile>
            })}
        </Detailbox>
    </Container>
}

export default MovieDetails

const Container = styled.div`
position:relative;
width:100%;
height:100%;
`

const TextBox = styled.div`
 position: absolute; /* 부모 요소(Imgbox)를 기준으로 위치 설정 */
  top: 2%; /* 세로 중앙 */
  left: 1%; /* 가로 중앙 */

  color: white; /* 텍스트 색상 */
  background-color: rgba(0, 0, 0, 0.2); /* 검정색 반투명 배경 */
  padding: 10px; /* 텍스트 주위 여백 */
  border-radius: 4px; /* 텍스트 박스의 모서리를 둥글게 */
  font-weight: bold; /* 텍스트 굵게 */
  font-size:medium;
`

const Detailbox = styled.div`
width:100%;
height:39.4%;
overflow:auto;
display : grid;
grid-template-columns :repeat(8,1fr);
`

const Middlebox = styled.div`
width:100%;
height : 9.8%;
color:white;
font-weight:bold;
font-size:20px;
display:flex;
align-items:center;
border-bottom : solid rgba(128, 128, 128, 0.4) 2px;
`

const Backgroundimg = styled.img`
width:100%;
height:50%;
mask-image:linear-gradient(to left,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 90%);
`
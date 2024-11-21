import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useParams } from "react-router-dom"
import styled from "styled-components";

const Details =()=>{
    const {id} = useParams();

    const {data,isLoading,isError} = useQuery({
        queryKey: ["details",id], 
        queryFn:()=>axios.get(`http://localhost:3000/todo/${id}`).then((res)=>{return res.data})
    })


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching data</div>;
    return <>
        <Container>
            <Container2>{data.id}<br></br>
                {data.content}<br></br>
                {data.title}<br></br>
                {data.createdAt}
            </Container2>
        </Container>
    </>
}

export default Details

const Container = styled.div`
width:100%;
height:100%;;
display:flex;
align-items:center;
justify-content:center;
`

const Container2 = styled.div`
width:35%;
height:80%;
border: 2px solid grey;
border-radius:4%;
overflow:hidden;
text-align:center;
`
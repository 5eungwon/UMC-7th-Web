import styled from "styled-components"
import "./App.css"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import Listcard from "./Listcard"
const App = ()=>{
  const [list,setlist] = useState([]);
  const [change,setchange] = useState(0);


  useEffect(()=>{
    const list = axios.get("http://localhost:3000/todo",{

    })
    .then((res)=>{
      console.log(res.data[0])
      setlist(res.data[0])
    })
    .catch(()=>{
      console.error("에러발생")
    })

  },[change])

  const {register,handleSubmit} = useForm();

  const onSubmit = async(data)=>{
    console.log(data)
    const datas = await fetch("http://localhost:3000/todo",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(data)
    })
    .then((response)=>{
      if(!response.ok){
        throw new Error("에러")
      }
      return response.json();
    })
    .then((d)=>{
      console.log(d)
      if(change){
        setchange(0)
      }
      else setchange(1);
    })
  }
  
  
  return <Container>
    <Container2>
      <Bar1 style={{display:"flex", justifyContent:"center",alignItems:"center"}}>UMC-TodoList</Bar1>
      <Bar2>
         <Sendinfo onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
            <input type={"title"}{...register("title")}style={{width:"78%",height:"30%"}} placeholder="제목을 입력하세요"/>
            <input type={"content"}{...register("content")} style={{width:"78%",height:"30%"}} placeholder="내용을 입력하세요" />
            <button style={{width:"80%",height:"30%"}} type="submit">눌러</button>
            </FormContainer>
         </Sendinfo>
      </Bar2>
      <Bar3>
        {list.map((v,i)=>{
          return<Listcard key={i} title={v.title} content = {v.content} id={v.id} list={list} setlist={setlist}></Listcard>
        })}
      </Bar3>
    </Container2>
  </Container>
}
export default App

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
`

const Bar1 = styled.div`
width:100%;
height:15%;
`
const Bar2 = styled.div`
width:100%;
height:25%;
`
const Bar3 = styled.div`
width:100%;
height:61%;
overflow:auto;
`

const Sendinfo = styled.form`
width:100%;
height:100%;
`

const FormContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
`



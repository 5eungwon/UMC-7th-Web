import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


const Listcard = ({title,content,id,list,setlist})=>{
    const [modtitle,setmodtitle]  = useState(title)
    const [modcontent,setmodcontent]  = useState(content)
    const [state,setstate] = useState(0)
    const [change,setchange] = useState(0);

    const {data,isLoading,isError} = useQuery({
        queryKey:["todo"],
        queryFn:()=>axios.get("http://localhost:3000/todo").then((res)=>{
            console.log(res) 
            setlist(res.data[0])
            return res.data[0]
        })
    })

    
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn :(id)=> axios.delete(`http://localhost:3000/todo/${id}`),
        onSuccess : ()=>{
            queryClient.invalidateQueries("todo")
            console.log("삭제 성공")
        },
        onError:()=>{console.error("삭제 실패")},
    })

    const handledelete = ()=>{
        deleteMutation.mutate(id);
    }

    const changeMutation = useMutation({
        mutationFn: (datas)=>axios.patch(`http://localhost:3000/todo/${id}`,datas),
        onSuccess:()=>{
            queryClient.invalidateQueries("todo")
            setstate(0)
            console.log("수정 성공")
        },
        onError:()=>{console.error("수정 실패")}
    })

    const handlechange = ()=>{
        changeMutation.mutate({id: id,title: modtitle,content:modcontent},{
            onSuccess : (data)=>{console.log("수정 데이터보내기 성공",data)},
            onError : (err)=>{console.error("수정데이터 보내기 실패",err)}
        },
    
    );
    }
    
    const modifytitle = (e)=>{
        setmodtitle(e.target.value);
        console.log(modtitle)
    }
    const modifycontent = (e)=>{
        setmodcontent(e.target.value);
        console.log(modcontent)
    }


    if(!state){
        return<>
            <Container>
           
            <div style={{width:"70%" , height:"100%", float:"left"}}>
                <Link to={`/details/${id}`} style={{textDecoration:"none" ,color:"inherit"}}><div style={{width:"100%" , height:"50%"}}>{title}</div></Link>
                <div style={{width:"100%" , height:"50%"}}>{content}</div>
            </div>
            <div style={{width:"30%" , height:"100%",float:"left"}}>
                <button onClick={handledelete} disabled={deleteMutation.isLoading}>
                    {deleteMutation.isLoading ? "삭제중.." : "삭제"}
                </button>
                <button onClick={()=>{setstate(1)}}>수정</button>
            </div>
           
            </Container>
        </>
    }
    else{
        return<>
             <Container>
           
           <div style={{width:"70%" , height:"100%", float:"left"}}>
                <div style={{width:"100%" , height:"50%"}}>
                    <input style={{width:"100%" , height:"30%"}} onChange={modifytitle}></input>
                </div>
                <div style={{width:"100%" , height:"50%"}}>
                    <input style={{width:"100%" , height:"30%"}} onChange={modifycontent}></input>
                </div>
            </div>
           <div style={{width:"30%" , height:"100%",float:"left",display:"grid",justifyContent:"center",alignItems:"center"}}>
               <button onClick={handlechange}>수정완료</button>
           </div>
          
           </Container>
        </>
    }
}


export default Listcard

const Container = styled.div`
width:96%;
height:30%;
border:1px solid grey;
border-radius:2%;
margin-top:10px;
margin-left:2%
`


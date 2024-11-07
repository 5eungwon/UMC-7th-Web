
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { Outlet,Link } from "react-router-dom"
import { FaSearch,FaFilm} from "react-icons/fa"
import { MyContext } from "../App"
import { useContext } from "react"




function Root (){
    console.log(localStorage.getItem("refresh"))
    const {refreshtoken,accesstoken,setrefresh,setaccess,setusername,username} = useContext(MyContext)
    useEffect(()=>{
        const aaa = localStorage.getItem("refresh")
        const bbb = localStorage.getItem("access")
        const ccc = localStorage.getItem("user")
        setrefresh(aaa)
        setaccess(bbb)
        setusername(ccc)
    },[])
    return <>
    <Navbar>
        <div style={{width:"10%",height:"100%",backgroundColor: "black",float:"left",alignItems:"center",justifyContent:"center",display:"flex"}}>
            <a href="/">
                <Homepagebtn>YONGCHA</Homepagebtn>
            </a>
        </div>
        <div style={{width:"87%",height:"100%",backgroundColor: "black" ,float:"left",display:"flex",alignItems:"center",justifyContent:"right"}}>
            {refreshtoken == undefined ?(<a href="/login"><Loginbtn>로그인</Loginbtn></a>):(<h6 style={{color:"white"}}>{username}님 반갑습니다!</h6>)}
            <div style={{width:"3%"}}></div>
            {refreshtoken == undefined ?(<a href="/signup"><Signupbtn>회원가입</Signupbtn></a>):(<a href="/signup"><Signupbtn onClick={()=>{
                localStorage.removeItem("access")
                localStorage.removeItem("refresh")}}>로그아웃</Signupbtn></a>)}

        </div>
    </Navbar>
    <Sidebar>
        <div style={{width:"100%" ,height:"10%",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <a href="/search">
            <Searchbtn><FaSearch />찾기</Searchbtn>
            </a>
        </div>
        <div style={{width:"100%" ,height:"10%",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <a href="/movies">
        <Searchbtn><FaFilm />영화</Searchbtn>
            </a>
        </div>
    </Sidebar>
    <Mainbar>
        <Outlet></Outlet>
    </Mainbar>

    </>
}

export default Root

const Navbar = styled.nav`
width: 100%;
height:10%;
background-color: black;
opacity:0.88;
`

const Sidebar = styled.div`
float:left;
width:10%;
height:90%;
background-color:black;
opacity:0.88;
`

const Mainbar = styled.div`
float:left;
width:90%;
height:90%;
background-color:black;
`

const Homepagebtn = styled.button`
border:none;
background-color:black;
color:deepPink;
font-weight:bold;
font-size:large;
&:hover{
transition:0s;
opacity:0.5;
cursor:pointer
}
`

const Loginbtn = styled.button`
border:none;
background-color:black;
color:white;
font-size:medium;
&:hover{
transition:0s;
opacity:0.5;
cursor:pointer
}
`

const Signupbtn = styled.button`
border:none;
background-color:deeppink;
color:white;
font-size:medium;
&:hover{
transition:0s;
opacity:0.5;
cursor:pointer
}
`

const Searchbtn = styled.button`
border:none;
background-color:black;
color:white;
&:hover{
transition:0s;
cursor:pointer;
}
`
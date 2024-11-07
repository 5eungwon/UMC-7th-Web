import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Signup = ()=>{
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다').required('반드시 입력해주세요'),
        password1: yup.string().min(8,'비밀번호는 8자 이상이어야 합니다').max(16,'비밀번호는 16자 이하이어야 합니다.').required('반드시 입력해주세요'),
        password2: yup.string().min(8,'비밀번호는 8자 이상이어야 합니다').max(16,'비밀번호는 16자 이하이어야 합니다.').required('반드시 입력해주세요').oneOf([yup.ref('password1')],'비밀번호가 일치하지 않습니다.'),
    })

    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data)=>{
        console.log(data)
        axios.post('http://localhost:3000/auth/register',{
            email: data.email,
            password : data.password1,
            passwordCheck : data.password2
        })
        .then((datas)=>{
            console.log(datas)
            alert("회원가입이 완료되었습니다.")
            navigate('/login')
        })
        .catch((err)=>{
            console.error(err);
            alert("회원가입 실패")

        })}
    return <>
        <Container>
            <Logincontainer onSubmit={handleSubmit(onSubmit)}>
                <div style={{width:"100%",height:"30%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Homepagebtn>YONGCHA</Homepagebtn>
                </div>
               <Inputcontainer>
                    <div style={{width :"100%",height:"50%",float:"left",display:"flex",justifyContent:"center"}}>
                        <input type={"email"} {...register("email")} style={{height:"70%",width:"80%"}} placeholder="이메일을 입력하세요"/><br/>
                    </div>
                    <div  style={{width :"100%",height:"50%",color:"red",display:"flex",justifyContent:"center"}}>
                    {errors.email?.message}
                    </div>
               </Inputcontainer>
               <Inputcontainer>
               <div style={{width :"100%",height:"50%",float:"left",display:"flex",justifyContent:"center"}}>
                        <input type={"password"} {...register("password1")} style={{height:"70%",width:"80%"}} placeholder="비밀번호를 입력하세요"/><br/>
                    </div>
                    <div  style={{width :"100%",height:"50%",color:"red",display:"flex",justifyContent:"center"}}>
                    {errors.password1?.message}
                    </div>
               </Inputcontainer>
               <Inputcontainer>
               <div style={{width :"100%",height:"50%",float:"left",display:"flex",justifyContent:"center"}}>
                        <input type={"password"} {...register("password2")} style={{height:"70%",width:"80%"}} placeholder="비밀번호 확인"/><br/>
                    </div>
                    <div  style={{width :"100%",height:"50%",color:"red",display:"flex",justifyContent:"center"}}>
                    {errors.password2?.message}
                    </div>
               </Inputcontainer>
               <Buttoncontainer>
                    <Loginbutton type="submit">회원가입</Loginbutton>
               </Buttoncontainer>
            </Logincontainer>
        </Container>
    </>
}

export default Signup

const Container = styled.div`
width:100%;
height:100%;
display:flex;
align-items : center;
justify-content:center;
`

const Logincontainer =styled.form`
width:30%;
height:80%;
display:flex;
flex-direction:column;
border : solid 2px grey;
border-radius:4%;
color:white;
overflow:hidden;
`

const Inputcontainer = styled.div`
width:100%;
height:15%;
`

const Buttoncontainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:grey;
width:100%;
height:25%;
`
const Homepagebtn = styled.button`
border:none;
background-color:black;
color:deepPink;
font-weight:bold;
font-size:35px;
&:hover{
transition:0s;
opacity:0.5;
cursor:pointer
}
`

const Loginbutton = styled.button`
width:40%;
height:40%;
font-size:large;
border-radius:3%;
border:none;
&:hover{
transition:0s;
opacity : 0.6;
cursor:pointer;
}
`
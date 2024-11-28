import { useDispatch, useSelector } from "react-redux"

import { increment,decrement,reset,totalcalculate } from "../redux/store"
import cartItems from "../redux/store.js"
import styled from "styled-components"
import './App.css'
import Listcard from "./Listcard.jsx"
import { useEffect ,useState} from "react"
import Modal from "./Modal.jsx"

export const CartIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/500/svg'
      className='h-6 w-6 '
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      width={40}
      height={40}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
      />
    </svg>
  );
};

const App = ()=>{

  const count = useSelector((state)=>state.counter.amount)
  const change = useDispatch();
  const cartItems = useSelector((state)=>state.counter.cartItems)
  const total = useSelector((state)=>state.counter.total)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(()=>{
    if(total === 0){
      change(totalcalculate())
    }
  },[])

  return <>
    <Navbar>
      <Navcontainer>
        <div style={{width:"80%",height:"100%",display:"flex",alignItems:"center",fontSize:"large",float:"left",color:"white"}}>UMC-PlayList</div>
        <div style={{width:"20%",height:"100%",float:"left",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CartIcon></CartIcon>
          {count}
        </div>
      </Navcontainer>
    </Navbar>
    <Middlebar>당신이 선택한 음반</Middlebar>
    <Container>
      <Container2>
        {cartItems.map((v)=>{
          return<Listcard key ={v.id} {...v}/>
        })}
      </Container2>
    </Container>
    <Downbar>
      <div style={{width:"25%",height:"100%",float:"left"}}></div>
      <div style={{width:"25%",height:"100%",float:"left",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button onClick={()=>{openModal}} style={{border:"none",backgroundColor:"lightblue",color:"red"}}>
          장바구니 비우기
        </button>
        
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is a simple modal example.</p>
      </Modal>
        
        </div>
      <div style={{width:"25%",height:"100%",float:"left",display:"flex",justifyContent:"center",alignItems:"center"}}>
        총합: {total}\</div>
      
    </Downbar>
  </>
}



export default App

const Navbar = styled.nav`
width:100%;
height:10%;
background-color:lightblue;
`

const Navcontainer = styled.div`
margin-left:25%;
width:50%;
height:100%;

`
const Downbar = styled.div`
background-color:lightblue;
width:100%;
height:10%;

`
const Middlebar = styled.div`
width:100%;
height:10%;
display : flex;
align-items:center;
justify-content:center;
font-style:bold;
font-size:large;
`
const Container = styled.div`
width:100%;
height:70%;
display : flex;

justify-content:center;
`

const Container2 = styled.div`
width:50%;
height:95%;
background-color:lightblue;
border-radius:3%;
overflow:auto;
`
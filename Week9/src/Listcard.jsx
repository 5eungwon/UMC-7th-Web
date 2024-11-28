import styled from "styled-components"
import { useDispatch } from "react-redux";
import { increment,decrement,reset } from "../redux/store";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const Listcard =({id,title,singer,price,img,amount})=>{


    const change = useDispatch();
   
    if(!amount){
        return <></>
    }

    return<Container>
        <Imgcontainer>
            <img src={`${img}`} alt="" style={{objectFit:"cover", width:"100%",height:"100%"}}/>
        </Imgcontainer>
        <Othercontainer>
            {title}   |   {singer}<br></br>\{price}
        </Othercontainer>
        <Othercontainer2>
            <Buttoncontainer>
            <button onClick={()=>change(increment(id))} style={{background:"none",border:"none"}}>
                <FaAngleUp></FaAngleUp>
            </button>
            </Buttoncontainer>
            <Buttoncontainer>
                {amount}
            </Buttoncontainer>
            <Buttoncontainer>
                <button onClick={()=>change(decrement(id))} style={{background:"none",border:"none"}}>
                    <FaAngleDown></FaAngleDown>
                </button>
            </Buttoncontainer>
        </Othercontainer2>
    </Container>
}

const Container = styled.div`
margin-top:1%;
width:100%;
height:20%;
`

const Imgcontainer = styled.div`
width:20%;
height:100%;
float:left;
background-color:red;
`

const Othercontainer = styled.div`
margin-left:2%;
display:flex;
align-items:center;
width:68%;
height:100%;
float:left;
`
const Othercontainer2 = styled.div`
width:10%;
height:100%;
float:left;
`

const Buttoncontainer = styled.div`
width:100%;
height:33%;
display:grid;
justify-content:center;
`

export default Listcard
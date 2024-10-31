import styled from "styled-components"


const Crewprofile = ({value})=>{
    console.log(value)
    return <Container>
        <ImgContainer>
            <img style={{width:"80%",height:"80%",borderRadius:"100%",}}  src={`${import.meta.env.VITE_IMAGE_URL}w1280${value?.profile_path}`}></img>
        </ImgContainer>
        <div style={{fontWeight:"bold"}}>{value.name}<br/>{`(${value.known_for_department})`}</div>

    </Container>
}

export default Crewprofile

const Container = styled.div`
text-align:center;
width:100%;
height:100%;
color:white;
font-size:14px;
font-style:bold
display:flex;
justify-content:center;
`

const ImgContainer = styled.div`
width:100%;
height:80%;
display:flex;
align-items:center;
justify-content:center;
`
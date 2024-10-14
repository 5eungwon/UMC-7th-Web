import styled from "styled-components";


function Categories(){
    const img1 = "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/LKZZE3IOE32G6SGRWSUFMIXZXQ.jpg"
    const img2 ="https://i.namu.wiki/i/Xd3-3VZjvuiBM2j33vSu2v9kbVXFdcJm2amOKiHRlqhIQuufs5yOxxeZ2USg1dkUF0tvqMFzm6CIRXYyLvPiNw.webp"
    const img3 ="https://i.ytimg.com/vi/bNJW113tbKk/maxresdefault.jpg"
    const img4 ="https://sojoong.joins.com/wp-content/uploads/sites/4/2022/11/1987-tile.jpg"
    return <CatePage>
        <Catebox>
            <Imgbox>
                <a href="/movies/now-playing">
                <img src={img1} alt="" style={{width:"100%",height:"100%", borderRadius:"4%"}}/>
                </a>
                <Textbox>현재 상영중인</Textbox>
            </Imgbox>
        </Catebox>
        <Catebox>
            <Imgbox>
            <a href="/movies/popular">
                <img src={img2} alt="" style={{width:"100%",height:"100%", borderRadius:"4%"}}/>
                </a>
                <Textbox>인기있는</Textbox>
            </Imgbox>
        </Catebox>
        <Catebox>
            <Imgbox>
                <a href="/movies/top-rated">
                <img src={img3} alt="" style={{width:"100%",height:"100%", borderRadius:"4%"}}/>
                </a>
                <Textbox>높은 평가를 받은</Textbox>
            </Imgbox>
        </Catebox>
        <Catebox>
            <Imgbox>
                <a href="/movies/up-coming">
                <img src={img4} alt="" style={{width:"100%",height:"100%", borderRadius:"4%"}}/>
                </a>
                <Textbox>개봉 예정</Textbox>
            </Imgbox>
        </Catebox>
    </CatePage>
}

export default Categories;

const CatePage = styled.div`
width:100%;
height :50%;
display:grid;
grid-template-columns: repeat(4,1fr);
`

const Catebox = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Imgbox = styled.div`
position:relative;
width:80%;
height:50%;
`

const Textbox = styled.div`
  position: absolute; /* 부모 요소(Imgbox)를 기준으로 위치 설정 */
  top: 85%; /* 세로 중앙 */
  left: 25%; /* 가로 중앙 */
  transform: translate(-50%, -50%); /* 정확히 중앙으로 이동 */
  color: white; /* 텍스트 색상 */
  background-color: rgba(0, 0, 0, 0.5); /* 검정색 반투명 배경 */
  padding: 10px; /* 텍스트 주위 여백 */
  border-radius: 4px; /* 텍스트 박스의 모서리를 둥글게 */
  font-weight: bold; /* 텍스트 굵게 */
  font-size:medium;
`;
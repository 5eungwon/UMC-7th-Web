
import './App.css'
import './mocks/movies.js'
import { MOVIES } from './mocks/movies.js'
function App() {
 return <>
 <div class ="container">
 {MOVIES.results.map((v,i)=>{
  return <img src={`https://image.tmdb.org/t/p/w200${v.poster_path}`} alt="" className='img'/>
 })}
 </div>
 </>
}

export default App

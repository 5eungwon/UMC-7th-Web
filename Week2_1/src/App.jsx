import './App.css'
import { useState } from 'react'
import './component/changeButton.jsx'
import ChangeButton from './component/changeButton.jsx'

function App() {

  const [todoList,addlist] = useState([])
  const [inputvalue, changevalue] = useState("")
  const inputChange = (e)=>{
    changevalue(e.target.value)
  }

  const add =(e)=>{
    e.preventDefault();

    if(inputvalue == ""){
      return;
    }
    addlist(prev =>[...prev,inputvalue])
    changevalue("")
  }

  return (
    
    <>
     <div className = "container">
     <br />
      <br />
      TodoList
      <br />
      <br />
      <form onSubmit={add} style={{height : "100%"}}>
        <input type="text" 
        className='inputtext' 
        placeholder='해야 할 일을 입력해주세요' 
        value={inputvalue}
        onChange={inputChange}
        />
        <button style={{height : "20%"}}>입력</button>
      </form>
     </div>
     <br />
     <div className='container2'>
      
     {todoList.map((v,i)=>{
       
       return <div key={i} style={{textAlign:"left"}}>
         <ChangeButton  value ={v} todoList={todoList} addlist = {addlist}/> 
         
       </div>
     }
           
    
        )}
      

     </div>
    </>
     
    
  )
}

export default App

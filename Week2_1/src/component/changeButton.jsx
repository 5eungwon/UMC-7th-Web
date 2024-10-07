import { useState } from "react"

function ChangeButton({value,todoList,addlist}){
    const [state , changestate] = useState(0)
    const [listValue,changeValue] = useState(value)

    const deleteList = (v)=>{
        const newarr = todoList.filter((item)=>{return  item !== v})
        addlist(newarr)
        // for(let j =0;j<todoList.length;j++){
        //     if(v == todoList[j]){
        //         addlist(todoList.splice(j,1,listValue));
        //         break;
        //     }
        // }

    }

    const changetext =(e)=>{
        changeValue(e.target.value)
    }

   if(state == 0){
    return <>
     <div style={{width:"60%",float:"left"}}>
    <li>{value}</li>
    </div>
    <div style={{width:"20%",float:"left",textAlign:"center"}}>
    <button onClick={()=>{changestate(1)}}>수정하기</button>
    
    </div>
    <div style={{width:"20%",float:"left",textAlign:"center"}}>
            <button onClick={()=>{deleteList(value)}}>삭제하기</button>
         </div>
    </>
   }
   else{
    return <>
    <div style={{width:"60%",float:"left"}}>
    <input type="text" name="" id="" style={{float:"left",width:"100%"}} onChange={changetext}/>
    </div>
    <div style={{width:"40%",float:"left",textAlign:"center"}}>
    <button onClick={()=>{
        const newarr = todoList.map((item)=>value === item ? listValue : item)
        addlist(newarr)
        changestate(0);

    }}>수정완료</button>
    </div>
  
    </>
   }
}

export default ChangeButton
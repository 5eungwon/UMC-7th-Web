
let toDoList = []
let doneList = []
const inputbox = document.querySelector("#inputbox")
const todoTable = document.querySelector("#todo")
const doneTable = document.querySelector("#done")


inputbox.addEventListener("change",()=>{
    const newthing  = maketodolist(inputbox.value)
    toDoList.push(newthing)
    todoTable.innerHTML = ""
    for(i=0;i<toDoList.length;i++){
        todoTable.append(toDoList[i])
    }
    inputbox.value = ""
})


function maketodolist(value){
    const aa = document.createElement("div")
    aa.style.width = "100%";
    const bb = document.createElement("li")
    bb.style.width = "80%"
    bb.textContent = value
    bb.style.float = "left"
    const cc = document.createElement("button")
    cc.addEventListener("click",()=>{
        index = 0
        for(i=0;i<toDoList.length;i++){
            if(bb.textContent == toDoList[i].firstElementChild.textContent){
                const newthing2 = makedonelist(toDoList[i])
                doneList.push(newthing2)
                doneTable.innerHTML = ""
                for(j=0;j<doneList.length;j++){
                    doneTable.append(doneList[j])
                }
                index = i
                
                break;
            }
        }
        toDoList.splice(index,1)
        todoTable.innerHTML = ""
        for(i=0;i<toDoList.length;i++){
            todoTable.append(toDoList[i])
        }


    })
    cc.style.width = "20%"
    cc.textContent = "완료"
    aa.append(bb)
    aa.append(cc)
    return aa
}

function makedonelist(value){
    const aa = document.createElement("div")
    aa.style.width = "100%";
    const bb = document.createElement("li")
    bb.style.width = "80%"
    bb.textContent = value.firstElementChild.textContent
    bb.style.float = "left"
    const cc = document.createElement("button")
    cc.addEventListener("click",()=>{
        index = 0
        for(i=0;i<doneList.length;i++){
            if(bb.textContent == doneList[i].firstElementChild.textContent){
                index = i
                break;
            }
        }
        doneList.splice(index,1)
        doneTable.innerHTML = ""
        for(i=0;i<doneList.length;i++){
            doneTable.append(doneList[i])
        }
    })
    cc.style.width = "20%"
    cc.textContent = "삭제"
    aa.append(bb)
    aa.append(cc)
    return aa

}




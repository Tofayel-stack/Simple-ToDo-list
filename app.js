// take a real time Date //
let date = document.querySelector("#date");
let realTime = new Date().toDateString();

function myfun() {
    date.innerHTML = realTime
}
myfun();


// select all element//
let taskInput = document.querySelector("#taskInput");
let plusTask = document.querySelector("#plusTask");
let list = document.querySelector(".allListToDo");
                           
function taskFun() {
    plusTask.addEventListener("click", () => {

        if ((taskInput.value) == "") {
            taskInput.setAttribute("placeholder", "write something must !!!")
            taskInput.classList.add("borderRed")
            return false
        } else {
            taskInput.classList.remove("borderRed")
            let inputValue = taskInput.value

            
            // list er modde input gula push kora //

            list.innerHTML += ` <div>
                            <span>${inputValue} </span>
                            <b>
                                <i class="far fa-check-circle done"></i>
                                <i class="fas fa-trash-alt delete"></i>
                            </b>
                            </div>`

            // make input box blank & focus after click //
            taskInput.value = ""
            taskInput.focus()


        }
    })

}
taskFun();


// remove and complete Todo list//
list.addEventListener("click",(event)=>{
    if(event.target.classList.contains("done")){
       event.target.parentElement.parentElement.classList.toggle("doneKey")
    }
    if(event.target.classList.contains("delete")){
        event.target.parentElement.parentElement.remove()
    }

})








//active enterButton//

taskInput.addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
        
//just copy the old code //
        if ((taskInput.value) == "") {
            taskInput.setAttribute("placeholder", "write something must !!!")
            taskInput.classList.add("borderRed")
            return false
        } else {
            taskInput.classList.remove("borderRed")
            let inputValue = taskInput.value
           list.innerHTML += ` <div>
                            <span>${inputValue} </span>
                            <b>
                                <i class="far fa-check-circle done"></i>
                                <i class="fas fa-trash-alt delete"></i>
                            </b>
                            </div>`
           taskInput.value = ""
            taskInput.focus()

        }

    }
})




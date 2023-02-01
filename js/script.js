const todoInput = document.querySelector("#field")
const addTodo = document.querySelector("#btn1")
const todoList = document.querySelector("#list")
const message = document.querySelector(".message")

todoInput.onkeyup = () => {
    message.innerHTML = todoInput.value.length; 
    if (todoInput.value.length === 18){
        message.style.color = "red";
        todoInput.maxLength = 18;
    } else if (todoInput.value.length < 18){
        message.style.color = "black"
    } 
}



addTodo.onclick = () => {
    if(todoInput.value.trim() === ""){
        const li2 = document.createElement("li");
        li2.innerHTML = "Please type something in the field";
        setTimeout( ()  => {
            li2.style.cssText = "display: none;"
        } , 2000) ;
        todoList.appendChild(li2);
    } else {
        const li = document.createElement("li")
    li.innerHTML = `${todoInput.value} <button>Done</button>`;
    
    li.onclick = (event) => {
        event.currentTarget.style.color = "red";
        li.classList.toggle("done");
        
    };
    todoList.appendChild(li);
};
    }
    

    
    
/*listItems.forEach((li) => {
    li.onclick = () => {
        li.classList.toggle("done")
    }
})*/

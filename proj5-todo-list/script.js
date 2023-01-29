// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const alertDiv = document.querySelector(".alert-div") 

// Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



// Functions

function addTodo(event){
    // PREVENT form TO REFREH PAGE
    event.preventDefault();

    // todo DIV
    const todoDiv = document.createElement("div");

    //CHECK INPUT FIELD EMPTY OR NOT
    if(todoInput.value === ''){
        alertDiv.classList.add("active");
        // const alertMsg = document.createTextNode("You must write something!");
        // alertDiv.appendChild(alertMsg);
        return false;
    } else{
        alertDiv.classList.remove("active");
        todoDiv.classList.add("todo");
    }

    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    
    // CLEAR TODO INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;

    // TODO DELETE
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // ANIMATION
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    // CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



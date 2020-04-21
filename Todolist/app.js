
// Selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


// Event Listeners

todoButton.addEventListener('click', addTodo)



//Functions

function addTodo(event) {
    //PREVENT FORM FROM SUBMITTING BY DEFAULT

    event.preventDefault();

    //Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");    
     // create Li
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     // append to div
     todoDiv.appendChild(newTodo)

     //CREATE CHECK MARK BUTTON

     const completedButton = document.createElement('button');
     completedButton.innerHTML = ' <i class="fas fa-check"></i>';
     completedButton.classList.add('complete-btn')

     todoDiv.appendChild(completedButton);

    //CREATE TRASH BUTTON

     const trashButton = document.createElement('button');
     trashButton.innerHTML = ' <i class="fas fa-trash"></i>';
     completedButton.classList.add('trash-btn')

     todoDiv.appendChild(trashButton);


     //APPEND TO THE LIST

     todoList.appendChild(todoDiv)


     todoInput.value = "";

    console.log(todoDiv);
    
}



{/* <div class="todo">
<li></li>
<button>Delete</button>
<button>Checked</button>
</div> */}
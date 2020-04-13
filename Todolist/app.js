
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
    console.log("Hello bro!");
    
}
"use strict";

const todoThing = document.querySelector(".todoThingText");
const addButton = document.querySelector(".addButton");
const todoList = document.getElementById("contentsList");
const todoDate = document.querySelector('input[type="date"]');
const clearButton = document.querySelector('.clearButton');

//Event Listener
document.addEventListener("DOMContentLoaded", function() {
  setToday();
});
addButton.addEventListener("click", addButtonClick);
clearButton.addEventListener("click", clearTodoList);

//Function
// add todo task
function addButtonClick() {
  var input_message = todoThing.value;

  if(input_message){
    var newTodo = document.createElement("li");
    newTodo.classList.add("newTodoList");

    var checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.addEventListener("click", checkTodo);
    checkBox.classList.add("todoCheckBox", "mr-2");

    var doneDate = document.createElement("label");
    doneDate.innerText = todoDate.value;
    doneDate.classList.add("deadLineDate", "mr-2");
 
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="far fa-trash-alt fa-fw"></i>';
    deleteButton.addEventListener("click", deleteTodo);
    deleteButton.classList.add("todoDeleteButton","btn", "btn-primary");

    //add li element
    newTodo.classList.add('list-group-item');
    newTodo.textContent = input_message;
    newTodo.prepend(checkBox);
    newTodo.append(doneDate);
    newTodo.append(deleteButton);
    
    
    todoList.appendChild(newTodo);
    //init input 
    todoThing.value = "";
    setToday();
  }
  else{
    alert("You should input some text!");
  }
}

// delete todo
function deleteTodo(e){
  const targetTask = e.currentTarget.parentElement;
  todoList.removeChild(targetTask);
};

// check todo
function checkTodo(e){
  const targetTask = e.currentTarget.parentElement;

   //click the checkcox, arrange the character 
  if(targetTask.style.textDecoration == "line-through"){
    targetTask.style.textDecoration = "none";
  }else{
    targetTask.style.textDecoration = "line-through";
  }
};

// set today
function setToday(){
  var date = new Date();
        var yyyy = date.getFullYear();
        var mm = ("0"+(date.getMonth()+1)).slice(-2);
        var dd = ("0"+date.getDate()).slice(-2);
  document.querySelector('input[type="date"]').value=yyyy+'-'+mm+'-'+dd;
}

// clear todoList
function clearTodoList(){
  while(todoList.lastChild){
    todoList.removeChild(todoList.lastChild);
  }
}
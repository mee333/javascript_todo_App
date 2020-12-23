"use strict";

const todoThing = document.querySelector(".todoThingText");
const addButton = document.querySelector(".addButton");
const todoList = document.getElementById("contentsList");

//Event Listener
addButton.addEventListener("click", addButtonClick);

//Function
function addButtonClick() {
  var input_message = todoThing.value;

  if(input_message){
    var newTodo = document.createElement("li");

    var checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.addEventListener("click", checkTodo);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", deleteTodo);

    //add li element
    newTodo.textContent = input_message;
    newTodo.prepend(checkBox);
    newTodo.append(deleteButton);

    todoList.appendChild(newTodo);
    //Clear input text
    todoThing.value = "";
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

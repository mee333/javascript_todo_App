'use strict';

class TodoThing {
  constructor(todo, date, checkFlag) {
    this.todo = todo;
    this.date = date;
    this.checkFlag = checkFlag;
  }

  // Method
}

function click1() {
  var input_message = document.getElementById("todoThings").value;
  if(input_message){
    var li = document.createElement('li');
    var checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');

    checkBox.onclick = function() {
      //click the checkcox, arrange the character 
      if(li.style.textDecoration == "line-through"){
        li.style.textDecoration = "none";
      }else{
        li.style.textDecoration = "line-through";
      }
    };

    var deleteButton = document.createElement('input');
    deleteButton.setAttribute('value', "delete");
    deleteButton.setAttribute('type', 'button')

    //delete the task
    deleteButton.onclick = function(){
        const targetTask = deleteButton.closest('li');
        let targetList = document.getElementById('contentsList');
        targetList.removeChild(targetTask);
    };

    //add li element
    li.textContent = input_message;
    li.prepend(checkBox);
    li.append(deleteButton);
    
    document.getElementById('contentsList').appendChild(li);
  }
  else{
    alert('空文字です');
  }
}

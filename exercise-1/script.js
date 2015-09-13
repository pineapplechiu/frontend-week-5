var todoInput = document.querySelector('.todo-input');
var todoList = document.querySelector('.todo-list');

var makeTodoItem = function(e) {
  var key = e.which || e.keyCode;
  var li, checkbox, text;
  if (key === 13) {
    // create the list item
    li = document.createElement('li');
    // store input text into variable text
    text = document.createTextNode(this.value);
    // create checkbox
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // put text and checkbox inside list item
    li.appendChild(checkbox);
    li.appendChild(text);
    // add list item to list
    todoList.appendChild(li);
  }

}

// add event listener on input
todoInput.addEventListener('keyup', makeTodoItem);

var todoInput = document.querySelector('.todo-input');
var todoList = document.querySelector('.todo-list');

var makeTodoItem = function(e) {
  var key = e.which || e.keyCode;
  var li, checkbox, text, label;
  if (key === 13) {
    // create the list item
    li = document.createElement('li');
    // assign li unique id
    li.id = Date.now();
    // create clickable label element
    label = document.createElement('label');
    // store input text into variable text
    text = document.createTextNode(this.value);
    // create checkbox
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // put text and checkbox inside label
    label.appendChild(checkbox);
    label.appendChild(text);
    // put label inside list item
    li.appendChild(label);
    // add list item to list
    todoList.appendChild(li);
    // reset text box to empty string
    this.value = '';
  }
}

// add event listener on input
todoInput.addEventListener('keyup', makeTodoItem);
todoList.addEventListener('click', function(e) {
  console.log(e.target)
});
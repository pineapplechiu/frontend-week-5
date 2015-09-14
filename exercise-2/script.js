var todoInput = document.querySelector('.todo-input');
var todoList = document.querySelector('.todo-list');

function makeTodoItem(e) {
  var key = e.which || e.keyCode;
  var li, checkbox, text, label, button, id;
  if (key === 13) {
    // store id
    id = 'item-' + Date.now();
    // create the list item
    li = document.createElement('li');
    // assign li unique id
    li.id = id;
    // create clickable label element
    label = document.createElement('label');
    // store input text into variable text
    text = document.createTextNode(this.value);
    // create checkbox
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // create button for item removal
    button = document.createElement('button');
    button.dataset.remove = id;
    button.textContent = 'X';
    // put text and checkbox inside label
    label.appendChild(checkbox);
    label.appendChild(text);
    // put label inside list item
    li.appendChild(label);
    li.appendChild(button);
    // add list item to list
    todoList.appendChild(li);
    // reset text box to empty string
    this.value = '';
  }
}

function handleTodoItem(e) {
  var label, idToRemove;

  if (e.target.nodeName === 'INPUT') { // handle marking and unmarking done
    label = e.target.parentNode;
    label.classList.toggle('done');
  } else if (e.target.nodeName === 'BUTTON') { // handle deleting todo item
    idToRemove = e.target.dataset.remove; 
    document.querySelector('#' + idToRemove).remove();
  }
}

// add event listener on input
todoInput.addEventListener('keyup', makeTodoItem);
// add event listener to todo list
todoList.addEventListener('click', handleTodoItem);

// add event listener todo filters

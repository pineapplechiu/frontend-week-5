var todoInput = document.querySelector('.todo-input');
var todoList = document.querySelector('.todo-list');
var todoFilters = document.querySelector('.todo-filters');
var todoData = [];

// checks for enter, then creates HTML list item 
function makeTodoItem(e) { 
  var key = e.which || e.keyCode;
  var li, checkbox, text, label, span, id;
  text = this.value.trim();

  if (key === 13 && text !== '') {
    createTodoItem(todoList, text)

    this.value = ''; // reset text box to empty string
  }
}

function handleTodoItem(e) {
  var li, idToRemove;

  if (e.target.nodeName === 'INPUT') { // handle marking and unmarking done
    li = e.target.parentNode.parentNode; // parent of the input is the label, parent of label is the list item 
    li.classList.toggle('done'); // if it is not done, add class done. if done, remove done.
  } else if (e.target.nodeName === 'SPAN') { // handle deleting todo item
    idToRemove = e.target.dataset.remove; 
    document.querySelector('#' + idToRemove).remove(); // look for list item id, then remove
  }
}

function filterTodoItems(e) {
  var filter = e.target.dataset.filter;
  var allItems = todoList.querySelectorAll('li');
  var filteredItems; 

  if (filter === 'done') { // show done only
    showAllTodoItems(allItems);    
    filteredItems = todoList.querySelectorAll('li:not(.done)');
    hideTodoItems(filteredItems);
  } else if (filter === 'not-done') { // show not done only
    showAllTodoItems(allItems);
    filteredItems = todoList.querySelectorAll('li.done');
    hideTodoItems(filteredItems);
  } else if (filter === 'show-all') { // show all
    showAllTodoItems(allItems);
  }
}

function hideTodoItems(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add('hidden');
  }
}

function showAllTodoItems(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('hidden');
  }
}

function createTodoItem(todoList, todoText, todoStatus) {
  var li, checkbox, text, label, button, id;

  // store id
  id = 'item-' + Date.now(); // id cannot start with a number
  // create the list item
  li = document.createElement('li');
  // assign li unique id
  li.id = id;
  // create clickable label element
  label = document.createElement('label');
  // store input text into variable text
  text = document.createTextNode(todoText);
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

  todoData.push({
    id: id,
    text: todoText,
    status: todoStatus || 'not-done'
  });
}

function setupTodoList() {
  if (window.localStorage) {
    todoData = JSON.parse(localStorage.getItem('todoListItems'));
  }
}

// add event listener on input
todoInput.addEventListener('keyup', makeTodoItem);
// add event listener to todo list
todoList.addEventListener('click', handleTodoItem);
// add event listener for all todo filters
todoFilters.addEventListener('click', filterTodoItems);

setupTodoList();

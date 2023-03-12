const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

if(localStorage) {
  for(let item in localStorage) {
    if(item === 'todos') {
      todoList.innerHTML = localStorage.getItem(item);
    }
  }
}

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const todo = todoInput.value;
  if (todo) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todo;
    todoList.appendChild(todoItem);
    todoInput.value = '';
    localStorage.setItem('todos', todoList.innerHTML);
  }
});

const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function addTodo() {
  const todoInputElement = document.querySelector('.js-todo-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = todoInputElement.value;
  const dueDate = dateInputElement.value;
  
  
  todoList.push({ 
    name,
    dueDate
  });
  
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';
  
  
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    todoListHTML += `
    <div>${name}</div> 
    <div>${dueDate}</div> 
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
  }
  
  document.querySelector('.js-todo-display')
    .innerHTML = todoListHTML;
}


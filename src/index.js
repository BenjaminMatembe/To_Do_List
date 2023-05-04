import './style.css';
// import addList from './modules/addList.js';
// import dotsIcon from './img/dots.svg';
// import trashIcon from './img/trash.svg';
// import inputAdd from './modules/inputAdd.js';
// import refreshIcons from './img/refresh.svg';
const inputText = document.querySelector('.Text');
const addOfInput = document.getElementById('input-area');
const head = document.querySelector('.header');
const refreshBtn = document.createElement('button');
refreshBtn.textContent = 'Refresh';
// refreshIcon.classList.add('refresh-icon');
head.appendChild(refreshBtn);

const todoArray = JSON.parse(localStorage.getItem('storedTasks')) || [];

const saveDataInLocalStorage = () => {
  localStorage.setItem('storedTasks', JSON.stringify(todoArray));
};

const addToToDoList = () => {
  const todoList = document.querySelector('.listedTodos');
  todoList.innerHTML = '';
  let index = 0;
  for (let i = 0; i < todoArray.length; i += 1) {
    todoArray[i].index = i + 1;
    saveDataInLocalStorage();
  }

  const taskInArray = JSON.parse(localStorage.getItem('storedTasks'));
  for (let i = 0; i < taskInArray.length; i += 1) {
    for (let j = 0; j < taskInArray.length; j += 1) {
      if (taskInArray[j].index === i + 1) {
        index = j;
        break;
      }
    }

    const taskElementTag = document.createElement('li');
    // taskElement.id = 'list-item';
    taskElementTag.classList.add('item-element');
    todoList.appendChild(taskElementTag);

    const tasksForm = document.createElement('form');
    tasksForm.classList.add('form');
    taskElementTag.appendChild(tasksForm);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // checkbox.checked = taskArray[index].completed ? 'checked' : '';
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    tasksForm.appendChild(checkbox);

    const input = document.createElement('input');
    input.type = 'text';
    input.value = `${todoArray[index].description}`;
    input.className = 'todoText';
    // input.id = 'task-label';
    // input.style.textDecoration = taskArray[index].completed
    //   ? 'line-through'
    //   : '';
    // input.style.color = taskArray[index].completed ? 'lightgray' : '';
    tasksForm.appendChild(input);

    const buttonForDelete = document.createElement('button');
    buttonForDelete.textContent = 'delete';
    buttonForDelete.type = 'button';
    taskElementTag.appendChild(buttonForDelete);

    buttonForDelete.addEventListener('click', () => {
      todoArray.splice(i, 1);
      saveDataInLocalStorage();
      addToToDoList();
    });

    input.addEventListener('input', () => {
      todoArray[i].description = input.value;
      saveDataInLocalStorage();
    });
  }
};

const addingOfTasks = (value) => {
  const task = {
    description: value,
    completed: false,
    index: 0,
  };
  todoArray.push(task);
  saveDataInLocalStorage();
  addToToDoList();
};
const toAddInput = () => {
  const input = document.getElementById('input-area').value;
  addingOfTasks(input);
};

addOfInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addOfInput.value !== '') {
    e.preventDefault();
    toAddInput();
    inputText.value = '';
  }
});

addToToDoList();

// localStorage.removeItem('storedTasks')
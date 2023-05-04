import './style.css';

import addToToDoList from './modules/addTodoList.js';

import { todoArray, saveDataInLocalStorage } from './modules/storage.js';

const inputText = document.querySelector('.Text');

const addOfInput = document.getElementById('input-area');

const refreshBtn = document.createElement('button');

refreshBtn.textContent = 'Refresh';

const head = document.querySelector('.header');

head.appendChild(refreshBtn);

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

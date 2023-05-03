import './style.css';

const createdList = document.querySelector('.createdList');

const form = document.querySelector('form');

const getStorage = localStorage.getItem('listedItems');
const stored = JSON.parse(getStorage) || [];

const display = () => {
  createdList.innerHTML = '';
  // createdList.replaceChild();
  if (stored) {
    stored.forEach((item) => {
      createdList.innerHTML += `<li class='dynamicList'><span><input type="checkbox"/>${item.description} ${item.index}</span> <button class='deleting'>delete</button></li>`;
    });
  }
};

// const deleteTodo = (id) => {
//   stored.filter((item) => {
//     if (item.id !== id) {
//       return item;
//     }
//     // return '',
//   });
// };

// const deletingBtn = document.querySelectorAll('.deleting');
// deletingBtn.addEventListener('click', () => {
// deleteTodo();
// });

// console.log(deletingBtn);

// const show = () => {
//   if(stored){
//     console.log(deletingBtn);
//   }

// };

// show();

const addToList = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toDo = {
      description: form.addToDo.value,
      completed: false,
      index: stored.length + 1,
    };
    stored.push(toDo);
    localStorage.setItem('listedItems', JSON.stringify(stored));
    form.addToDo.value = '';
    display();
  });
};
addToList();
display();
const deletingBtn = document.querySelectorAll('.deleting');
const deleteTodo = (id) => {
  // stored.filter((item) => {
  //   if (item.id !== id) {
  //     return item;
  //   }
  //   // return '',
  // });
  // stored.filter((item) => {
  //   if (item.id !== id) {
  //     return item;
  //   }
  //   return '';
  // });
};
createdList.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON'){
    console.log('gree')
    e.target.parentElement.remove();
  }
  localStorage.setItem('listedItems', JSON.stringify(stored));
  display();
})
  
console.log(deletingBtn);
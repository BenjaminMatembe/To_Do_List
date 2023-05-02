import './style.css';
import iterate from './modules/loader.js';
// const ulList = document.querySelector('.createdList');

// const list = [
//   { description: ['wash cups', 'goods for sale', 'clean the house', 'yello yellow'] },
//   { completed: [false, false, false, false] },
//   { index: [1, 2, 3, 4] },

// ];

// const iterate = () => {
//   for (let i = 0; i < list[0].description.length; i += 1) {
//     ulList.innerHTML += `<li><input type="checkbox"/>${list[0].description[i]}</li>`;
//   }
// };

window.addEventListener('load', () => {
  iterate();
});
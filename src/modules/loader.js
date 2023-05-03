const ulList = document.querySelector('.createdList');

const list = [
  // {
  //   description: 'Washing cups',
  //   completed: false,
  //   index: 1,
  // },
  // {
  //   description: 'Utilising discussion time',
  //   completed: false,
  //   index: 2,
  // },
  // {
  //   description: 'Using program time',
  //   completed: false,
  //   index: 2,
  // },
  // {
  //   description: 'Go on zoom call',
  //   completed: false,
  //   index: 2,
  // },
];

const iterate = () => {
  for (let i = 0; i < list.length; i += 1) {
    ulList.innerHTML += `<li><input type="checkbox"/>${list[i].description}</li>`;
  }
};

export default iterate;
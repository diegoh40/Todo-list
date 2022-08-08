/* import _ from 'lodash'; */
import './style.css';
import Icon from './img/icon.jpg';
import Dots from './img/dots.jpeg';
import Arrow from './img/arrow.jpeg';

// Lodash, now imported by this script

const addimage = () => {
  const header = document.querySelector('.header');
  const myIcon = new Image();
  myIcon.src = Icon;

  header.appendChild(myIcon);
  return header;
};
addimage();

const list = [
  {
    description: 'wash dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'make the bed',
    completed: true,
    index: 2,
  },
];

const images = new Image();
images.src = Dots;

const renderList = () => {
  let showTasks = '';

  for (let i = 0; i < list.length; i += 1) {
    showTasks += `<div class="insideTask"><ul id="tasks"><li><input type ="checkbox" ${list[i].completed}></li>
   <li> ${list[i].description}</li> <li class="hidenid">${list[i].index}</li></ul>
   <img src="${Dots}"> </div>
    `;

    document.getElementById('list').innerHTML = showTasks;
  }
};

renderList();

const imgArrow = new Image();
imgArrow.src = Arrow;

const arrow = document.querySelector('.todo');
const imgNew = document.createElement('img');
arrow.appendChild(imgNew);
imgNew.setAttribute('src', Arrow);
arrow.appendChild(imgNew);







  
  















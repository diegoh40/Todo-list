import _ from 'lodash';
import './style.css';


// Lodash, now imported by this script



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


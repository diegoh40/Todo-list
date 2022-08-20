import './style.css';
import StorageL from './modules/storage.js';
import {addList, recive} from './modules/variables.js';
import {suma, addTask, localStore1, deleteTask} from './__test__/__mocks__/storage.js';

//import recive from './modules/variables.js';
addTask('prueba')
console.log(localStore1, 'mock localStore1');

// ---------ClearAllCompleted
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    e.preventDefault();
    StorageL.clearAllCompleted();
  }
});

// ---------checkStatus--------
// const hh = document.querySelector('.box')
document.addEventListener('change', (e) => {
  if (e.target.checked) {
    e.preventDefault();
    StorageL.checkStatus(e);
  } else {
    StorageL.checkStatusFalse(e);
  }
});

// ----------Edit info--------
document.addEventListener('click', (e) => {
  if (e.target.matches('.desc')) { //
    e.preventDefault();
    StorageL.selectTask(e);
  }
});

// ----------Add-----------
//const addList = document.getElementById('bk');

addList.addEventListener('submit', (e) => {
  const recive = document.getElementById('addL').value;   
  e.preventDefault();
  StorageL.addTask(recive);
  addList.reset();// clea the form
});

// ----------Remove------------

document.addEventListener('click', (e) => {
  if (e.target.matches('.fa-trash')) {
    StorageL.deleteTask(e);
  }
});

// ---------input Edit Text------------

document.addEventListener('click', (e) => { // && e.key === 13
  if (e.target.matches('.yellow')) {
    e.preventDefault();
    StorageL.editTask(e);
  }
});
 

StorageL.renderList();
import './style.css';

class StorageL {
  static storage(ok) {
    window.localStorage.setItem('list', JSON.stringify(ok));
  }

static getlist = () => {
  let list = [];
  if (window.localStorage.getItem('list') === null) {
    this.storage(list);
  }
  list = JSON.parse(window.localStorage.getItem('list'));
  return list;
}

static renderList() {
  const jj = this.getlist();
  if (jj === undefined) {
    return 'no hay tareas pendientes';
  }
  let showTasks = '';
  for (let i = 0; i < jj.length; i += 1) {
    showTasks += `<div class="insideTask" id="${i}" >
      <input class='box' type ="checkbox" ${jj[i].completed}>
      <p class='desc'> ${jj[i].description}</p>                  
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      <i class="fa fa-trash" id="${i}" aria-hidden="true"></i>     
      </div>    
      `;
    document.getElementById('list').innerHTML = showTasks;
  }
  return 1;
}

static addTask() {
  const tt = this.getlist();
  const recive = document.getElementById('addL').value;
  if (recive !== '') {
    const newTask = {
      description: recive,
      completed: true,
      index: tt.length + 1,
    };
    tt.push(newTask);
    this.storage(tt);
    this.renderList();
  }
}

static deleteTask(evento) {
  let list = this.getlist();
  let cnt = 1
  list = list.filter((el, indx) => evento.target.id !== indx.toString());
  for (let i = 0; i < list.length; i++) {
    list[i].index = cnt
     cnt++
   }
  this.storage(list);
  this.renderList();
}

static selectTask(evento) { // <input class="editex" type="text" placeholder="Edit" >
  const oo = evento.target;
  oo.parentNode.classList.toggle('yellow');
  const sibli = oo.nextElementSibling;
  sibli.nextElementSibling.style.display = 'flex';
  sibli.style.display = 'none';
  const newinput = document.createElement('input');
  newinput.setAttribute('id', 'edit');
  newinput.setAttribute('placeholder', 'edit');
  oo.appendChild(newinput);
}

static editTask(event) {
  const lS = this.getlist();
  const oo = event.target;
  const inputEdit = document.getElementById('edit').value;
  const todo = document.querySelectorAll('.insideTask');
  for (let i = 0; i < todo.length; i += 1) {
    if (todo[i].getAttribute('id') === oo.getAttribute('id')) {
      lS[i].description = inputEdit;
      this.storage(lS);
      this.renderList();
      break;
    }
  }
}
}

// ----------Edit info--------
document.addEventListener('click', (e) => {
  if (e.target.matches('.desc')) { //
    e.preventDefault();
    StorageL.selectTask(e);
  }
});

// ----------Add-----------
const addList = document.getElementById('bk');
addList.addEventListener('submit', () => {
  StorageL.addTask();
});

// ----------Remove------------

document.addEventListener('click', (e) => {
  if (e.target.matches('.fa-trash')) {
    StorageL.deleteTask(e);
  }
});

// ---------input Edit Text------------

document.addEventListener('click', (e) => {
  if (e.target.matches('.yellow')) {
    e.preventDefault();
    StorageL.editTask(e);
  }
});

StorageL.renderList();
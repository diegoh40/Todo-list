export default class StorageL {
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
    const todos = document.getElementById('list');
    todos.innerHTML = '';
    let showTasks = '';
    for (let i = 0; i < jj.length; i += 1) {
      showTasks += `<div class="insideTask" id="${i}" >
        <input class="box" type ="checkbox" />
        <p class='desc'> ${jj[i].description}</p>                  
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        <i class="fa fa-trash" id="${i}" aria-hidden="true"></i>     
        </div>    
        `;
      todos.innerHTML = showTasks;
    }
    // return 1;
  }

  static addTask() {
    const tt = this.getlist();
    const recive = document.getElementById('addL').value;
    if (recive !== '') {
      const newTask = {
        description: recive,
        completed: false,
        index: tt.length + 1,
      };
      tt.push(newTask);
      this.storage(tt);
      this.renderList();
      console.log(newTask);
      return newTask
    }


  }

  static deleteTask(evento) {
    let list = this.getlist();
    let cnt = 1;
    list = list.filter((el, indx) => evento.target.id !== indx.toString());
    for (let i = 0; i < list.length; i += 1) {
      list[i].index = cnt;
      cnt += 1;
    }
    this.storage(list);
    this.renderList();
    console.log(evento.target.id);
    return evento.target.id
  }

  static selectTask(evento) {
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

  static checkStatus(event) {
    const lS = this.getlist();
    const pp = event.target;
    const todo = document.querySelectorAll('.insideTask');
    const sub = pp.nextElementSibling;
    for (let i = 0; i < todo.length; i += 1) {
      if (todo[i].getAttribute('id') === pp.parentNode.getAttribute('id')) {
        lS[i].completed = true;
        sub.style.textDecoration = 'line-through';
      }
      this.storage(lS);
    }
  }

  static checkStatusFalse(event) {
    const lS = this.getlist();
    const pp = event.target;
    const todo = document.querySelectorAll('.insideTask');
    const sub = pp.nextElementSibling;
    for (let i = 0; i < todo.length; i += 1) {
      if (todo[i].getAttribute('id') === pp.parentNode.getAttribute('id')) {
        lS[i].completed = false;
        sub.style.textDecoration = 'none';
      }
      this.storage(lS);
    }
  }

  static clearAllCompleted() {
    const lS = this.getlist();
    const ok = lS.filter((el) => el.completed === false);
    for (let i = 0; i < ok.length; i += 1) {
      ok[i].index = i + 1;
    }
    this.storage(ok);
    this.renderList();
  }
}
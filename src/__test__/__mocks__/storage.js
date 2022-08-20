/* export function suma(a,b){ // funciona con export default
    return a+b
  } */

export let localStore1 = [];

export function addTask(value) {   
    if (value  !== '') {
      const newTask = {
        description: value,
        completed: false,
        index: localStore1.length + 1
      };
      localStore1.push(newTask);     
    }
}



export function deleteTask(index) {   
    
    localStore1 = localStore1.filter((el, indx) => index !== indx+1);
    let cnt = 1;
    for (let i = 0; i < localStore1.length; i += 1) {
      localStore1[i].index = cnt;
      cnt += 1;
    }
   
  }
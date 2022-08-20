
/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */


import {describe, expect, test} from '@jest/globals'
import {suma, addTask, localStore1, localStore2, deleteTask} from './__mocks__/storage.js';


describe('CRUD', ()=>{  
test('addt1',()=>{
    addTask('Task1')   
  expect(localStore1[0]).toEqual({
    description: 'Task1',
    completed: false,
    index: 1,
})  

})
test('addt2',()=>{
  addTask('Task2') 
  expect(localStore1[1]).toEqual({
  description: 'Task2',
  completed: false,
  index: 2,
  })  

})
test('addt3',()=>{
  addTask('Task3')  
 expect(localStore1.length).toBe(3)
 })



//-------DELETE---------
  
  test('jhj',()=>{
      deleteTask(1)   
    expect(localStore1.length).toBe(2)    
    })

    test('hjj',()=>{
      deleteTask(2)   
    expect(localStore1.length).toBe(1)    
    })
    test('hjj',()=>{
      deleteTask(1)   
    expect(localStore1.length).toBe(0)    
    })

   
 
  })


/* describe('sdsdasd', ()=>{       
  it('suma99', ()=>{
      const x = 5,
      y=6;        
  expect(suma(x,y)).toBe(11);
  });    
  it('sumt', ()=>{
      let x = 6,
          y=6;
  expect(suma(x,y)).toBe(12);
    });
}) */
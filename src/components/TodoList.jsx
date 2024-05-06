import React from 'react';


export const TodoList = ({id, task, AddTodo}) => {

    const deleteItem = (id) => {
    console.log(id);
    let items = JSON.parse(localStorage.getItem("todoItem"));//get data
    items = items.filter((item) => item.id !== id); // Use correct syntax for arrow function
    AddTodo(items); //call the AddTodo function and add items which are not same to passed id
  } 

  return (
    <div className='todo-container'>
      <div className='todo-item'>{task}</div>
      <button onClick={() => {}}><img src="src/assets/images/correct.png" alt="correct" /></button>
      <img src="src/assets/images/cross.png" alt="cross"   onClick={() => {deleteItem(id)}}  /> 
    </div>
  );

} 


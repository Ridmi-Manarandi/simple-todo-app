import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import './index.css'
import './App.css'
import { TodoList } from './components/TodoList';

let IdNumber = 0;
const App = () => {

let [todooItem,AddTodo] = useState([]);
  let userInput = useRef(null);

  function Add(){
     AddTodo([...todooItem,{id:IdNumber++,task:userInput.current.value}])//add data t the array
     userInput.current.value = "";//clear the value in input field
     localStorage.setItem("IdNumber",IdNumber)
  }

  //execute after 100ms
  useEffect(() => {//when todoItem is upsated this function will executed.
     setTimeout(() => {
      console.log(todooItem);
      localStorage.setItem("todoItem",JSON.stringify(todooItem));
     }, 100);//add todoItem to locaStorege;store valuesand convert it to string type
  },[todooItem])
  
  //execute when page reloading
  useEffect(() => {
    AddTodo(JSON.parse(localStorage.getItem("todoItem")))//get stored todoItem and convert it to json type
    IdNumber = localStorage.getItem("IdNumber")
  },[])//fetch data from ocaStrage when page is reloading

  return (
    <div>
    <div><h1>My Todo App</h1></div>
    <input ref={userInput} type="text" />
    <button onClick={() => {Add()}}>Add to Todo list</button>
    {todooItem.map((item,index)=> {
      return  <TodoList key={index} id={item.id} task={item.task} AddTodo={AddTodo}/>
     })}
    </div>

  )
}


export default App;


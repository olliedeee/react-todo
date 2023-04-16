import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todos, setTodos] = useState([])

  const todoNameRef = useRef()
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;

  }
  return (
    <>
    < TodoList todos={todos}/>
    <input ref={todoNameRef} type="test"></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>{todos.count} Todos remaining</div>
    </>
  )
}

export default App;

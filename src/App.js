import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'
import 'bootstrap/dist/css/bootstrap.css';
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo =>
      !todo.complete)
    setTodos(newTodos)
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }


  return (
      <row>
        <div class="container">
        <h1>Todo List</h1>

          <>
          <input ref={todoNameRef} type="text"/>
          <button class="btn btn-primary btn-sm m-1"
                  onClick={handleAddTodo}>Add Todo</button>
          <button class="btn btn-secondary btn-sm m-1"
                  onClick={handleClearTodos}>Clear Completed Todos</button>
          < TodoList todos={todos} toggleTodo={toggleTodo} />

            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
          </>
          </div>
      </row>
  )
}

export default App;

import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <div>
      <h1>Todos</h1>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

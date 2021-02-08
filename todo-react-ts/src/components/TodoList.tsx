import React from 'react';
import { TodoListItem } from './TodoListItem';

import './TodoList.css';

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='theList'>
      {todos.map((todo) => (
        <TodoListItem key={`${todo.id}`} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

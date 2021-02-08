import React from 'react';
import './TodoListItem.css';

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      className='theList__item'
      onClick={() => {
        deleteTodo(todo.id);
      }}>
      <label className='todo'>
        <input
          className='todo__checkbox'
          id='checkbox-style'
          type='checkbox'
          checked={todo.isDone}
          onChange={() => toggleTodo(todo)}
        />
        <label htmlFor='checkbox-style' className='checkbox-style' />
        <div className={`todo__text ${todo.isDone && 'complete'}`}>{todo.text}</div>
        <div className='todo__priority'>{todo.priority}</div>
      </label>
    </li>
  );
};

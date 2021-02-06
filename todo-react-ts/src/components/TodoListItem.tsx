import React from 'react';
import './TodoListItem.css';

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
	return (
		<li
			className='theList__item'
			onClick={() => {
				deleteTodo(todo.id);
			}}>
			<label className={`todo ${todo.isDone ? 'complete' : undefined}`}>
				<input className='todo__checkbox' type='checkbox' checked={todo.isDone} onChange={() => toggleTodo(todo)} />
				<div className='todo__text'>{todo.text}</div>
				<div className='todo__priority'>{todo.priority}</div>
			</label>
		</li>
	);
};

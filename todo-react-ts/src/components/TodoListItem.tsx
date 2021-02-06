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
				<input className='todo__checkbox' type='checkbox' checked={todo.isDone} onChange={() => toggleTodo(todo)} />
				<div className={`todo__text ${todo.isDone ? 'complete' : undefined}`}>{todo.text}</div>
				<div className='todo__priority'>{todo.priority}</div>
			</label>
		</li>
	);
};

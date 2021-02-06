import React, { ChangeEvent, FormEvent, useState } from 'react';
import './AddTodoForm.css';

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [ newTodo, setNewTodo ] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo('');
	};

	return (
		<form className='todoForm' onSubmit={handleSubmit}>
			<input
				className='todoForm__input'
				type='text'
				value={newTodo}
				onChange={handleChange}
				placeholder='Enter Task'
				required
			/>
			<button className='todoForm__btn' type='submit'>
				Add Todo
			</button>
			<select className='todoForm__select' name='priority'>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				<option value='10'>10</option>
			</select>
		</form>
	);
};

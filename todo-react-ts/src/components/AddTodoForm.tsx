import React, { useState } from 'react';
import './AddTodoForm.css';

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const initialNewTodo: NewTodo = {
    text: '',
    priority: ''
  };
  const [ newTodo, setNewTodo ] = useState(initialNewTodo);

  const setText: HandleChange = (e) => {
    const text: string = e.target.value;

    setNewTodo({
      ...newTodo,
      text
    });
  };

  const setPriority: HandleSelect = (e) => {
    const priority = Number(e.target.value);

    setNewTodo({
      ...newTodo,
      priority
    });
  };

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo(initialNewTodo);
  };

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
      <input
        className='todoForm__input'
        type='text'
        value={newTodo.text}
        onChange={setText}
        placeholder='Enter Task'
        maxLength={35}
        required
      />
      <label className='labelForSelect'>
        Priority
        <select
          id='prioritySelect'
          className='todoForm__select'
          name='priority'
          value={newTodo.priority}
          onChange={setPriority}
          required>
          <option value='' />
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
      </label>
      <button className='btn todoForm__btn' type='submit'>
        Add Todo
      </button>
    </form>
  );
};

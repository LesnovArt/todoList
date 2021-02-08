import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { initialTodos } from './shared/db';
import { TodoList } from './components/TodoList';

enum ActiveTypes {
  ALL = 'all',
  DONE = 'done',
  UNDONE = 'undone',
  FOUND = 'found'
}

const App: React.FC = () => {
  const [ todos, setTodos ] = useState(initialTodos);
  const [ activeType, setActiveType ] = useState(ActiveTypes.ALL);
  const [ query, setQuery ] = useState<string>('');

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = ({ text, priority }) => {
    setTodos([
      ...todos,
      {
        text,
        id: Number(Date.now()),
        priority,
        isDone: false
      }
    ]);
  };

  const deleteTodo: DeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const getActiveTodos: GetTodos = () => {
    switch (activeType) {
      case ActiveTypes.ALL:
        return todos;
      case ActiveTypes.DONE:
        return getCompleted();
      case ActiveTypes.UNDONE:
        return getUncompleted();
      case ActiveTypes.FOUND:
        return getFoundTodos();
      default:
        return [];
    }
  };

  const getCompleted: GetTodos = () => {
    const completedTodos = todos.filter(({ isDone }) => isDone);
    return completedTodos;
  };

  const getUncompleted: GetTodos = () => {
    const unCompletedTodos = todos.filter(({ isDone }) => !isDone);
    return unCompletedTodos;
  };

  const getFoundTodos: GetTodos = () => {
    let foundString = query;
    let searchedArray: Array<Todo> = [];
    if (foundString.length > 0) {
      searchedArray = todos.filter((todo) => {
        foundString.toLowerCase();
        return todo.text.toLowerCase().includes(foundString);
      });
    } else {
      setActiveType(ActiveTypes.ALL);
    }
    return searchedArray;
  };

  const handleChange: HandleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 3) {
      setActiveType(ActiveTypes.FOUND);
    }
  };

  return (
    <div className='todoListMain'>
      <div className='header'>
        <AddTodoForm addTodo={addTodo} />
        <form>
          <input
            className='todoForm__input'
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Search Task...'
            maxLength={35}
            required
          />
          <button className='btn ' onClick={() => setActiveType(ActiveTypes.ALL)}>
            Date
          </button>
          <button className='btn ' onClick={() => setActiveType(ActiveTypes.ALL)}>
            Priority
          </button>
          <button className='btn ' onClick={() => setActiveType(ActiveTypes.ALL)}>
            ABCDF
          </button>
        </form>
      </div>
      <div className='section'>
        <TodoList todos={getActiveTodos()} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
      <div className='btn-wrapper'>
        <button className='btn nav-btn' onClick={() => setActiveType(ActiveTypes.ALL)}>
          All
        </button>
        <button className='btn nav-btn' onClick={() => setActiveType(ActiveTypes.DONE)}>
          Done
        </button>
        <button className='btn nav-btn' onClick={() => setActiveType(ActiveTypes.UNDONE)}>
          Undone
        </button>
      </div>
    </div>
  );
};

export default App;

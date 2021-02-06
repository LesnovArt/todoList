import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { initialTodos } from './shared/db';
import { TodoList } from './components/TodoList';

enum ActiveTypes {
	ALL = 'all',
	DONE = 'done',
	UNDONE = 'undone'
}

const App: React.FC = () => {
	const [ todos, setTodos ] = useState(initialTodos);
	const [ activeType, setActiveType ] = useState(ActiveTypes.ALL);

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

	const addTodo: AddTodo = (newTodo) => {
		setTodos([
			...todos,
			{
				text: newTodo.text,
				id: Number(Date.now()),
				priority: newTodo.priority,
				isDone: false
			}
		]);
	};

	const deleteTodo: DeleteTodo = (id) => {
		const filteredTodos = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(filteredTodos);
	};

	const getActiveTodos = (): Array<Todo> => {
		switch (activeType) {
			case ActiveTypes.ALL:
				return todos;
			case ActiveTypes.DONE:
				return getCompleted();
			case ActiveTypes.UNDONE:
				return getUncompleted();
			default:
				return [];
		}
	};
	const getCompleted = (): Array<Todo> => {
		const completedTodos = todos.filter((todo) => {
			return todo.isDone;
		});
		return completedTodos;
	};

	const getUncompleted = (): Array<Todo> => {
		const unCompletedTodos = todos.filter((todo) => {
			return !todo.isDone;
		});
		return unCompletedTodos;
	};

	return (
		<div className='todoListMain'>
			<div className='header'>
				<AddTodoForm addTodo={addTodo} />
			</div>
			<TodoList todos={getActiveTodos()} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
			<div className='btn-wrapper'>
				<button className='nav-btn' onClick={() => setActiveType(ActiveTypes.ALL)}>
					all
				</button>
				<button className='nav-btn' onClick={() => setActiveType(ActiveTypes.DONE)}>
					done
				</button>
				<button className='nav-btn' onClick={() => setActiveType(ActiveTypes.UNDONE)}>
					undone
				</button>
			</div>
		</div>
	);
};

export default App;

import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { initialTodos } from './shared/db';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
	const [ todos, setTodos ] = useState(initialTodos);

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
				text: newTodo,
				id: Number(Date.now()),
				priority: 5,
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

	const showComplete = (): void => {
		const doneTodos = todos.filter((todo) => {
			return todo.isDone;
		});
		setTodos(doneTodos);
	};
	// const showDone = (): void => {
	// 	const doneTodos = todos.filter((todo) => {
	// 		return !todo.isDone;
	// 	});
	// 	setTodos(doneTodos);
	// };
	// const showAll = (): void => {
	// 	setTodos(todos);
	// };

	return (
		<div className='todoListMain'>
			<div className='header'>
				<AddTodoForm addTodo={addTodo} />
			</div>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
			<button>all</button>
			<button onClick={showComplete}>done</button>
			<button>undone</button>
		</div>
	);
};

export default App;

type Todo = {
	text: string;
	id: number;
	priority: number;
	isDone: boolean;
};

type NewTodo = {
	text: string;
	priority: number;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: NewTodo) => void;
type DeleteTodo = (id: number) => void;

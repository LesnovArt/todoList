type Todo = {
  text: string;
  id: number;
  priority: number | string;
  isDone: boolean;
};

type NewTodo = {
  text: string;
  priority: number | string;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: NewTodo) => void;
type DeleteTodo = (id: number) => void;
type HandleSubmit = (e: FormEvent<HTMLFormElement>) => void;
type HandleChange = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleSelect = (e: ChangeEvent<HTMLSelectElement>) => void;
type GetTodos = () => Array<Todo>;

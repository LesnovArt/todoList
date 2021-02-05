type Todo = {
  text: string;
  id: number;
  priority: number;
  isDone: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
type DeleteTodo = (id: number) => void;

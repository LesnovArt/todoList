interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

interface AddTodoFormProps {
  addTodo: AddTodo;
}

type Todo = {
  text: string;
  isDone: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;

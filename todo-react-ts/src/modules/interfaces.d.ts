interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

interface AddTodoFormProps {
  addTodo: AddTodo;
}

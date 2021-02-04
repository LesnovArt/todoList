import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem key={`${todo.text}${index}`} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

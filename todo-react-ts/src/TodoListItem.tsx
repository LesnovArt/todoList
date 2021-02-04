import React from "react";
import "./TodoListItem.css";

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.isDone ? "complete" : undefined}>
        <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};

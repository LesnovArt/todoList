import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { initialTodos } from "./db";
import { TodoList } from "./TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isDone: !todo.isDone,
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
        isDone: false,
      },
    ]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;

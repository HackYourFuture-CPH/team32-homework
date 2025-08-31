"use client";

import { useTodos } from "./TodoContext";

const TodoList = () => {
  const { todos, dispatch } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <span
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
            style={{ marginLeft: "1rem" }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
